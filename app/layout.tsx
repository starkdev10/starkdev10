import type { Metadata } from "next";
import "./globals.css";
import { AppShell } from "@/components/layout/app-shell";
import { PwaInit } from "@/components/shared/pwa-init";

export const metadata: Metadata = {
  title: "Revision OS",
  description: "A-Level revision operating system",
  manifest: "/manifest.json"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <PwaInit />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
