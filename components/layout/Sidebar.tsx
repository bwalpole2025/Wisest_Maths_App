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
    <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-60 shrink-0 border-r border-border bg-surface-alt lg:block">
      <div className="flex h-full flex-col p-5">
        <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
          {title}
        </h2>
        <nav className="flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                pathname === l.href || pathname.startsWith(l.href + "/")
                  ? "bg-accent/10 text-accent"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <span className="text-base">{l.icon}</span>
              {l.label}
            </Link>
          ))}
        </nav>

        {extra && <div className="mt-auto pt-4 border-t border-border">{extra}</div>}

        {/* Help link */}
        <div className="mt-auto pt-4 border-t border-border">
          <Link
            href="/student/topics"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <span className="text-base">?</span>
            Need help?
          </Link>
        </div>
      </div>
    </aside>
  );
}
