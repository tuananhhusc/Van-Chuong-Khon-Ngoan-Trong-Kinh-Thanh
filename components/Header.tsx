"use client";

import { useState, useEffect } from "react";
import { BookOpen, Menu, X } from "lucide-react";
import Link from "next/link";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-parchment/95 dark:bg-charcoal/95 backdrop-blur-md shadow-lg shadow-charcoal/5 border-b border-gold/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo & Title */}
          <Link href="/" className="flex items-center gap-3 group" id="header-logo">
            <div className="relative">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={1.5} />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-purple border-2 border-parchment dark:border-charcoal" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-sans text-sm md:text-base font-bold text-charcoal dark:text-parchment tracking-tight leading-tight">
                Văn chương Khôn ngoan
              </h1>
              <p className="font-sans text-xs text-body/60 dark:text-parchment/50 tracking-wide uppercase">
                Kinh Thánh · Nghiên cứu
              </p>
            </div>
          </Link>

          {/* Desktop Navigation removed */}
          <nav className="hidden md:flex items-center gap-1" id="desktop-nav">
          </nav>
        </div>
      </div>
    </header>
  );
}
