# Văn chương Khôn ngoan trong Kinh Thánh (Biblical Wisdom Literature)

Nền tảng nghiên cứu chuyên sâu về Văn chương Khôn ngoan trong Kinh Thánh, được xây dựng với phong cách học thuật (Academic) và bản sắc Công giáo (Catholic Identity). Dự án tập trung vào trải nghiệm đọc đắm chìm, tương tác dữ liệu trích dẫn và tối ưu hóa cho các nghiên cứu thần học dài kỳ.

## 🚀 Tính năng nổi bật

### 📚 Trải nghiệm Đọc học thuật
- **Typography Chuyên dụng:** Sử dụng font Merriweather (Serif) cho nội dung đọc và Inter (Sans-serif) cho giao diện UI, hỗ trợ căn lề hai bên (Justified) và thụt lề đầu dòng chuẩn mực.
- **Hiệu ứng Drop Cap:** Chữ cái đầu dòng phóng to nghệ thuật cho phần mở đầu.
- **Chế độ Ban đêm (Dark Mode):** Bảo vệ mắt với tông màu Parchment-deep và Charcoal sang trọng.
- **Tùy chỉnh Cỡ chữ:** Linh hoạt thay đổi kích thước văn bản để phù hợp với mọi đối tượng độc giả.

### 🔗 Hệ thống Tương tác Thông minh
- **Interactive Citations:** Tự động nhận diện và hiển thị tooltip cho các nguồn trích dẫn học thuật.
- **Bible Verse Tooltips:** Tương tác trực tiếp với các câu Kinh Thánh tham chiếu (như Châm Ngôn, Gióp, 1 Các Vua...).
- **Mục lục Động (Smart TOC):** Thanh mục lục bên trái tự động theo dõi tiến trình đọc và highlight phần nội dung hiện hành.
- **Bibliography:** Danh mục nguồn tham khảo chi tiết được trình bày chuẩn khoa học ở cuối bài viết.

### 🛠 Kỹ thuật & Tối ưu hóa
- **Next.js 15 (App Router):** Hiệu năng cực cao với kiến trúc Server Components.
- **MDX Integration:** Quản lý nội dung dài bằng Markdown kết hợp sức mạnh của React Components.
- **SEO & Schema.org:** Tích hợp `ScholarlyArticle` schema, giúp tối ưu hóa kết quả tìm kiếm trên Google Scholar.
- **Print Friendly:** Hỗ trợ định dạng in ấn/xuất bản PDF chuyên nghiệp, loại bỏ các yếu tố giao diện thừa.

## 🛠 Công nghệ sử dụng

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Content:** [MDX (@next/mdx)](https://mdxjs.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** Google Fonts (Merriweather & Inter)

## 📁 Cấu trúc thư mục

```text
├── app/                  # Route handlers & Global layouts
├── components/           # Các thành phần UI (Header, Footer, Citation, TOC...)
├── content/              # Nội dung nghiên cứu (report.mdx)
├── lib/                  # Dữ liệu trích dẫn & Logic xử lý (references.ts)
├── public/               # Tài nguyên tĩnh (Hình ảnh, OG images)
├── next.config.mjs       # Cấu hình Webpack & MDX
└── tsconfig.json         # Cấu hình TypeScript
```

## 🛠 Hướng dẫn cài đặt

1. **Clone dự án:**
   ```bash
   git clone <repository-url>
   ```

2. **Cài đặt dependencies:**
   ```bash
   npm install
   ```

3. **Chạy môi trường phát triển:**
   ```bash
   npm run dev
   ```
   *Lưu ý: Dự án sử dụng Webpack để tương thích tốt nhất với remark-gfm.*

4. **Xây dựng bản sản xuất:**
   ```bash
   npm run build
   ```

## 📝 Hướng dẫn cập nhật nội dung

- **Thay đổi văn bản:** Chỉnh sửa trực tiếp file `content/report.mdx`. Hệ thống sẽ tự động phân tích các trích dẫn và tiêu đề.
- **Cập nhật nguồn tham khảo:** Thêm hoặc sửa các entry trong `lib/references.ts` để cập nhật dữ liệu cho các tooltip trích dẫn.

## 📄 Giấy phép

Dự án được xây dựng cho mục đích nghiên cứu thần học và giáo dục.

---
*Xây dựng với ❤️ cho sự khôn ngoan và chân lý.*
