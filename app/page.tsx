import { TableOfContents } from "@/components/TableOfContents";
import ReportContent from "@/content/report.mdx";
import { Bibliography } from "@/components/Bibliography";
import { BookOpen, ScrollText, Globe, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple/3 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-64 h-64 bg-purple/5 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-12 md:pb-16 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-purple/5 border border-purple/15 rounded-full px-4 py-1.5 mb-8 animate-fade-in-up">
            <ScrollText className="w-3.5 h-3.5 text-purple" />
            <span className="font-sans text-xs font-semibold text-purple uppercase tracking-wider">
              Báo cáo Nghiên cứu Chuyên sâu
            </span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Văn chương Khôn ngoan
            <br />
            <span className="bg-gradient-to-r from-gold-dark via-gold to-gold-dark bg-clip-text text-transparent">
              trong Kinh Thánh
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-serif text-lg md:text-xl text-body/70 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Nguồn gốc, Đặc điểm Thần học và Tầm ảnh hưởng Hiện đại
          </p>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Stat icon={<BookOpen className="w-4 h-4" />} label="Chương" value="9" />
            <Stat icon={<Globe className="w-4 h-4" />} label="Nguồn trích dẫn" value="50+" />
            <Stat icon={<Sparkles className="w-4 h-4" />} label="Thời đại" value="3000+ năm" />
          </div>

          {/* Decorative divider */}
          <div className="mt-12 flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold/50" />
            <div className="w-2 h-2 rounded-full bg-gold/40" />
            <div className="w-24 h-px bg-gold/40" />
            <div className="w-2 h-2 rounded-full bg-gold/40" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold/50" />
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Table of Contents (sidebar) */}
          <TableOfContents />

          {/* Article Content */}
          <article className="flex-1 min-w-0 prose-academic">
            <ReportContent />
            <Bibliography />
          </article>
        </div>
      </section>
    </>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2.5 text-body/60">
      <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center text-gold-dark">
        {icon}
      </div>
      <div className="text-left">
        <p className="font-sans text-sm font-bold text-charcoal">{value}</p>
        <p className="font-sans text-xs text-body/50">{label}</p>
      </div>
    </div>
  );
}
