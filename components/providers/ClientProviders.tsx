"use client";

import { AuthProvider } from "@/components/providers/AuthProvider";
import { CourseProvider } from "@/components/providers/CourseProvider";
import { Navbar } from "@/components/layout/Navbar";
import { ErrorBoundary } from "@/components/ErrorBoundary";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <CourseProvider>
          <Navbar />
          <main>{children}</main>
        </CourseProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}
