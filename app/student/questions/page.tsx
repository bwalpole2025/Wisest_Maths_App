"use client";

import { useState, useMemo } from "react";
import { getTopicsForCourse, getQuestionsForCourse } from "@/lib/data/courseData";
import { useCourse } from "@/hooks/useCourse";
import type { Question, Topic } from "@/lib/types";
import { MathText } from "@/components/questions/MathText";
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
  Foundation: "bg-emerald-100 text-emerald-700 border-emerald-300",
  Standard: "bg-amber-100 text-amber-700 border-amber-300",
  Challenge: "bg-red-100 text-red-700 border-red-300",
};

const diffDot: Record<string, string> = {
  Foundation: "bg-emerald-500",
  Standard: "bg-amber-500",
  Challenge: "bg-red-500",
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
    Calculus: (
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" className="h-full w-full" style={{ opacity: o }}>
        <defs>
          <linearGradient id="cg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0e7490" />
            <stop offset="100%" stopColor="#4f46e5" />
          </linearGradient>
        </defs>
        <rect width="400" height="180" fill="url(#cg)" />
        <circle cx="370" cy="20" r="90" fill="white" opacity="0.05" />
        <circle cx="30" cy="170" r="70" fill="white" opacity="0.04" />
        {/* Smooth curve */}
        <path d="M0 160 Q 80 150 140 110 Q 200 60 260 45 Q 340 25 400 10" stroke="white" strokeWidth="2" fill="none" opacity="0.12" />
        <path d="M0 160 Q 80 150 140 110 Q 200 60 260 45 Q 340 25 400 10 L400 180 L0 180Z" fill="white" opacity="0.03" />
        <text x="20" y="90" fontSize="64" fill="white" fontFamily="Georgia, serif" opacity="0.15">&#8747;</text>
        <text x="80" y="80" fontSize="30" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.15">f(x) dx</text>
        <text x="200" y="150" fontSize="20" fill="white" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.08">dy/dx</text>
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
  const topics = useMemo(() => (course ? getTopicsForCourse(course) : []), [course]);
  const allQuestions = useMemo(() => (course ? getQuestionsForCourse(course) : []), [course]);

  const [viewLevel, setViewLevel] = useState<ViewLevel>("categories");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [selectedTopicRef, setSelectedTopicRef] = useState<string | null>(null);

  const [attemptQ, setAttemptQ] = useState<Question | null>(null);
  const [studentAnswer, setStudentAnswer] = useState("");
  const [hasChecked, setHasChecked] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  const subcategories = useMemo(() => getSubcategoryData(topics, allQuestions), [topics, allQuestions]);

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
    <div className="mx-auto max-w-5xl">
      <div className="mb-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <button onClick={goToCategories} className="hover:text-accent font-medium">Question Bank</button>
          {selectedSubcategory && (
            <>
              <span>/</span>
              <button onClick={() => goToTopics(selectedSubcategory)} className="hover:text-accent font-medium">
                {selectedSubcategory}
              </button>
            </>
          )}
          {selectedTopic && (
            <>
              <span>/</span>
              <span className="text-foreground font-medium">{selectedTopic.title}</span>
            </>
          )}
        </div>
        <h1 className="mt-2 text-2xl font-bold text-foreground">
          {viewLevel === "categories" ? "Question Bank" : viewLevel === "topics" ? selectedSubcategory : selectedTopic?.title}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {viewLevel === "categories" && "Select a topic area to browse questions."}
          {viewLevel === "topics" && "Select a topic to view questions."}
          {viewLevel === "questions" && (topicQuestions.length + " question" + (topicQuestions.length !== 1 ? "s" : "") + " available.")}
        </p>
      </div>

      {viewLevel === "categories" && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subcategories.map((sub) => (
            <button
              key={sub.name}
              onClick={() => sub.count > 0 && goToTopics(sub.name)}
              disabled={sub.count === 0}
              className={`group relative overflow-hidden rounded-2xl text-left transition-all duration-300 ${
                sub.count > 0
                  ? "hover:-translate-y-1.5 hover:shadow-2xl cursor-pointer shadow-lg"
                  : "opacity-50 cursor-not-allowed shadow"
              }`}
              style={{ minHeight: "180px" }}
            >
              {/* Full-bleed SVG background */}
              <div className="absolute inset-0">
                <CategoryIllustration name={sub.name} active={sub.count > 0} />
              </div>
              {/* Bottom gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              {/* Content */}
              <div className="relative z-10 flex h-full min-h-[180px] flex-col justify-end p-5">
                <h2 className="text-lg font-bold text-white drop-shadow-sm">
                  {sub.name}
                </h2>
                <p className="mt-1 text-sm text-white/70">
                  {sub.count > 0
                    ? <>{sub.topicCount} topic{sub.topicCount !== 1 ? "s" : ""} &middot; {sub.count} question{sub.count !== 1 ? "s" : ""}</>
                    : <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-medium backdrop-blur-sm">Coming Soon</span>
                  }
                </p>
              </div>
              {/* Hover shine effect */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
            </button>
          ))}
        </div>
      )}

      {viewLevel === "topics" && (
        <>
          <button onClick={goToCategories} className="mb-4 flex items-center gap-1 text-sm font-medium text-accent hover:underline">
            &#8592; Back to categories
          </button>
          <div className="grid gap-3 sm:grid-cols-2">
            {subcategoryTopics.map((t) => (
              <button
                key={t.id}
                onClick={() => goToQuestions(t.ref)}
                className="group flex items-center gap-4 rounded-lg border border-border bg-white p-4 text-left shadow-sm transition-all hover:border-accent hover:bg-muted/20"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 font-mono text-xs font-bold text-accent">
                  {t.ref}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold text-foreground group-hover:text-accent truncate">{t.title}</h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">{t.questionCount} question{t.questionCount !== 1 ? "s" : ""}</p>
                </div>
                <span className="text-muted-foreground group-hover:text-accent">&#8594;</span>
              </button>
            ))}
          </div>
        </>
      )}

      {viewLevel === "questions" && (
        <>
          <button
            onClick={() => selectedSubcategory && goToTopics(selectedSubcategory)}
            className="mb-4 flex items-center gap-1 text-sm font-medium text-accent hover:underline"
          >
            &#8592; Back to {selectedSubcategory}
          </button>
          <div className="space-y-3">
            {topicQuestions.map((q) => (
              <div key={q.id} className="flex items-start gap-4 rounded-lg border border-border bg-white p-5 shadow-sm transition-colors hover:bg-muted/20">
                <span className={"mt-1.5 h-3 w-3 shrink-0 rounded-full " + diffDot[q.difficulty]} title={q.difficulty} />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-bold text-foreground">{q.topicTitle}</span>
                    <Badge variant="outline" className={diffBadge[q.difficulty]}>{q.difficulty}</Badge>
                  </div>
                  <div className="mt-2 text-sm leading-relaxed text-muted-foreground"><MathText text={q.questionText} /></div>
                  <div className="mt-2 text-xs text-muted-foreground">{q.marks} marks</div>
                </div>
                <button onClick={() => openAttempt(q)} className="shrink-0 rounded-md bg-accent px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-accent/90">
                  Attempt
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      <Dialog open={!!attemptQ} onOpenChange={(o) => !o && closeAttempt()}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
          {attemptQ && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2">
                  <span className="rounded bg-accent/10 px-2 py-0.5 text-xs font-bold text-accent font-mono">{attemptQ.topicRef}</span>
                  <Badge variant="outline" className={diffBadge[attemptQ.difficulty]}>{attemptQ.difficulty}</Badge>
                  <span className="text-xs text-muted-foreground">{attemptQ.marks} marks</span>
                </div>
                <DialogTitle className="mt-2">{attemptQ.topicTitle}</DialogTitle>
              </DialogHeader>
              <Separator className="my-4" />
              <div className="rounded-lg border border-border bg-muted/30 p-4 text-sm leading-relaxed text-foreground">
                <MathText text={attemptQ.questionText} />
              </div>
              <div className="mt-5">
                <Label className="text-sm font-semibold">Your Working</Label>
                <Textarea rows={5} value={studentAnswer} onChange={(e) => setStudentAnswer(e.target.value)} placeholder="Show your working here..." className="mt-2 font-mono" disabled={hasChecked} />
              </div>
              <div className="mt-4 flex flex-col gap-3">
                {!hasChecked && (
                  <button onClick={() => setHasChecked(true)} disabled={!studentAnswer.trim()} className="rounded-lg bg-accent px-6 py-3 text-sm font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md disabled:opacity-40 disabled:hover:translate-y-0">
                    Check My Answer
                  </button>
                )}
                {hasChecked && !showSolution && (
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">Your answer has been recorded. Ready to see the worked solution?</p>
                    <button onClick={() => setShowSolution(true)} className="rounded-lg border-2 border-accent bg-accent/5 px-6 py-3 text-sm font-bold text-accent transition-all hover:-translate-y-0.5 hover:bg-accent/10">
                      Reveal Worked Solution
                    </button>
                  </div>
                )}
                {showSolution && (
                  <div className="mt-2">
                    <Separator className="mb-4" />
                    <h3 className="mb-4 text-sm font-bold text-foreground">Worked Solution</h3>
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
