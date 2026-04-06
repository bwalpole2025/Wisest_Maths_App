"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";

const studentLinks = [
  { href: "/student/dashboard", label: "Dashboard" },
  { href: "/student/topics", label: "Topics" },
  { href: "/student/questions", label: "My Questions" },
];

const teacherLinks = [
  { href: "/teacher/dashboard", label: "Dashboard" },
  { href: "/teacher/topics", label: "All Topics" },
  { href: "/teacher/question-bank", label: "Question Bank" },
  { href: "/teacher/students", label: "My Students" },
];

const publicLinks = [
  { href: "/", label: "Home" },
  { href: "/student/topics", label: "Topics" },
  { href: "/student/questions", label: "Question Bank" },
];

export function Navbar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Hide navbar on assessment focus pages
  if (pathname.startsWith("/student/assessment/")) return null;

  const links = user
    ? user.role === "teacher"
      ? teacherLinks
      : studentLinks
    : publicLinks;

  const initials = user
    ? user.name
        .split(" ")
        .map((w) => w[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "";

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-primary/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-accent">∫</span>
          <span className="text-lg font-extrabold tracking-tight text-white">
            MathsApp
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={cn(
                  "rounded-md px-3.5 py-2 text-sm font-medium transition-colors",
                  pathname === l.href || pathname.startsWith(l.href + "/")
                    ? "bg-white/10 text-white"
                    : "text-white/60 hover:bg-white/5 hover:text-white",
                )}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {user ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-xs font-bold text-white transition-colors hover:bg-accent/80"
                aria-label="User menu"
              >
                {initials}
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 top-11 w-48 rounded-lg border border-border bg-white py-1 shadow-md">
                  <div className="border-b border-border px-4 py-2">
                    <p className="text-sm font-semibold text-foreground">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                  <Link
                    href={user.role === "teacher" ? "/teacher/dashboard" : "/student/dashboard"}
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-foreground hover:bg-muted"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                      logout();
                    }}
                    className="block w-full px-4 py-2 text-left text-sm text-destructive hover:bg-muted"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className="hidden rounded-md bg-accent px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-accent/90 md:inline-flex"
            >
              Log in
            </Link>
          )}

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-md text-white/70 hover:bg-white/10 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4l12 12M16 4L4 16" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 5h14M3 10h14M3 15h14" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-primary px-4 py-4 md:hidden">
          <ul className="space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    pathname === l.href
                      ? "bg-white/10 text-white"
                      : "text-white/60 hover:bg-white/5 hover:text-white",
                  )}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-white/10 mt-2">
              {user ? (
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    logout();
                  }}
                  className="block w-full rounded-md px-3 py-2 text-left text-sm font-medium text-white/60 hover:bg-white/5 hover:text-white"
                >
                  Sign Out
                </button>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md bg-accent px-3 py-2 text-center text-sm font-bold text-white"
                >
                  Log in
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
