import { BookOpen, Heart, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer id="site-footer" className="relative mt-20 border-t border-gold/20 bg-charcoal">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple via-gold to-purple" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:py-12 flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Brand & About */}
          <div className="max-w-md space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="font-sans text-sm font-bold text-parchment tracking-tight uppercase">
                Văn chương Khôn ngoan
              </h3>
            </div>
            <p className="font-serif text-xs text-parchment/50 leading-relaxed">
              Báo cáo nghiên cứu chuyên sâu về nguồn gốc, đặc điểm thần học và tầm ảnh hưởng hiện đại của Văn chương Khôn ngoan trong Kinh Thánh.
            </p>
          </div>

          {/* Links combined */}
          <div className="flex flex-wrap gap-8 md:gap-12">
            <div className="space-y-3">
              <h4 className="font-sans text-[10px] font-bold text-gold uppercase tracking-widest">Tài nguyên</h4>
              <nav className="flex flex-col gap-2">
                <FooterExternalLink href="https://augustino.net/kinh-thanh-cuu-uoc">Kinh Thánh</FooterExternalLink>
                <FooterExternalLink href="https://www.cambridge.org/core/books/cambridge-companion-to-biblical-wisdom-literature">Cambridge</FooterExternalLink>
              </nav>
            </div>
            <div className="space-y-3">
              <h4 className="font-sans text-[10px] font-bold text-gold uppercase tracking-widest">Nội dung</h4>
              <nav className="flex flex-col gap-2">
                <FooterLink href="#dẫn-nhập">Dẫn nhập</FooterLink>
                <FooterLink href="#bối-cảnh">Bối cảnh</FooterLink>
              </nav>
            </div>
          </div>
        </div>

        {/* Compact bottom bar */}
        <div className="border-t border-parchment/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[10px] text-parchment/30 uppercase tracking-widest">
            © {new Date().getFullYear()} · Văn chương Khôn ngoan
          </p>
          <div className="flex items-center gap-4">
             <p className="font-sans text-[10px] text-parchment/30 flex items-center gap-1">
              Xây dựng cho <Heart className="w-2.5 h-2.5 text-red/60" /> sự khôn ngoan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="block font-sans text-sm text-parchment/50 hover:text-gold transition-colors duration-200"
    >
      {children}
    </a>
  );
}

function FooterExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 font-sans text-sm text-parchment/50 hover:text-gold transition-colors duration-200"
    >
      {children}
      <ExternalLink className="w-3 h-3" />
    </a>
  );
}
