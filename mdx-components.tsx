import type { MDXComponents } from "mdx/types";
import { Citation } from "@/components/Citation";
import { BibleTooltip } from "@/components/BibleTooltip";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children, ...props }) => (
      <h1
        id={generateId(children)}
        className="font-serif text-4xl md:text-5xl font-bold text-charcoal mt-16 mb-8 leading-tight tracking-tight border-b-2 border-gold/30 pb-4"
        {...props}
      >
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2
        id={generateId(children)}
        className="font-serif text-2xl md:text-3xl font-bold text-charcoal mt-14 mb-6 leading-snug scroll-mt-24 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-1 before:bottom-1 before:w-1 before:bg-gradient-to-b before:from-gold before:to-gold/30 before:rounded-full"
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3
        id={generateId(children)}
        className="font-serif text-xl md:text-2xl font-semibold text-charcoal mt-10 mb-4 leading-snug scroll-mt-24"
        {...props}
      >
        {children}
      </h3>
    ),
    p: ({ children, ...props }) => (
      <div {...props} className="academic-paragraph mb-6">
        {processCitations(children)}
      </div>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="my-8 border-l-4 border-gold bg-gold/5 rounded-r-lg py-5 px-6 md:px-8 italic font-serif text-charcoal/80 shadow-sm"
        {...props}
      >
        {children}
      </blockquote>
    ),
    table: ({ children, ...props }) => (
      <div className="my-10 overflow-x-auto rounded-xl border border-charcoal/10 shadow-md">
        <table
          className="w-full border-collapse text-sm md:text-base"
          {...props}
        >
          {children}
        </table>
      </div>
    ),
    thead: ({ children, ...props }) => (
      <thead className="bg-gradient-to-r from-purple to-purple/80 text-white" {...props}>
        {children}
      </thead>
    ),
    th: ({ children, ...props }) => (
      <th
        className="px-4 md:px-6 py-3 md:py-4 text-left font-sans font-semibold text-sm uppercase tracking-wider"
        {...props}
      >
        {children}
      </th>
    ),
    tbody: ({ children, ...props }) => (
      <tbody className="divide-y divide-charcoal/5" {...props}>
        {children}
      </tbody>
    ),
    tr: ({ children, ...props }) => (
      <tr
        className="transition-colors duration-200 hover:bg-gold/5 even:bg-parchment/50"
        {...props}
      >
        {children}
      </tr>
    ),
    td: ({ children, ...props }) => (
      <td
        className="px-4 md:px-6 py-3 md:py-4 font-serif text-body align-top"
        {...props}
      >
        {children}
      </td>
    ),
    strong: ({ children, ...props }) => (
      <strong className="font-bold text-charcoal" {...props}>
        {children}
      </strong>
    ),
    em: ({ children, ...props }) => (
      <em className="italic text-charcoal/90" {...props}>
        {children}
      </em>
    ),
    ul: ({ children, ...props }) => (
      <ul className="my-4 ml-6 space-y-2 list-disc marker:text-gold" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol className="my-4 ml-6 space-y-2 list-decimal marker:text-gold" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="font-serif text-base md:text-lg text-body leading-relaxed pl-2" {...props}>
        {children}
      </li>
    ),
    hr: (props) => (
      <hr
        className="my-12 border-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
        {...props}
      />
    ),
    a: ({ children, href, ...props }) => (
      <a
        href={href}
        className="text-purple hover:text-gold transition-colors duration-200 underline decoration-purple/30 hover:decoration-gold underline-offset-2"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    ),
    ...components,
  };
}

function generateId(children: React.ReactNode): string {
  if (typeof children === "string") {
    return children
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s-]/gu, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  }
  return "";
}


function processCitations(children: React.ReactNode): React.ReactNode {
  if (typeof children === "string") {
    // Regex to match Bible books commonly used in the report:
    // e.g., 1 Các Vua 3:7-14, Châm Ngôn 22:17-24:22, Gióp 38
    const bibleRegex = /((?:1|2)?\s?(?:Các Vua|Sáng Thế Ký|Châm Ngôn|Xuất Hành|Gióp|Thánh Vịnh|Giảng Viên|Huấn Ca|Khôn Ngoan|Diễm Ca|Daniel)\s+\d+(?:[:]\d+)?(?:[–-]\d+(?:[:]\d+)?)?)/g;
    
    // First, split by Bible verses
    const bibleParts = children.split(bibleRegex);
    
    return bibleParts.map((bPart, bIndex) => {
      // Check if this part is a bible match
      if (bibleRegex.test(bPart) || bPart.match(/^(?:1|2)?\s?(?:Các Vua|Sáng Thế Ký|Châm Ngôn|Xuất Hành|Gióp|Thánh Vịnh|Giảng Viên|Huấn Ca|Khôn Ngoan|Diễm Ca|Daniel)\s+\d+/)) {
        return <BibleTooltip key={`bible-${bIndex}`} reference={bPart} />;
      }
      
      // If not a bible verse, process standard citations [.1] or [1]
      const citeParts = bPart.split(/(\.\d+(?:,\s*\d+)*(?=\s|$|\.|,|;|\))|(?:\[\d+(?:,\s*\d+)*\]))/g);
      if (citeParts.length === 1) return bPart;

      return citeParts.map((cPart, cIndex) => {
        const bareMatch = cPart.match(/^\.(\d+(?:,\s*\d+)*)$/);
        if (bareMatch) {
          return <span key={`cite-${bIndex}-${cIndex}`}>.<Citation ids={bareMatch[1]} /></span>;
        }
        const bracketMatch = cPart.match(/^\[(\d+(?:,\s*\d+)*)\]$/);
        if (bracketMatch) {
          return <Citation key={`cite-${bIndex}-${cIndex}`} ids={bracketMatch[1]} />;
        }
        return cPart;
      });
    });
  }

  if (Array.isArray(children)) {
    return children.map((child, index) => {
      if (typeof child === "string") {
        return <span key={index}>{processCitations(child)}</span>;
      }
      return child;
    });
  }

  return children;
}

