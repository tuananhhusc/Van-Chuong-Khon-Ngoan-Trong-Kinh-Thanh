import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Văn chương Khôn ngoan trong Kinh Thánh – Nghiên cứu Chuyên sâu",
  description:
    "Báo cáo nghiên cứu chuyên sâu về Văn chương Khôn ngoan trong Kinh Thánh: nguồn gốc, đặc điểm thần học và tầm ảnh hưởng hiện đại. Một tài liệu học thuật đầy đủ về các sách Châm Ngôn, Gióp, Giảng Viên.",
  keywords: [
    "Văn chương Khôn ngoan",
    "Kinh Thánh",
    "Wisdom Literature",
    "Biblical Studies",
    "Thần học",
    "Sách Châm Ngôn",
    "Sách Gióp",
    "Sách Giảng Viên",
    "Catholic",
    "Nghiên cứu Kinh Thánh",
  ],
  authors: [{ name: "Nghiên cứu Thần học" }],
  creator: "Văn chương Khôn ngoan Project",
  publisher: "Thần học Online",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Văn chương Khôn ngoan trong Kinh Thánh",
    description:
      "Nghiên cứu chuyên sâu về nguồn gốc, đặc điểm thần học và tầm ảnh hưởng hiện đại của Văn chương Khôn ngoan.",
    url: "https://vanchuongkhonngoan.vercel.app",
    siteName: "Văn chương Khôn ngoan",
    images: [
      {
        url: "/og-image.jpg", // Assuming an image exists or will be added
        width: 1200,
        height: 630,
        alt: "Văn chương Khôn ngoan trong Kinh Thánh",
      },
    ],
    locale: "vi_VN",
    type: "article",
    authors: ["Nghiên cứu Thần học"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Văn chương Khôn ngoan trong Kinh Thánh",
    description: "Báo cáo nghiên cứu chuyên sâu về Văn chương Khôn ngoan: nguồn gốc và thần học.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { FloatingToolbar } from "@/components/FloatingToolbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "headline": "Văn chương Khôn ngoan trong Kinh Thánh – Nghiên cứu Chuyên sâu",
    "description": "Báo cáo nghiên cứu chuyên sâu về Văn chương Khôn ngoan trong Kinh Thánh: nguồn gốc, đặc điểm thần học và tầm ảnh hưởng hiện đại.",
    "author": {
      "@type": "Person",
      "name": "Nghiên cứu Thần học"
    },
    "about": [
      { "@type": "Thing", "name": "Wisdom Literature" },
      { "@type": "Thing", "name": "Hebrew Bible" },
      { "@type": "Thing", "name": "Theology" }
    ]
  };

  return (
    <html lang="vi" className={`${inter.variable} ${merriweather.variable} transition-colors duration-300`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased transition-colors duration-300">
        <Header />
        <main className="flex-1 pt-16 md:pt-20">{children}</main>
        <Footer />
        <FloatingToolbar />
      </body>
    </html>
  );
}
