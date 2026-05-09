"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap, Menu, BookOpen, User } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

const navLinks = [
  { name: "Profil & Portofolio", href: "/", icon: User },
  { name: "Katalog Materi", href: "/materi", icon: BookOpen },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-heading font-bold text-xl text-primary">
          <GraduationCap className="w-6 h-6 text-emerald-700 dark:text-emerald-500" />
          <span>EduManage Hub</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`transition-colors hover:text-emerald-700 dark:hover:text-emerald-400 ${
                pathname === link.href ? "text-emerald-700 dark:text-emerald-400 font-semibold" : "text-muted-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="md:hidden inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground h-9 w-9">
              <Menu className="w-5 h-5" />
              <span className="sr-only">Buka menu navigasi</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <SheetHeader className="border-b border-border/50 pb-4">
                <SheetTitle className="flex items-center gap-2 text-lg">
                  <GraduationCap className="w-5 h-5 text-emerald-700 dark:text-emerald-500" />
                  EduManage Hub
                </SheetTitle>
                <SheetDescription>
                  Portal Akademik Digital
                </SheetDescription>
              </SheetHeader>

              <nav className="flex flex-col gap-1 px-4 pt-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Navigasi
                </p>
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-base transition-colors ${
                        isActive
                          ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 font-semibold"
                          : "text-foreground hover:bg-secondary/50"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? "text-emerald-600 dark:text-emerald-400" : "text-muted-foreground"}`} />
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
