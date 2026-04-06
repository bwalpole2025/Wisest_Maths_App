"use client";

import { AppSidebar } from "@/components/layout/Sidebar";
import { RouteGuard } from "@/components/auth/RouteGuard";

const teacherLinks = [
  { href: "/teacher/dashboard", label: "Dashboard", icon: "📊" },
  { href: "/teacher/topics", label: "Topics", icon: "📚" },
  { href: "/teacher/question-bank", label: "Question Bank", icon: "✏️" },
  { href: "/teacher/students", label: "Students", icon: "👤" },
];

export default function TeacherLayout({ children }: { children: React.ReactNode }) {
  return (
    <RouteGuard requiredRole="teacher">
      <div className="flex">
        <AppSidebar links={teacherLinks} title="Teacher" />
        <div className="flex-1 p-4 sm:p-6 lg:p-8">{children}</div>
      </div>
    </RouteGuard>
  );
}
