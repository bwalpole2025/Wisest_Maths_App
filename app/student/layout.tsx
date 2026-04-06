"use client";

import { AppSidebar } from "@/components/layout/Sidebar";
import { RouteGuard } from "@/components/auth/RouteGuard";

const studentLinks = [
  { href: "/student/dashboard", label: "Dashboard", icon: "📊" },
  { href: "/student/topics", label: "Topics", icon: "📚" },
  { href: "/student/questions", label: "Questions", icon: "✏️" },
];

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return (
    <RouteGuard>
      <div className="flex">
        <AppSidebar links={studentLinks} title="Student" />
        <div className="flex-1 p-4 sm:p-6 lg:p-8">{children}</div>
      </div>
    </RouteGuard>
  );
}
