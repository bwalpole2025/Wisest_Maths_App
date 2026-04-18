"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { getTopicsForCourse, getQuestionsForCourse } from "@/lib/data/courseData";
import { useCourse } from "@/hooks/useCourse";
import type { Question, Topic } from "@/lib/types";
import { MathText, MathTextInline } from "@/components/questions/MathText";
import { WorkedSolutionPanel } from "@/components/questions/WorkedSolution";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

const diffBadge: Record<string, string> = {
  Foundation: "bg-emerald-400/10 text-emerald-300 border-emerald-400/30",
  Standard: "bg-amber-400/10 text-amber-300 border-amber-400/30",
  Challenge: "bg-rose-400/10 text-rose-300 border-rose-400/30",
};

const diffDot: Record<string, string> = {
  Foundation: "bg-emerald-400",
  Standard: "bg-amber-400",
  Challenge: "bg-rose-400",
};

type ViewLevel = "categories" | "topics" | "questions";

function getSubcategoryData(topics: Topic[], allQuestions: Question[]) {
  const questionsByRef = new Map<string, number>();
  for (const q of allQuestions) {
    questionsByRef.set(q.topicRef, (questionsByRef.get(q.topicRef) || 0) + 1);
  }

  const subcatMap = new Map<string, { name: string; count: number; topicCount: number }>();
  for (const t of topics) {
    const existing = subcatMap.get(t.subcategory) || { name: t.subcategory, count: 0, topicCount: 0 };
    const qCount = questionsByRef.get(t.ref) || 0;
    existing.count += qCount;
    if (qCount > 0) existing.topicCount += 1;
    subcatMap.set(t.subcategory, existing);
  }

  return Array.from(subcatMap.values())
    .sort((a, b) => a.name.localeCompare(b.name));
}


