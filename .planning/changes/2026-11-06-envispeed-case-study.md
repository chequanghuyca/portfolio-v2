# Envispeed trong portfolio

## Màn hình và hành vi

- Thêm Envispeed vào mục Projects trên trang chủ. Footer dùng mã case study 10
  từ dữ liệu dự án. Thứ tự hiển thị hiện tại được ghi trong
  [case study Smart HRMS](2026-11-07-smarthrms-case-study.md#thứ-tự-hiển-thị).
- Trang `/projects/10` và `/projects/10?lang=vi` dùng giao diện case study hiện
  có. Nội dung nêu đóng góp về nhận diện, đóng gói, phát hành macOS preview và
  trang sản phẩm. Bản phân phối ghi nhận engine và nguồn gốc Vikey/OpenKey.
- Nút xem sản phẩm mở landing page theo ngôn ngữ hiện tại. Nút GitHub mở repo
  công khai. Gallery dùng ảnh landing page và ảnh cài đặt macOS thật.
- Trang chi tiết hiển thị badge Preview. Cả hai URL xuất hiện trong sitemap
  cùng ảnh Open Graph cho case study.

## File cập nhật

- `src/i18n/locales/en.json` và `src/i18n/locales/vi.json` chứa nội dung thẻ,
  stack và URL.
- `src/hooks/project/useQueryGetAllProject.ts` và
  `src/hooks/project/useQueryGetProject.ts` nối ảnh, nội dung chi tiết và trạng
  thái preview vào dữ liệu.
- `src/components/home/Projects.tsx` chọn sáu case study.
  `src/components/project/ProjectHero.tsx` hiển thị trạng thái preview.
- `src/assets/projects/envispeed/` chứa hai ảnh WebP chuyển từ ảnh có sẵn bằng
  `cwebp`.
- `scripts/generate-seo-pages.mjs` và `public/sitemap.xml` nối dự án mới vào
  luồng SEO hiện có.

## Xác minh

- `npm run build` đạt, tạo HTML và ảnh SEO cho 10 dự án.
- `npm run preview -- --host 127.0.0.1 --port 4175 --strictPort` dùng để kiểm
  tra mở thẻ Envispeed, nội dung EN/VI, đường dẫn sản phẩm theo ngôn ngữ và
  mở ảnh cài đặt trong gallery.
- ESLint trên các file TS/TSX/MJS đã sửa, `xmllint --noout public/sitemap.xml`
  và `git diff --check` đều đạt. Kiểm tra artifact xác nhận hai URL và
  hreflang đối ứng trong sitemap 22 URL, HTML metadata và ảnh Open Graph.
- Prettier 3.6.2 theo cấu hình repo. Hai file TSX có sai lệch định dạng từ
  trước ở các dòng ngoài diff.
- `npm run lint` toàn repo còn 25 lỗi và 9 cảnh báo cũ.
  `node_modules/.bin/tsc -p tsconfig.app.json --noEmit` báo thiếu
  `@/components/Skills` ở bốn hook kỹ năng ngoài phạm vi.
