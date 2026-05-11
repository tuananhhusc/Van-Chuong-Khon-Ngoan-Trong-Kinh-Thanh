"use client";

import { references } from "@/lib/references";
import { ExternalLink, BookMarked } from "lucide-react";

export function Bibliography() {
  const refEntries = Object.entries(references).sort((a, b) => parseInt(a[0]) - parseInt(b[0]));

  return (
    <section className="mt-20 pt-10 border-t-2 border-gold/20 scroll-mt-24">
      <div className="flex items-center gap-3 mb-8">
        <BookMarked className="w-6 h-6 text-gold-dark" />
        <h2 id="nguồn-tham-khảo" className="font-serif text-2xl md:text-3xl font-bold text-charcoal m-0">
          Nguồn Tham Khảo & Tài Liệu Trích Dẫn
        </h2>
      </div>

      <div className="space-y-5">
        {refEntries.map(([id, ref]) => (
          <div key={id} className="flex gap-4 group">
            <span className="font-sans text-sm font-bold text-gold-dark min-w-[2.5rem] pt-1">
              [{id}]
            </span>
            <div className="flex-1 border-b border-charcoal/5 pb-5 group-last:border-0">
              <p className="font-serif text-base md:text-lg text-body/90 leading-relaxed">
                {ref.title}
              </p>
              {ref.url && (
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-2 font-sans text-sm text-purple hover:text-gold-dark transition-colors"
                >
                  <span className="truncate max-w-[200px] sm:max-w-sm md:max-w-md">
                    {ref.url}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
