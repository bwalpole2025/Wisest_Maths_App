"use client";

import { AuthProvider } from "@/components/providers/AuthProvider";
import { CourseProvider } from "@/components/providers/CourseProvider";
import { ViewAsProvider } from "@/hooks/useViewAs";
import { Navbar } from "@/components/layout/Navbar";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Toaster } from "@/components/ui/sonner";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <ViewAsProvider>
          <CourseProvider>
            <Navbar />
            <main>{children}</main>
            {/* App-wide toast host — without this, every toast.* call is invisible. */}
            <Toaster richColors position="top-center" />
          </CourseProvider>
        </ViewAsProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}
