"use client";

import { useEffect } from "react";

/**
 * Applies the Brilliant-style dark-navy theme across the WHOLE app by adding the
 * `theme-dark` class to <html>. Because all colours are CSS-variable tokens,
 * this one class re-themes every page (marketing, auth, student, teacher, admin).
 */
export function RouteTheme() {
  useEffect(() => {
    document.documentElement.classList.add("theme-dark");
  }, []);

  return null;
}
