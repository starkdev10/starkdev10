"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const commands = [
  { label: "Go to Today", href: "/today" },
  { label: "Open Subjects", href: "/subjects" },
  { label: "Open Overdue Tasks", href: "/today?filter=overdue" },
  { label: "Open Weak Areas", href: "/stats?view=weak" }
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm grid place-items-start pt-24 p-4" onClick={() => setOpen(false)}>
      <div className="panel w-full max-w-xl p-3 space-y-2" onClick={(event) => event.stopPropagation()}>
        {commands.map((command) => (
          <Link key={command.href} href={command.href} className="block rounded-md px-3 py-2 text-sm hover:bg-white/5" onClick={() => setOpen(false)}>
            {command.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
