"use client";

import { useState, useRef, useEffect } from "react";
import { references } from "@/lib/references";

interface CitationProps {
  ids: string;
}

export function Citation({ ids }: CitationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<"above" | "below">("below");
  const triggerRef = useRef<HTMLButtonElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const citationIds = ids.split(",").map((id) => id.trim());

  useEffect(() => {
    if (isOpen && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;

      if (spaceBelow < 200 && spaceAbove > spaceBelow) {
        setPosition("above");
      } else {
        setPosition("below");
      }
    }
  }, [isOpen]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  return (
    <span className="relative inline-block">
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => {
          setTimeout(() => {
            if (
              tooltipRef.current &&
              !tooltipRef.current.matches(":hover")
            ) {
              setIsOpen(false);
            }
          }, 200);
        }}
        className="inline-flex items-center justify-center text-xs font-sans font-bold text-gold-dark hover:text-purple bg-gold/10 hover:bg-purple/10 rounded px-1 py-0.5 cursor-pointer transition-all duration-200 align-super leading-none ml-0.5"
        aria-label={`Citation ${ids}`}
      >
        {ids}
      </button>

      {isOpen && (
        <div
          ref={tooltipRef}
          onMouseLeave={() => setIsOpen(false)}
          className={`citation-tooltip absolute z-50 w-72 sm:w-80 ${
            position === "above" ? "bottom-full mb-2" : "top-full mt-2"
          } left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-xl shadow-charcoal/10 border border-gold/20 overflow-hidden`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-purple/5 to-gold/5 px-4 py-2 border-b border-gold/10">
            <span className="font-sans text-xs font-semibold text-purple uppercase tracking-wider">
              Nguồn trích dẫn [{ids}]
            </span>
          </div>

          {/* References */}
          <div className="px-4 py-3 space-y-3 max-h-60 overflow-y-auto">
            {citationIds.map((id) => {
              const ref = references[id];
              return (
                <div key={id} className="group">
                  <div className="flex items-start gap-2">
                    <span className="flex-shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-gold/15 text-gold-dark font-sans text-xs font-bold mt-0.5">
                      {id}
                    </span>
                    <div className="min-w-0">
                      {ref ? (
                        <>
                          <p className="font-sans text-xs text-charcoal leading-snug font-medium">
                            {ref.title}
                          </p>
                          {ref.url && (
                            <a
                              href={ref.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-sans text-xs text-purple/70 hover:text-purple truncate block mt-0.5 transition-colors"
                            >
                              {new URL(ref.url).hostname}
                            </a>
                          )}
                        </>
                      ) : (
                        <p className="font-sans text-xs text-body/60 italic">
                          Xem mục Nguồn trích dẫn
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Arrow */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-gold/20 rotate-45 ${
              position === "above"
                ? "-bottom-1.5 border-r border-b"
                : "-top-1.5 border-l border-t"
            }`}
          />
        </div>
      )}
    </span>
  );
}
