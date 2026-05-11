"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, Type, ArrowUp } from "lucide-react";

export function FloatingToolbar() {
  const [isDark, setIsDark] = useState(false);
  const [textSize, setTextSize] = useState<"normal" | "large">("normal");
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    // Check initial dark mode preference
    if (document.documentElement.classList.contains("dark")) {
      setIsDark(true);
    }
    
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const toggleTextSize = () => {
    const html = document.documentElement;
    if (textSize === "normal") {
      setTextSize("large");
      html.style.fontSize = "18px";
    } else {
      setTextSize("normal");
      html.style.fontSize = "16px";
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 animate-fade-in print:hidden">
      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`w-10 h-10 rounded-full bg-parchment/90 border border-gold/30 shadow-lg backdrop-blur-sm flex items-center justify-center text-charcoal hover:bg-gold/10 hover:text-gold-dark transition-all duration-300 ${showTopBtn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
        aria-label="Lên đầu trang"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Reading Tools Container */}
      <div className="flex flex-col gap-2 p-2 rounded-full bg-parchment/90 border border-gold/30 shadow-lg backdrop-blur-sm">
        {/* Text Size Toggle */}
        <button
          onClick={toggleTextSize}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${textSize === "large" ? "bg-gold/20 text-gold-dark" : "text-charcoal hover:bg-gold/10"}`}
          aria-label="Thay đổi kích thước chữ"
          title="Thay đổi kích thước chữ"
        >
          <Type className="w-4 h-4" />
        </button>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="w-8 h-8 rounded-full flex items-center justify-center text-charcoal hover:bg-gold/10 transition-colors"
          aria-label="Chế độ ban đêm"
          title="Chế độ ban đêm"
        >
          {isDark ? <Sun className="w-4 h-4 text-gold" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}
