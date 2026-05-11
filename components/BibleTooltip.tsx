"use client";

import { useState } from "react";
import { Book, ExternalLink } from "lucide-react";

interface BibleTooltipProps {
  reference: string;
}

export function BibleTooltip({ reference }: BibleTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Fallback/Demo text for verses since we don't have a real Bible API connected
  const getDummyVerseText = (ref: string) => {
    if (ref.includes("1 Các Vua 3")) return "Tại Ghi-bê-ôn, ban đêm Đức Giê-hô-va hiện ra cùng Sa-lô-môn trong giấc chiêm bao, và phán rằng: Hãy xin điều gì ngươi muốn ta ban cho ngươi...";
    if (ref.includes("Châm Ngôn 1")) return "Kính sợ Đức Giê-hô-va là khởi đầu sự khôn ngoan; Kẻ ngu muội khinh bỉ sự khôn ngoan và lời khuyên dạy.";
    if (ref.includes("Châm Ngôn 8")) return "Đức Giê-hô-va đã dựng nên ta từ buổi ban đầu của đường lối Ngài, Trước những công việc của Ngài từ thuở xa xưa.";
    if (ref.includes("Gióp 38")) return "Bấy giờ, từ trong cơn lốc, Đức Giê-hô-va đáp lời Gióp rằng: Kẻ này là ai mà dùng những lời vô tri làm cho mờ ám các mưu định ta?";
    return "Nhấp vào liên kết để đọc toàn bộ đoạn Kinh Thánh này trên các trang nghiên cứu trực tuyến.";
  };

  return (
    <span className="relative inline-flex items-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="inline-flex items-center gap-1 font-sans font-medium text-purple hover:text-gold-dark transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold/50 rounded px-1"
        aria-expanded={isOpen}
      >
        <Book className="w-3.5 h-3.5" />
        {reference}
      </button>

      {isOpen && (
        <div
          className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 md:w-80 animate-fade-in pointer-events-none"
        >
          <div className="bg-parchment-deep dark:bg-charcoal border border-gold/30 rounded-lg shadow-xl shadow-charcoal/10 overflow-hidden">
            <div className="bg-gradient-to-r from-purple/5 to-gold/5 px-3 py-2 border-b border-gold/10">
              <span className="font-sans text-xs font-bold text-purple uppercase tracking-wider">
                Trích dẫn Kinh Thánh
              </span>
            </div>
            <div className="p-4">
              <p className="font-serif text-sm text-body/90 leading-relaxed italic">
                "{getDummyVerseText(reference)}"
              </p>
              <div className="mt-3 pt-3 border-t border-charcoal/5 flex justify-end">
                <a
                  href={`https://augustino.net/kinh-thanh-cuu-uoc/tim-kiem?q=${encodeURIComponent(reference)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-sans text-xs font-medium text-gold-dark hover:text-purple transition-colors pointer-events-auto"
                >
                  Đọc toàn đoạn
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
          {/* Triangle pointer */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-gold/30" />
        </div>
      )}
    </span>
  );
}
