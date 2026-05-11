"use client";

import { useState, useEffect, useCallback } from "react";
import { List, ChevronRight, X } from "lucide-react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const article = document.querySelector("article");
    if (!article) return;
    const elements = article.querySelectorAll("h2, h3");
    const items: TocItem[] = Array.from(elements)
      .filter((el) => el.id)
      .map((el) => ({
        id: el.id,
        text: el.textContent || "",
        level: el.tagName === "H2" ? 2 : 3,
      }));
    setHeadings(items);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-100px 0px -70% 0px", threshold: 0 }
    );
    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings]);

  const handleScroll = useCallback(() => {
    const top = window.scrollY;
    const h = document.documentElement.scrollHeight - window.innerHeight;
    setProgress(h > 0 ? Math.min((top / h) * 100, 100) : 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveId(id);
    setIsOpen(false);
  };

  return (
    <>
      <div className="fixed top-16 md:top-20 left-0 right-0 z-40 h-0.5 bg-charcoal/5">
        <div className="h-full reading-progress transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      <button
        id="toc-mobile-toggle"
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed bottom-6 left-6 z-40 w-12 h-12 rounded-full bg-parchment/90 border border-gold/30 text-gold-dark shadow-lg backdrop-blur-sm flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300"
        aria-label="Open table of contents"
      >
        <List className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-charcoal/40 backdrop-blur-sm animate-fade-in" onClick={() => setIsOpen(false)} />
      )}

      <aside
        id="toc-sidebar"
        className={`toc-sidebar lg:sticky lg:top-24 lg:self-start lg:block lg:w-72 xl:w-80 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:pr-4 ${isOpen ? "fixed inset-x-0 bottom-0 z-50" : "hidden"} lg:!block`}
      >
        <div className="lg:bg-transparent bg-parchment lg:rounded-none rounded-t-3xl lg:shadow-none shadow-2xl lg:p-0 p-6 max-h-[70vh] lg:max-h-none overflow-y-auto">
          <div className="lg:hidden flex items-center justify-between mb-4">
            <h3 className="font-sans text-base font-bold text-charcoal">Mục lục</h3>
            <button onClick={() => setIsOpen(false)} className="p-2 rounded-lg hover:bg-charcoal/5" aria-label="Close"><X className="w-5 h-5 text-body" /></button>
          </div>

          <div className="hidden lg:block mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              <h3 className="font-sans text-xs font-bold text-body/50 uppercase tracking-widest">Mục lục nội dung</h3>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex-1 h-1 bg-charcoal/5 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-gold to-gold-dark rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
              </div>
              <span className="font-sans text-xs text-body/40 tabular-nums">{Math.round(progress)}%</span>
            </div>
          </div>

          <nav className="space-y-0.5" aria-label="Table of contents">
            {headings.map((h) => (
              <button
                key={h.id}
                onClick={() => handleClick(h.id)}
                className={`toc-link w-full text-left block font-sans text-sm py-2 px-3 rounded-lg transition-all duration-200 ${h.level === 3 ? "pl-7 text-xs" : ""} ${activeId === h.id ? "active text-gold-dark bg-gold/8 font-semibold" : "text-body/60 hover:text-charcoal hover:bg-charcoal/3"}`}
              >
                <span className="flex items-start gap-2">
                  {h.level === 2 && <ChevronRight className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 transition-transform ${activeId === h.id ? "text-gold rotate-90" : "text-body/30"}`} />}
                  <span className="line-clamp-2">{h.text}</span>
                </span>
              </button>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
