import type { UserRole } from "@/lib/types";

/** Where each role lands after login / when redirected off a forbidden area. */
export function homeForRole(role: UserRole): string {
  switch (role) {
    case "wisest_admin":
    case "wisest_staff":
      return "/admin/schools";
    case "school_admin":
      return "/school";
    case "teacher":
      return "/teacher/dashboard";
    default:
      return "/courses";
  }
}
