"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface SidebarLink {
  href: string;
  label: string;
  icon: string;
}

interface SidebarProps {
  links: SidebarLink[];
  title?: string;
  extra?: React.ReactNode;
}

export function AppSidebar({ links, title = "Menu", extra }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-60 shrink-0 border-r border-border bg-sidebar/80 backdrop-blur-sm lg:block">
      <div className="flex h-full flex-col p-5">
        <h2 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/40">
          {title}
        </h2>
        <nav className="flex flex-col gap-1">
          {links.map((l) => {
            const active =
              pathname === l.href || pathname.startsWith(l.href + "/");
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all",
                  active
                    ? "bg-accent/15 text-foreground ring-1 ring-accent/30 shadow-[0_0_24px_-8px_hsl(var(--accent)/0.7)]"
                    : "text-foreground/60 hover:bg-foreground/[0.06] hover:text-foreground",
                )}
              >
                {active && (
                  <span className="absolute left-0 top-1.5 bottom-1.5 w-1 rounded-r-full bg-gradient-to-b from-accent to-secondary" />
                )}
                <span className={cn(
                  "text-base transition-colors",
                  active ? "text-accent" : "text-foreground/50 group-hover:text-foreground/80",
                )}>
                  {l.icon}
                </span>
                {l.label}
              </Link>
            );
          })}
        </nav>

        {extra && <div className="mt-auto pt-4 border-t border-border">{extra}</div>}

        <div className={cn("pt-4 border-t border-border", !extra && "mt-auto")}>
          <Link
            href="/student/topics"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/50 hover:bg-foreground/[0.06] hover:text-foreground transition-colors"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-border text-[11px]">?</span>
            Need help?
          </Link>
        </div>
      </div>
    </aside>
  );
}