function CategoryIllustration({ name, active }: { name: string; active: boolean }) {
  const o = active ? 1 : 0.4;

  const cards: Record<string, React.ReactNode> = {
    Algebra: (
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" className="h-full w-full" style={{ opacity: o }}>
        <defs>
          <linearGradient id="ag" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4338ca" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        <rect width="400" height="180" fill="url(#ag)" />
        <circle cx="380" cy="20" r="100" fill="white" opacity="0.05" />
        <circle cx="20" cy="170" r="80" fill="white" opacity="0.04" />
        <text x="24" y="80" fontSize="42" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.18">ax&#178; + bx + c</text>
        <text x="50" y="140" fontSize="24" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.12">x = &#8722;b &#177; &#8730;&#916; / 2a</text>
        <text x="260" y="50" fontSize="18" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.1">(a+b)&#178;</text>
        <text x="300" y="160" fontSize="60" fill="white" fontFamily="Georgia, serif" opacity="0.04">&#8721;</text>
      </svg>
    ),
    "Coordinate Geometry": (
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" className="h-full w-full" style={{ opacity: o }}>
        <defs>
          <linearGradient id="gg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#047857" />
            <stop offset="100%" stopColor="#0d9488" />
          </linearGradient>
        </defs>
        <rect width="400" height="180" fill="url(#gg)" />
        {Array.from({length: 16}, (_, i) => <line key={`gv${i}`} x1={25*i} y1="0" x2={25*i} y2="180" stroke="white" strokeWidth="0.5" opacity="0.07" />)}
        {Array.from({length: 8}, (_, i) => <line key={`gh${i}`} x1="0" y1={25*i} x2="400" y2={25*i} stroke="white" strokeWidth="0.5" opacity="0.07" />)}
        <line x1="50" y1="155" x2="370" y2="30" stroke="white" strokeWidth="2" opacity="0.2" />
        <circle cx="130" cy="120" r="50" stroke="white" strokeWidth="1.5" fill="none" opacity="0.12" />
        <circle cx="50" cy="155" r="4" fill="white" opacity="0.25" />
        <circle cx="370" cy="30" r="4" fill="white" opacity="0.25" />
        <text x="170" y="95" fontSize="22" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.12">y = mx + c</text>
      </svg>
    ),
    "Exponentials and Logarithms": (
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" className="h-full w-full" style={{ opacity: o }}>
        <defs>
          <linearGradient id="eg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c2410c" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
        </defs>
        <rect width="400" height="180" fill="url(#eg)" />
        <circle cx="370" cy="25" r="90" fill="white" opacity="0.05" />
        <path d="M0 170 Q 100 165 180 140 Q 260 100 320 50 Q 370 15 400 5" stroke="white" strokeWidth="2" fill="none" opacity="0.15" />
        <text x="30" y="85" fontSize="48" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.18">e&#739;</text>
        <text x="170" y="75" fontSize="28" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.1">ln x</text>
        <text x="50" y="150" fontSize="16" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.08">log&#8336; b = c</text>
      </svg>
    ),
    Functions: (
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" className="h-full w-full" style={{ opacity: o }}>
        <defs>
          <linearGradient id="fg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#db2777" />
          </linearGradient>
        </defs>
        <rect width="400" height="180" fill="url(#fg)" />
        <circle cx="370" cy="25" r="90" fill="white" opacity="0.05" />
        <circle cx="120" cy="90" r="50" stroke="white" strokeWidth="1" fill="none" opacity="0.1" />
        <circle cx="280" cy="90" r="50" stroke="white" strokeWidth="1" fill="none" opacity="0.1" />
        <path d="M 170 75 Q 200 65 230 75" stroke="white" strokeWidth="1" fill="none" opacity="0.15" />
        <path d="M 170 95 Q 200 85 230 95" stroke="white" strokeWidth="1" fill="none" opacity="0.15" />
        <text x="30" y="80" fontSize="38" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.15">f(x)</text>
        <text x="30" y="155" fontSize="16" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.08">f&#8315;&#185;(x)</text>
      </svg>
    ),
    Graphs: (
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" className="h-full w-full" style={{ opacity: o }}>
        <defs>
          <linearGradient id="grg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e40af" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>
        </defs>
        <rect width="400" height="180" fill="url(#grg)" />
        {Array.from({length: 16}, (_, i) => <line key={`grv${i}`} x1={25*i} y1="0" x2={25*i} y2="180" stroke="white" strokeWidth="0.3" opacity="0.06" />)}
        {Array.from({length: 8}, (_, i) => <line key={`grh${i}`} x1="0" y1={25*i} x2="400" y2={25*i} stroke="white" strokeWidth="0.3" opacity="0.06" />)}
        <path d="M 30 150 Q 100 30 180 100 Q 250 160 320 50 Q 370 0 400 30" stroke="white" strokeWidth="2.5" fill="none" opacity="0.2" strokeLinecap="round" />
        <path d="M 30 120 Q 120 70 210 120 Q 300 170 390 120" stroke="white" strokeWidth="1.5" fill="none" opacity="0.1" strokeDasharray="6 4" />
        <text x="300" y="40" fontSize="16" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.1">y = f(x)</text>
      </svg>
    ),
    "Numerical Methods": (
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" className="h-full w-full" style={{ opacity: o }}>
        <defs>
          <linearGradient id="ng" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>
        <rect width="400" height="180" fill="url(#ng)" />
        <circle cx="370" cy="25" r="90" fill="white" opacity="0.04" />
        <text x="30" y="85" fontSize="28" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.15">x&#8345;&#8330;&#8321; = g(x&#8345;)</text>
        <text x="30" y="140" fontSize="16" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.08">Newton-Raphson</text>
      </svg>
    ),
    Proof: (
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" className="h-full w-full" style={{ opacity: o }}>
        <defs>
          <linearGradient id="pg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#4338ca" />
          </linearGradient>
        </defs>
        <rect width="400" height="180" fill="url(#pg)" />
        <circle cx="370" cy="25" r="90" fill="white" opacity="0.04" />
        <text x="30" y="85" fontSize="44" fill="white" fontFamily="Georgia, serif" opacity="0.15">&#8756; Q.E.D.</text>
        <text x="30" y="140" fontSize="18" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.08">P &#8658; Q</text>
        <text x="280" y="60" fontSize="16" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.06">&#8704;n &#8712; &#8484;&#8314;</text>
      </svg>
    ),
    Sampling: (
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" className="h-full w-full" style={{ opacity: o }}>
        <defs>
          <linearGradient id="sg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f766e" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>
        <rect width="400" height="180" fill="url(#sg)" />
        {[40, 80, 120, 160, 200, 240, 280, 320, 360].map((x, i) => {
          const h = [30, 50, 70, 90, 85, 65, 45, 30, 15][i];
          return <rect key={x} x={x} y={165-h} width="30" height={h} fill="white" opacity={0.08 + i*0.01} rx="3" />;
        })}
        <path d="M 30 165 Q 120 150 200 70 Q 280 150 370 165" stroke="white" strokeWidth="1.5" fill="none" opacity="0.12" />
        <text x="100" y="50" fontSize="20" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.1">Population &#8594; Sample</text>
      </svg>
    ),
    "Sequences and Series": (
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" className="h-full w-full" style={{ opacity: o }}>
        <defs>
          <linearGradient id="sqg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6d28d9" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>
        <rect width="400" height="180" fill="url(#sqg)" />
        <circle cx="370" cy="25" r="90" fill="white" opacity="0.04" />
        <text x="20" y="100" fontSize="60" fill="white" fontFamily="Georgia, serif" opacity="0.12">&#8721;</text>
        <text x="90" y="90" fontSize="24" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.12">a + ar + ar&#178; + ...</text>
        <text x="60" y="150" fontSize="14" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.06">S = a/(1&#8722;r)</text>
        {[240, 265, 285, 300, 312, 321, 328, 333].map((x, i) => (
          <circle key={`d${i}`} cx={x} cy={150 - i*14} r={3.5 - i*0.3} fill="white" opacity={0.15 - i*0.015} />
        ))}
      </svg>
    ),
    Trigonometry: (
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" className="h-full w-full" style={{ opacity: o }}>
        <defs>
          <linearGradient id="tg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#be123c" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        <rect width="400" height="180" fill="url(#tg)" />
        <circle cx="370" cy="25" r="90" fill="white" opacity="0.04" />
        {/* Clean triangle */}
        <polygon points="40,155 180,155 180,35" fill="none" stroke="white" strokeWidth="2" opacity="0.2" strokeLinejoin="round" />
        <rect x="167" y="142" width="13" height="13" fill="none" stroke="white" strokeWidth="1" opacity="0.15" />
        <path d="M 66 155 A 26 26 0 0 0 55 133" fill="none" stroke="white" strokeWidth="1.5" opacity="0.2" />
        <text x="69" y="145" fontSize="18" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.2">&#952;</text>
        <text x="186" y="100" fontSize="11" fill="white" fontFamily="sans-serif" fontWeight="600" opacity="0.15" letterSpacing="2">OPP</text>
        <text x="85" y="172" fontSize="11" fill="white" fontFamily="sans-serif" fontWeight="600" opacity="0.15" letterSpacing="2">ADJ</text>
        <text x="75" y="85" fontSize="11" fill="white" fontFamily="sans-serif" fontWeight="600" opacity="0.15" letterSpacing="2" transform="rotate(-40,100,88)">HYP</text>
        {/* Unit circle */}
        <circle cx="310" cy="100" r="50" stroke="white" strokeWidth="1" fill="none" opacity="0.08" />
        <line x1="310" y1="100" x2="345" y2="70" stroke="white" strokeWidth="1" opacity="0.1" />
        <text x="240" y="45" fontSize="16" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.1">sin&#178;&#952; + cos&#178;&#952; = 1</text>
      </svg>
    ),
    "Quadratics and Cubics": (
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" className="h-full w-full" style={{ opacity: o }}>
        <defs>
          <linearGradient id="qcg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#4f46e5" />
          </linearGradient>
        </defs>
        <rect width="400" height="180" fill="url(#qcg)" />
        <circle cx="370" cy="20" r="90" fill="white" opacity="0.05" />
        <circle cx="30" cy="170" r="70" fill="white" opacity="0.04" />
        {/* Parabola */}
        <path d="M 30 150 Q 100 20 170 90 Q 200 120 230 90 Q 260 60 290 90 Q 330 140 400 50" stroke="white" strokeWidth="2" fill="none" opacity="0.15" strokeLinecap="round" />
        {/* Cubic curve */}
        <path d="M 0 100 Q 60 160 120 80 Q 180 0 240 100 Q 300 180 370 60" stroke="white" strokeWidth="1.5" fill="none" opacity="0.1" strokeDasharray="6 4" strokeLinecap="round" />
        <text x="24" y="75" fontSize="36" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.15">x&#179; + ax&#178;</text>
        <text x="50" y="140" fontSize="20" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.08">ax&#178; + bx + c</text>
        <text x="280" y="160" fontSize="14" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.06">&#916; = b&#178; - 4ac</text>
      </svg>
    ),
    "Inequalities and Simultaneous Equations": (
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" className="h-full w-full" style={{ opacity: o }}>
        <defs>
          <linearGradient id="iseg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>
        </defs>
        <rect width="400" height="180" fill="url(#iseg)" />
        <circle cx="370" cy="20" r="90" fill="white" opacity="0.05" />
        <circle cx="30" cy="170" r="70" fill="white" opacity="0.04" />
        {/* Shaded region hint */}
        <path d="M 50 140 L 200 40 L 350 140 Z" fill="white" opacity="0.04" />
        {/* Two intersecting lines */}
        <line x1="30" y1="150" x2="370" y2="30" stroke="white" strokeWidth="2" opacity="0.15" />
        <line x1="30" y1="60" x2="370" y2="130" stroke="white" strokeWidth="1.5" opacity="0.12" strokeDasharray="6 4" />
        <circle cx="220" cy="85" r="4" fill="white" opacity="0.25" />
        <text x="24" y="75" fontSize="34" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.15">x &gt; 2</text>
        <text x="50" y="145" fontSize="18" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.08">y = 2x + 1</text>
        <text x="240" y="55" fontSize="16" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.06">x + y = 5</text>
      </svg>
    ),
    "Binomial Expansions": (
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" className="h-full w-full" style={{ opacity: o }}>
        <defs>
          <linearGradient id="beg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0d9488" />
            <stop offset="100%" stopColor="#6d28d9" />
          </linearGradient>
        </defs>
        <rect width="400" height="180" fill="url(#beg)" />
        <circle cx="370" cy="20" r="90" fill="white" opacity="0.05" />
        <text x="24" y="70" fontSize="32" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.15">(a + b)&#8319;</text>
        <text x="40" y="120" fontSize="18" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.1">1, 1, 1, 2, 1, 1, 3, 3, 1</text>
        <text x="220" y="55" fontSize="22" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.08">&#8319;C&#7523;</text>
        <text x="200" y="155" fontSize="14" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.06">n! / r!(n-r)!</text>
      </svg>
    ),
    Differentiation: (
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" className="h-full w-full" style={{ opacity: o }}>
        <defs>
          <linearGradient id="difg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0e7490" />
            <stop offset="100%" stopColor="#4f46e5" />
          </linearGradient>
        </defs>
        <rect width="400" height="180" fill="url(#difg)" />
        <circle cx="380" cy="15" r="100" fill="white" opacity="0.05" />
        <circle cx="20" cy="170" r="80" fill="white" opacity="0.04" />
        {/* Curve y = x³ shape */}
        <path d="M 40 155 Q 80 160 120 130 Q 160 90 200 85 Q 240 80 280 50 Q 320 20 370 15" stroke="white" strokeWidth="2" fill="none" opacity="0.2" strokeLinecap="round" />
        {/* Tangent line touching curve at a point */}
        <line x1="130" y1="160" x2="270" y2="55" stroke="white" strokeWidth="1.5" opacity="0.18" strokeLinecap="round" />
        {/* Point of tangency */}
        <circle cx="200" cy="85" r="3.5" fill="white" opacity="0.3" />
        {/* Small right-angle triangle for gradient */}
        <line x1="170" y1="100" x2="230" y2="100" stroke="white" strokeWidth="0.8" opacity="0.1" strokeDasharray="3 2" />
        <line x1="230" y1="100" x2="230" y2="70" stroke="white" strokeWidth="0.8" opacity="0.1" strokeDasharray="3 2" />
        <text x="237" y="90" fontSize="10" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.12">Δy</text>
        <text x="192" y="112" fontSize="10" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.12">Δx</text>
        <text x="24" y="75" fontSize="36" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.15">dy/dx</text>
        <text x="50" y="130" fontSize="18" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.08">nxⁿ⁻¹</text>
        <text x="290" y="160" fontSize="14" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.06">f′(a) = gradient</text>
      </svg>
    ),
    Integration: (
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" className="h-full w-full" style={{ opacity: o }}>
        <defs>
          <linearGradient id="intg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7e22ce" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>
        <rect width="400" height="180" fill="url(#intg)" />
        <circle cx="380" cy="15" r="100" fill="white" opacity="0.05" />
        <circle cx="20" cy="170" r="80" fill="white" opacity="0.04" />
        {/* Curve */}
        <path d="M 100 155 Q 150 140 190 100 Q 230 55 270 40 Q 310 30 350 35" stroke="white" strokeWidth="2" fill="none" opacity="0.2" strokeLinecap="round" />
        {/* Shaded area under curve — vertical strips for a hand-drawn feel */}
        <path d="M 140 148 Q 170 130 200 95 Q 230 60 260 45 Q 290 35 310 33 L310 165 L140 165 Z" fill="white" opacity="0.06" />
        {/* Limit lines a and b */}
        <line x1="140" y1="148" x2="140" y2="165" stroke="white" strokeWidth="1.5" opacity="0.2" />
        <line x1="310" y1="33" x2="310" y2="165" stroke="white" strokeWidth="1.5" opacity="0.2" />
        <text x="135" y="175" fontSize="12" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.2">a</text>
        <text x="305" y="175" fontSize="12" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.2">b</text>
        {/* x-axis */}
        <line x1="80" y1="165" x2="370" y2="165" stroke="white" strokeWidth="0.8" opacity="0.1" />
        <text x="20" y="80" fontSize="48" fill="white" fontFamily="Georgia, serif" opacity="0.15">∫</text>
        <text x="68" y="72" fontSize="22" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.12">f(x) dx</text>
        <text x="20" y="55" fontSize="12" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.1">b</text>
        <text x="20" y="100" fontSize="12" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.1">a</text>
        <text x="200" y="130" fontSize="14" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.08">area</text>
      </svg>
    ),
    Vectors: (
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" className="h-full w-full" style={{ opacity: o }}>
        <defs>
          <linearGradient id="vg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1d4ed8" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>
          <marker id="ma" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 1L8 5L0 9z" fill="white" opacity="0.25" /></marker>
          <marker id="mb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 1L8 5L0 9z" fill="white" opacity="0.15" /></marker>
        </defs>
        <rect width="400" height="180" fill="url(#vg)" />
        <circle cx="370" cy="25" r="90" fill="white" opacity="0.04" />
        <line x1="40" y1="145" x2="180" y2="50" stroke="white" strokeWidth="2.5" opacity="0.2" markerEnd="url(#ma)" />
        <line x1="180" y1="50" x2="330" y2="80" stroke="white" strokeWidth="2.5" opacity="0.2" markerEnd="url(#ma)" />
        <line x1="40" y1="145" x2="330" y2="80" stroke="white" strokeWidth="1.5" opacity="0.1" strokeDasharray="8 5" markerEnd="url(#mb)" />
        <text x="90" y="82" fontSize="20" fill="white" fontFamily="Georgia, serif" fontStyle="italic" fontWeight="bold" opacity="0.15">a</text>
        <text x="245" y="52" fontSize="20" fill="white" fontFamily="Georgia, serif" fontStyle="italic" fontWeight="bold" opacity="0.15">b</text>
        <text x="170" y="135" fontSize="16" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.1">a + b</text>
      </svg>
    ),
    /* ── Year 2 chapters ──────────────────────────────────── */
    "Algebraic Methods": (
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" className="h-full w-full" style={{ opacity: o }}>
        <defs>
          <linearGradient id="y2am" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4338ca" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
        </defs>
        <rect width="400" height="180" fill="url(#y2am)" />
        <circle cx="370" cy="25" r="90" fill="white" opacity="0.05" />
        <circle cx="30" cy="160" r="70" fill="white" opacity="0.04" />
        {/* LHS fraction */}
        <g opacity="0.22">
          <text x="40" y="55" fontSize="22" fill="white" fontFamily="Georgia, serif" fontStyle="italic" textAnchor="middle">6x − 2</text>
          <line x1="10" y1="66" x2="70" y2="66" stroke="white" strokeWidth="1.5" />
          <text x="40" y="86" fontSize="15" fill="white" fontFamily="Georgia, serif" fontStyle="italic" textAnchor="middle">(x−2)(x+3)</text>
        </g>
        {/* equivalence */}
        <text x="98" y="70" fontSize="26" fill="white" fontFamily="Georgia, serif" opacity="0.3">≡</text>
        {/* RHS fraction A */}
        <g opacity="0.22">
          <text x="150" y="55" fontSize="22" fill="white" fontFamily="Georgia, serif" fontStyle="italic" textAnchor="middle">A</text>
          <line x1="130" y1="66" x2="170" y2="66" stroke="white" strokeWidth="1.5" />
          <text x="150" y="86" fontSize="15" fill="white" fontFamily="Georgia, serif" fontStyle="italic" textAnchor="middle">x − 2</text>
        </g>
        {/* plus sign at bar level */}
        <text x="190" y="72" fontSize="26" fill="white" fontFamily="Georgia, serif" opacity="0.3" textAnchor="middle">+</text>
        {/* RHS fraction B */}
        <g opacity="0.22">
          <text x="230" y="55" fontSize="22" fill="white" fontFamily="Georgia, serif" fontStyle="italic" textAnchor="middle">B</text>
          <line x1="210" y1="66" x2="250" y2="66" stroke="white" strokeWidth="1.5" />
          <text x="230" y="86" fontSize="15" fill="white" fontFamily="Georgia, serif" fontStyle="italic" textAnchor="middle">x + 3</text>
        </g>
        {/* Q.E.D. & division callouts */}
        <text x="26" y="144" fontSize="24" fill="white" fontFamily="Georgia, serif" opacity="0.2">∴ Q.E.D.</text>
        <text x="170" y="144" fontSize="16" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.14">p(x) ÷ (x − k)</text>
      </svg>
    ),
    "Functions and Graphs": (
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" className="h-full w-full" style={{ opacity: o }}>
        <defs>
          <linearGradient id="y2fg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#db2777" />
          </linearGradient>
        </defs>
        <rect width="400" height="180" fill="url(#y2fg)" />
        <circle cx="370" cy="25" r="90" fill="white" opacity="0.05" />
        {/* V-shape modulus graph */}
        <g transform="translate(30,25)" opacity="0.18" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
          <line x1="0" y1="85" x2="140" y2="85" strokeWidth="0.8" opacity="0.5" />
          <line x1="70" y1="0" x2="70" y2="130" strokeWidth="0.8" opacity="0.5" />
          <polyline points="10,30 70,85 130,30" />
        </g>
        <text x="78" y="140" fontSize="14" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.18">y = |x − 2|</text>
        {/* Arrow from f to f⁻¹ */}
        <g transform="translate(220,80)" opacity="0.2" fill="white" fontFamily="Georgia, serif" fontStyle="italic">
          <text x="0" y="0" fontSize="28">f(x)</text>
          <path d="M 70 -6 L 120 -6" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M 120 -6 L 114 -10 L 114 -2 Z" fill="white" />
          <text x="125" y="2" fontSize="28">f⁻¹(x)</text>
        </g>
        <text x="220" y="120" fontSize="13" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.12">fg(x), gf(x)</text>
      </svg>
    ),
    "Sequences and Series (Y2)": (
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" className="h-full w-full" style={{ opacity: o }}>
        <defs>
          <linearGradient id="y2ss" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6d28d9" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>
        </defs>
        <rect width="400" height="180" fill="url(#y2ss)" />
        <circle cx="370" cy="25" r="90" fill="white" opacity="0.05" />
        {/* Sigma + limits */}
        <text x="24" y="50" fontSize="14" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.6">∞</text>
        <text x="20" y="110" fontSize="72" fill="white" fontFamily="Georgia, serif" opacity="0.22">Σ</text>
        <text x="24" y="140" fontSize="12" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.5">r=0</text>
        {/* Summand term */}
        <text x="88" y="78" fontSize="20" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.25">a r</text>
        <text x="116" y="68" fontSize="12" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.22">r</text>
        {/* equals */}
        <text x="138" y="78" fontSize="22" fill="white" fontFamily="Georgia, serif" opacity="0.3">=</text>
        {/* S∞ fraction — numerator, bar, denominator all centered on x=200 */}
        <g opacity="0.26">
          <text x="200" y="66" fontSize="22" fill="white" fontFamily="Georgia, serif" fontStyle="italic" textAnchor="middle">a</text>
          <line x1="172" y1="78" x2="228" y2="78" stroke="white" strokeWidth="1.5" />
          <text x="200" y="100" fontSize="20" fill="white" fontFamily="Georgia, serif" fontStyle="italic" textAnchor="middle">1 − r</text>
        </g>
        {/* Validity */}
        <text x="258" y="160" fontSize="12" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.16">|r| &lt; 1</text>
        {/* Geometric decay dots */}
        {[260, 286, 307, 323, 335, 343, 349].map((x, i) => (
          <circle key={`s${i}`} cx={x} cy={50 - i * 3} r={6 - i * 0.6} fill="white" opacity={0.22 - i * 0.025}>
            <animate attributeName="opacity" values={`${0.1};${0.22 - i * 0.02};${0.1}`} dur={`${3 + i * 0.3}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>
    ),
    "Binomial Expansion (Y2)": (
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" className="h-full w-full" style={{ opacity: o }}>
        <defs>
          <linearGradient id="y2be" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0d9488" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        <rect width="400" height="180" fill="url(#y2be)" />
        <circle cx="370" cy="25" r="90" fill="white" opacity="0.05" />
        {/* (1 + x) with exponent positioned explicitly so nothing misaligns */}
        <text x="24" y="70" fontSize="34" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.24">(1 + x)</text>
        <text x="160" y="52" fontSize="20" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.24">−n</text>
        <text x="24" y="102" fontSize="16" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.15">= 1 + nx + ½·n(n−1)x² + …</text>
        <text x="24" y="128" fontSize="12" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.12">valid for |x| &lt; 1</text>
        {/* Pascal-like dots */}
        <g transform="translate(290,40)" opacity="0.2">
          {[
            [0, 0], [-16, 20], [16, 20], [-32, 40], [0, 40], [32, 40], [-48, 60], [-16, 60], [16, 60], [48, 60],
          ].map(([x, y], i) => (
            <circle key={`p${i}`} cx={x + 48} cy={y} r="5" fill="white" />
          ))}
        </g>
      </svg>
    ),
    "Radians": (
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" className="h-full w-full" style={{ opacity: o }}>
        <defs>
          <linearGradient id="y2ra" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0891b2" />
            <stop offset="100%" stopColor="#1e40af" />
          </linearGradient>
        </defs>
        <rect width="400" height="180" fill="url(#y2ra)" />
        <circle cx="370" cy="25" r="90" fill="white" opacity="0.05" />
        {/* Circle with sector */}
        <g transform="translate(100,90)" opacity="0.6">
          <circle r="60" stroke="white" strokeWidth="1.5" fill="none" opacity="0.2" />
          <path d="M 60 0 A 60 60 0 0 0 30 51.96 L 0 0 Z" fill="white" opacity="0.1" />
          <path d="M 60 0 A 60 60 0 0 0 30 51.96" stroke="white" strokeWidth="2.5" fill="none" opacity="0.4" />
          <line x1="0" y1="0" x2="60" y2="0" stroke="white" strokeWidth="1" opacity="0.25" />
          <line x1="0" y1="0" x2="30" y2="51.96" stroke="white" strokeWidth="1" opacity="0.25" />
          <text x="20" y="16" fontSize="12" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.35">θ</text>
          <text x="30" y="-6" fontSize="10" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.3">r</text>
        </g>
        <text x="200" y="70" fontSize="22" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.22">s = r θ</text>
        <text x="200" y="105" fontSize="18" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.14">A = ½ r² θ</text>
        <text x="200" y="140" fontSize="14" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.1">180° = π rad</text>
      </svg>
    ),
    "Trigonometry (Y2)": (
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" className="h-full w-full" style={{ opacity: o }}>
        <defs>
          <linearGradient id="y2tf" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#be123c" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        <rect width="400" height="180" fill="url(#y2tf)" />
        <circle cx="370" cy="25" r="90" fill="white" opacity="0.05" />
        {/* Sec x graph with asymptotes */}
        <g transform="translate(20,30)" opacity="0.22" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
          <line x1="0" y1="60" x2="360" y2="60" strokeWidth="0.6" opacity="0.5" />
          <line x1="80" y1="0" x2="80" y2="120" strokeDasharray="3 4" strokeWidth="1" opacity="0.5" />
          <line x1="200" y1="0" x2="200" y2="120" strokeDasharray="3 4" strokeWidth="1" opacity="0.5" />
          <line x1="320" y1="0" x2="320" y2="120" strokeDasharray="3 4" strokeWidth="1" opacity="0.5" />
          <path d="M 20 10 Q 70 60 30 115" />
          <path d="M 130 115 Q 150 70 170 115" />
          <path d="M 230 10 Q 270 60 230 115" />
          <path d="M 350 10 Q 310 60 350 115" />
        </g>
        <text x="22" y="170" fontSize="13" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.24">y = sec x</text>
        <text x="210" y="170" fontSize="13" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.14">1 + tan²θ = sec²θ</text>
      </svg>
    ),
    "Trigonometry and Modelling": (
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" className="h-full w-full" style={{ opacity: o }}>
        <defs>
          <linearGradient id="y2tm" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#be123c" />
          </linearGradient>
        </defs>
        <rect width="400" height="180" fill="url(#y2tm)" />
        <circle cx="370" cy="25" r="90" fill="white" opacity="0.05" />
        {/* Two overlapping sine waves */}
        <g transform="translate(20,40)" fill="none" strokeLinecap="round">
          <line x1="0" y1="60" x2="360" y2="60" stroke="white" strokeWidth="0.6" opacity="0.25" />
          <path d="M 0 60 Q 45 0 90 60 T 180 60 T 270 60 T 360 60" stroke="white" strokeWidth="2.5" opacity="0.3" />
          <path d="M 0 60 Q 45 120 90 60 T 180 60 T 270 60 T 360 60" stroke="white" strokeWidth="2" opacity="0.18" strokeDasharray="5 5" />
        </g>
        <text x="22" y="158" fontSize="15" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.22">sin(A + B) = sinA cosB + cosA sinB</text>
        <text x="22" y="34" fontSize="15" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.2">R sin(x − α)</text>
      </svg>
    ),
    "Parametric Equations": (
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" className="h-full w-full" style={{ opacity: o }}>
        <defs>
          <linearGradient id="y2pe" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#047857" />
            <stop offset="100%" stopColor="#4338ca" />
          </linearGradient>
        </defs>
        <rect width="400" height="180" fill="url(#y2pe)" />
        <circle cx="370" cy="25" r="90" fill="white" opacity="0.05" />
        {/* Ellipse traced */}
        <g transform="translate(100,90)" opacity="0.6" fill="none">
          <line x1="-75" y1="0" x2="75" y2="0" stroke="white" strokeWidth="0.6" opacity="0.3" />
          <line x1="0" y1="-55" x2="0" y2="55" stroke="white" strokeWidth="0.6" opacity="0.3" />
          <ellipse rx="65" ry="40" stroke="white" strokeWidth="2" opacity="0.3" />
          <circle cx="46" cy="-28" r="4" fill="white" opacity="0.5">
            <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="8s" repeatCount="indefinite" />
          </circle>
        </g>
        <text x="200" y="60" fontSize="18" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.22">x = 3 cos t</text>
        <text x="200" y="85" fontSize="18" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.22">y = 2 sin t</text>
        <text x="200" y="125" fontSize="13" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.12">t → parameter</text>
      </svg>
    ),
    "Differentiation (Y2)": (
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" className="h-full w-full" style={{ opacity: o }}>
        <defs>
          <linearGradient id="y2df" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0e7490" />
            <stop offset="100%" stopColor="#4338ca" />
          </linearGradient>
        </defs>
        <rect width="400" height="180" fill="url(#y2df)" />
        <circle cx="380" cy="15" r="100" fill="white" opacity="0.05" />
        <circle cx="20" cy="170" r="80" fill="white" opacity="0.04" />
        {/* Curve with tangent */}
        <path d="M 40 155 Q 80 160 120 130 Q 160 90 200 85 Q 240 80 280 50 Q 320 20 370 15" stroke="white" strokeWidth="2" fill="none" opacity="0.22" strokeLinecap="round" />
        <line x1="130" y1="160" x2="270" y2="55" stroke="white" strokeWidth="1.5" opacity="0.18" strokeLinecap="round" />
        <circle cx="200" cy="85" r="3.5" fill="white" opacity="0.3" />
        {/* Leibniz dy/dx as a proper stacked fraction */}
        <g opacity="0.24">
          <text x="50" y="54" fontSize="22" fill="white" fontFamily="Georgia, serif" fontStyle="italic" textAnchor="middle">dy</text>
          <line x1="28" y1="66" x2="72" y2="66" stroke="white" strokeWidth="1.5" />
          <text x="50" y="88" fontSize="22" fill="white" fontFamily="Georgia, serif" fontStyle="italic" textAnchor="middle">dx</text>
        </g>
        <text x="96" y="76" fontSize="22" fill="white" fontFamily="Georgia, serif" opacity="0.25">=</text>
        {/* Chain rule */}
        <g opacity="0.2">
          <text x="146" y="54" fontSize="18" fill="white" fontFamily="Georgia, serif" fontStyle="italic" textAnchor="middle">dy</text>
          <line x1="126" y1="66" x2="166" y2="66" stroke="white" strokeWidth="1.2" />
          <text x="146" y="86" fontSize="18" fill="white" fontFamily="Georgia, serif" fontStyle="italic" textAnchor="middle">du</text>
        </g>
        <text x="186" y="76" fontSize="18" fill="white" fontFamily="Georgia, serif" opacity="0.22">·</text>
        <g opacity="0.2">
          <text x="224" y="54" fontSize="18" fill="white" fontFamily="Georgia, serif" fontStyle="italic" textAnchor="middle">du</text>
          <line x1="204" y1="66" x2="244" y2="66" stroke="white" strokeWidth="1.2" />
          <text x="224" y="86" fontSize="18" fill="white" fontFamily="Georgia, serif" fontStyle="italic" textAnchor="middle">dx</text>
        </g>
        <text x="24" y="160" fontSize="13" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.14">chain · product · quotient</text>
      </svg>
    ),
    "Integration (Y2)": (
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" className="h-full w-full" style={{ opacity: o }}>
        <defs>
          <linearGradient id="y2in" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7e22ce" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
        </defs>
        <rect width="400" height="180" fill="url(#y2in)" />
        <circle cx="380" cy="15" r="100" fill="white" opacity="0.05" />
        <path d="M 100 155 Q 150 140 190 100 Q 230 55 270 40 Q 310 30 350 35" stroke="white" strokeWidth="2" fill="none" opacity="0.2" strokeLinecap="round" />
        <path d="M 140 148 Q 170 130 200 95 Q 230 60 260 45 Q 290 35 310 33 L 310 165 L 140 165 Z" fill="white" opacity="0.06" />
        <line x1="80" y1="165" x2="370" y2="165" stroke="white" strokeWidth="0.8" opacity="0.1" />
        <text x="20" y="72" fontSize="52" fill="white" fontFamily="Georgia, serif" opacity="0.2">∫</text>
        <text x="66" y="62" fontSize="18" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.14">u dv = uv − ∫v du</text>
        <text x="66" y="88" fontSize="14" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.1">substitution · parts</text>
      </svg>
    ),
    "Vectors (Y2)": (
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" className="h-full w-full" style={{ opacity: o }}>
        <defs>
          <linearGradient id="y2vc" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1d4ed8" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <marker id="v2ma" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M 0 1 L 8 5 L 0 9 z" fill="white" opacity="0.35" />
          </marker>
        </defs>
        <rect width="400" height="180" fill="url(#y2vc)" />
        <circle cx="370" cy="25" r="90" fill="white" opacity="0.04" />
        {/* 3D axes */}
        <g transform="translate(100,100)" stroke="white" fill="none" opacity="0.35" strokeLinecap="round" strokeWidth="1.5">
          <line x1="0" y1="0" x2="70" y2="0" markerEnd="url(#v2ma)" />
          <line x1="0" y1="0" x2="0" y2="-60" markerEnd="url(#v2ma)" />
          <line x1="0" y1="0" x2="-40" y2="30" markerEnd="url(#v2ma)" />
          <text x="72" y="6" fontSize="12" fill="white" fontFamily="Georgia, serif" fontStyle="italic" stroke="none">x</text>
          <text x="5" y="-62" fontSize="12" fill="white" fontFamily="Georgia, serif" fontStyle="italic" stroke="none">z</text>
          <text x="-52" y="38" fontSize="12" fill="white" fontFamily="Georgia, serif" fontStyle="italic" stroke="none">y</text>
        </g>
        {/* 3D vector */}
        <line x1="100" y1="100" x2="220" y2="40" stroke="white" strokeWidth="2.5" opacity="0.4" markerEnd="url(#v2ma)" />
        <text x="226" y="40" fontSize="18" fill="white" fontFamily="Georgia, serif" fontStyle="italic" fontWeight="bold" opacity="0.3">a</text>
        <text x="250" y="80" fontSize="14" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.2">3i + 4j + 12k</text>
        <text x="250" y="105" fontSize="12" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.14">|a| = 13</text>
      </svg>
    ),
  };

  const fallback = (
    <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" className="h-full w-full" style={{ opacity: o }}>
      <defs>
        <linearGradient id="dg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#475569" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>
      </defs>
      <rect width="400" height="180" fill="url(#dg)" />
      <circle cx="370" cy="25" r="90" fill="white" opacity="0.04" />
    </svg>
  );

  return cards[name] || fallback;
}

export default function StudentQuestionBank() {
  const { course } = useCourse();
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get("category");
  const moduleParam = searchParams.get("module");
  const moduleFilter = moduleParam ? Number(moduleParam) : null;

  const allTopics = useMemo(() => (course ? getTopicsForCourse(course) : []), [course]);
  const topics = useMemo(() => {
    return allTopics.filter((t) => {
      if (categoryFilter && t.category !== categoryFilter) return false;
      if (moduleFilter && t.module !== moduleFilter) return false;
      return true;
    });
  }, [allTopics, categoryFilter, moduleFilter]);
  const allQuestions = useMemo(() => (course ? getQuestionsForCourse(course) : []), [course]);

  const [viewLevel, setViewLevel] = useState<ViewLevel>("categories");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [selectedTopicRef, setSelectedTopicRef] = useState<string | null>(null);

  const [attemptQ, setAttemptQ] = useState<Question | null>(null);
  const [studentAnswer, setStudentAnswer] = useState("");
  const [hasChecked, setHasChecked] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  const subcategories = useMemo(() => {
    const all = getSubcategoryData(topics, allQuestions);
    if (moduleFilter === 2) {
      const hidden = new Set([
        "Differentiation",
        "Coordinate Geometry",
        "Functions",
        "Graphs",
        "Integration",
        "Proof",
        "Radians",
        "Sequences and Series",
        "Trigonometry",
        "Trigonometry and Modelling",
        "Vectors",
      ]);
      return all.filter((s) => !hidden.has(s.name));
    }
    return all;
  }, [topics, allQuestions, moduleFilter]);

  const subcategoryTopics = useMemo(() => {
    if (!selectedSubcategory) return [];
    const questionsByRef = new Map<string, number>();
    for (const q of allQuestions) {
      questionsByRef.set(q.topicRef, (questionsByRef.get(q.topicRef) || 0) + 1);
    }
    return topics
      .filter((t) => t.subcategory === selectedSubcategory)
      .map((t) => ({ ...t, questionCount: questionsByRef.get(t.ref) || 0 }))
      .filter((t) => t.questionCount > 0)
      .sort((a, b) => a.ref.localeCompare(b.ref, undefined, { numeric: true }));
  }, [selectedSubcategory, topics, allQuestions]);

  const topicQuestions = useMemo(() => {
    if (!selectedTopicRef) return [];
    return allQuestions
      .filter((q) => q.topicRef === selectedTopicRef)
      .sort((a, b) => {
        const order: Record<string, number> = { Foundation: 0, Standard: 1, Challenge: 2 };
        return (order[a.difficulty] ?? 1) - (order[b.difficulty] ?? 1);
      });
  }, [selectedTopicRef, allQuestions]);

  const selectedTopic = topics.find((t) => t.ref === selectedTopicRef);

  const goToCategories = () => { setViewLevel("categories"); setSelectedSubcategory(null); setSelectedTopicRef(null); };
  const goToTopics = (sub: string) => { setSelectedSubcategory(sub); setSelectedTopicRef(null); setViewLevel("topics"); };
  const goToQuestions = (ref: string) => { setSelectedTopicRef(ref); setViewLevel("questions"); };

  const openAttempt = (q: Question) => { setAttemptQ(q); setStudentAnswer(""); setHasChecked(false); setShowSolution(false); };
  const closeAttempt = () => { setAttemptQ(null); setStudentAnswer(""); setHasChecked(false); setShowSolution(false); };

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-8 fade-up">
        <div className="flex items-center gap-2 text-xs font-medium text-foreground/50">
          <button onClick={goToCategories} className="hover:text-accent transition-colors">Question Bank</button>
          {selectedSubcategory && (
            <>
              <span className="text-foreground/30">/</span>
              <button onClick={() => goToTopics(selectedSubcategory)} className="hover:text-accent transition-colors">
                {selectedSubcategory}
              </button>
            </>
          )}
          {selectedTopic && (
            <>
              <span className="text-foreground/30">/</span>
              <span className="text-foreground/80"><MathTextInline text={selectedTopic.title} /></span>
            </>
          )}
        </div>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-gradient-cool">
          {viewLevel === "categories" ? "Question Bank" : viewLevel === "topics" ? selectedSubcategory : (selectedTopic ? <MathTextInline text={selectedTopic.title} /> : null)}
        </h1>
        <p className="mt-1.5 text-sm text-foreground/60">
          {viewLevel === "categories" && "Select a topic area to browse questions."}
          {viewLevel === "topics" && "Select a topic to view questions."}
          {viewLevel === "questions" && (topicQuestions.length + " question" + (topicQuestions.length !== 1 ? "s" : "") + " available.")}
        </p>
      </div>

      {viewLevel === "categories" && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 fade-up-delay-1">
          {subcategories.map((sub) => (
            <button
              key={sub.name}
              onClick={() => sub.count > 0 && goToTopics(sub.name)}
              disabled={sub.count === 0}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 text-left transition-all duration-500 ${
                sub.count > 0
                  ? "hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_20px_60px_-20px_rgba(99,102,241,0.4)] cursor-pointer"
                  : "opacity-40 cursor-not-allowed"
              }`}
              style={{ minHeight: "200px" }}
            >
              <div className="absolute inset-0">
                <CategoryIllustration name={sub.name} active={sub.count > 0} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
              <div className="relative z-10 flex h-full min-h-[200px] flex-col justify-end p-5">
                <h2 className="text-lg font-bold text-white tracking-tight">
                  {sub.name}
                </h2>
                <p className="mt-1 text-xs font-medium text-white/60">
                  {sub.count > 0
                    ? <>{sub.topicCount} topic{sub.topicCount !== 1 ? "s" : ""} &middot; {sub.count} question{sub.count !== 1 ? "s" : ""}</>
                    : <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-medium backdrop-blur-sm">Coming Soon</span>
                  }
                </p>
              </div>
              <div className="absolute inset-0 ring-0 ring-accent/0 group-hover:ring-1 group-hover:ring-accent/30 transition-all duration-500 rounded-2xl pointer-events-none" />
            </button>
          ))}
        </div>
      )}

      {viewLevel === "topics" && (
        <>
          <button onClick={goToCategories} className="mb-5 inline-flex items-center gap-1.5 text-xs font-medium text-foreground/50 hover:text-accent transition-colors">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to categories
          </button>
          <div className="grid gap-3 sm:grid-cols-2 fade-up-delay-1">
            {subcategoryTopics.map((t) => (
              <button
                key={t.id}
                onClick={() => goToQuestions(t.ref)}
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-surface/60 p-4 text-left backdrop-blur-sm transition-all hover:border-accent/40 hover:bg-surface hover:-translate-y-0.5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent/20 to-secondary/20 ring-1 ring-white/10 font-mono text-xs font-bold text-accent">
                  {t.ref}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-accent truncate transition-colors"><MathTextInline text={t.title} /></h3>
                  <p className="mt-0.5 text-xs text-foreground/50">{t.questionCount} question{t.questionCount !== 1 ? "s" : ""}</p>
                </div>
                <span className="text-foreground/30 group-hover:text-accent group-hover:translate-x-0.5 transition-all">&#8594;</span>
              </button>
            ))}
          </div>
        </>
      )}

      {viewLevel === "questions" && (
        <>
          <button
            onClick={() => selectedSubcategory && goToTopics(selectedSubcategory)}
            className="mb-5 inline-flex items-center gap-1.5 text-xs font-medium text-foreground/50 hover:text-accent transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to {selectedSubcategory}
          </button>
          <div className="space-y-4 fade-up-delay-1">
            {topicQuestions.map((q, idx) => (
              <div key={q.id} className="group overflow-hidden rounded-xl border border-white/10 bg-surface/60 backdrop-blur-sm transition-all hover:border-accent/30 hover:shadow-[0_10px_40px_-15px_rgba(99,102,241,0.3)]">
                <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.02] px-5 py-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent/20 to-secondary/20 ring-1 ring-white/10 text-sm font-bold text-accent font-mono">
                      {idx + 1}
                    </span>
                    <span className="text-sm font-semibold text-foreground"><MathTextInline text={q.topicTitle} /></span>
                    <Badge variant="outline" className={diffBadge[q.difficulty]}>{q.difficulty}</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-xs font-medium text-foreground/60">{q.marks} {q.marks === 1 ? "mark" : "marks"}</span>
                    {q.examStyle && <span className="rounded-full bg-secondary/15 border border-secondary/30 px-2.5 py-0.5 text-xs font-medium text-secondary">Exam</span>}
                  </div>
                </div>
                <div className="px-5 py-5">
                  <div className="text-sm leading-relaxed text-foreground/85 overflow-x-auto"><MathText text={q.questionText} /></div>
                  <div className="mt-5 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {q.tags.slice(0, 4).map((tag) => (
                        <span key={tag} className="rounded-full border border-white/5 bg-white/[0.02] px-2.5 py-0.5 text-[11px] text-foreground/50">{tag}</span>
                      ))}
                    </div>
                    <button onClick={() => openAttempt(q)} className="btn-shine shrink-0 rounded-lg bg-gradient-to-r from-accent to-[#a78bfa] px-5 py-2.5 text-sm font-semibold text-primary shadow-glow-sm transition-all hover:-translate-y-0.5 hover:shadow-glow">
                      Attempt
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <Dialog open={!!attemptQ} onOpenChange={(o) => !o && closeAttempt()}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-4xl border-white/10 bg-surface">
          {attemptQ && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-secondary text-sm font-bold text-primary font-mono shadow-glow-sm">{attemptQ.topicRef}</span>
                  <div>
                    <DialogTitle className="text-lg"><MathTextInline text={attemptQ.topicTitle} /></DialogTitle>
                    <div className="mt-1.5 flex items-center gap-2">
                      <Badge variant="outline" className={diffBadge[attemptQ.difficulty]}>{attemptQ.difficulty}</Badge>
                      <span className="text-xs text-foreground/60">{attemptQ.marks} {attemptQ.marks === 1 ? "mark" : "marks"}</span>
                      {attemptQ.examStyle && <span className="rounded-full bg-secondary/15 border border-secondary/30 px-2 py-0.5 text-xs font-medium text-secondary">Exam Style</span>}
                    </div>
                  </div>
                </div>
              </DialogHeader>

              <div className="mt-5 rounded-xl border border-accent/20 bg-gradient-to-br from-accent/[0.06] to-transparent p-5">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">Question</p>
                <div className="text-[0.95rem] leading-relaxed text-foreground/90 overflow-x-auto">
                  <MathText text={attemptQ.questionText} />
                </div>
              </div>

              <div className="mt-5">
                <Label className="text-sm font-semibold text-foreground/90">Your Working</Label>
                <Textarea rows={6} value={studentAnswer} onChange={(e) => setStudentAnswer(e.target.value)} placeholder="Show your working here..." className="mt-2 font-mono text-sm bg-background/60 border-white/10 focus:border-accent/40" disabled={hasChecked} />
              </div>

              <div className="mt-5 flex flex-col gap-3">
                {!hasChecked && (
                  <button onClick={() => setHasChecked(true)} disabled={!studentAnswer.trim()} className="btn-shine rounded-lg bg-gradient-to-r from-accent to-[#a78bfa] px-6 py-3 text-sm font-bold text-primary shadow-glow-sm transition-all hover:-translate-y-0.5 hover:shadow-glow disabled:opacity-40 disabled:hover:translate-y-0 disabled:shadow-none">
                    Check My Answer
                  </button>
                )}
                {hasChecked && !showSolution && (
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-center">
                    <p className="text-sm text-foreground/70">Your answer has been recorded.</p>
                    <button onClick={() => setShowSolution(true)} className="mt-3 rounded-lg border border-accent/40 bg-accent/5 px-6 py-3 text-sm font-bold text-accent transition-all hover:-translate-y-0.5 hover:bg-accent/10 hover:border-accent/60">
                      Reveal Worked Solution
                    </button>
                  </div>
                )}
                {showSolution && (
                  <div className="mt-2 rounded-xl border border-white/10 bg-background/40 p-5">
                    <h3 className="mb-5 flex items-center gap-2 text-base font-bold text-foreground">
                      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-accent to-secondary text-primary text-xs">&#10003;</span>
                      Worked Solution
                    </h3>
                    <WorkedSolutionPanel solution={attemptQ.workedSolution} />
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
