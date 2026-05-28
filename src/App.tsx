import { RouterProvider } from "@tanstack/react-router";
import { AuthProvider } from "@/components/providers/AuthProvider";
import { CourseProvider } from "@/components/providers/CourseProvider";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { router } from "@/routes/router";

export default function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <CourseProvider>
          <RouterProvider router={router} />
        </CourseProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}
