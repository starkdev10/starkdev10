"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Calendar, ChartColumn, Clock3, GraduationCap, Settings } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { MiniTimer } from "@/components/shared/mini-timer";
import { CommandPalette } from "@/components/layout/command-palette";

const nav = [
  { href: "/today", label: "Today", icon: Clock3 },
  { href: "/subjects", label: "Subjects", icon: BookOpen },
  { href: "/planner", label: "Planner", icon: Calendar },
  { href: "/exams", label: "Exams", icon: GraduationCap },
  { href: "/stats", label: "Stats", icon: ChartColumn },
  { href: "/settings", label: "Settings", icon: Settings }
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-background">
      <aside className="hidden md:flex w-64 flex-col border-r border-border p-4 gap-4">
        <h1 className="text-lg font-semibold">Revision OS</h1>
        <p className="text-xs text-slate-400">Next exam: Geography P1 · 42 days</p>
        <nav className="flex flex-col gap-1">
          {nav.map(({ href, label, icon: Icon }) => (
            <Link key={href} href={href} className={cn("flex items-center gap-2 rounded-md px-2 py-2 text-sm hover:bg-white/5", pathname.startsWith(href) && "bg-white/10")}>
              <Icon size={16} /> {label}
            </Link>
          ))}
        </nav>
      </aside>
      <div className="flex-1 p-4 md:p-6 space-y-4">
        <header className="panel p-3 flex items-center justify-between">
          <span className="text-sm text-slate-300">Cmd/Ctrl + K to search</span>
          <MiniTimer />
        </header>
        {children}
      </div>
      <CommandPalette />
    </div>
  );
}
