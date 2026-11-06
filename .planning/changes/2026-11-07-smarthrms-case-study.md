# Smart HRMS trong portfolio

## Màn hình và hành vi

- Thêm Smart HRMS vào mục Projects trên trang chủ. Footer dùng mã case study 11
  từ dữ liệu dự án.
- Trang `/projects/11` và `/projects/11?lang=vi` mô tả ứng dụng nhân sự do GSOT
  Group phát hành và phần đóng góp về eKYC/NFC, chấm công khuôn mặt bằng Luxand,
  quyền WebView, đăng nhập i-Office, tiếng Khmer và phát hành mobile.
- Thẻ trên trang chủ và trang chi tiết có nút App Store và Google Play. Header
  của case study dùng App Store làm nút chính.
- Gallery dùng bản xem trước catalogue và màn hình xác thực khuôn mặt với nhân
  vật hư cấu. Hai ảnh WebP dùng lại hình có sẵn, giữ nguyên tỷ lệ nội dung.
- Cả hai URL có hreflang trong sitemap. Build xuất HTML metadata và ảnh Open
  Graph cho case study.

## File cập nhật

- `src/i18n/locales/en.json`, `src/i18n/locales/vi.json` chứa mô tả, stack và URL
  store.
- `src/hooks/project/useQueryGetAllProject.ts` và
  `src/hooks/project/useQueryGetProject.ts` nối dữ liệu, ảnh và nhãn nút.
- `src/components/home/Projects.tsx`, `src/components/project/ProjectHero.tsx`
  và `src/components/project/ProjectDetailHeader.tsx` hiển thị các liên kết theo
  dữ liệu dự án.
- `src/assets/projects/smarthrms/` chứa cover catalogue và ảnh khuôn mặt mẫu.
- `scripts/generate-seo-pages.mjs` và `public/sitemap.xml` nối dự án vào luồng SEO.

## Nguồn đối chiếu

- Source `smarthrms` và báo cáo công việc tháng 09/2026 trong `.planning` xác
  nhận phạm vi đóng góp. Dùng chức danh Senior Software Engineer từ portfolio
  và ghi mốc nâng cấp năm 2026.
- Đã đối chiếu các tab App Store, Google Play và trạng thái iOS trong App Store
  Connect. Nội dung portfolio dùng liên kết công khai. [App Store](https://apps.apple.com/vn/app/smart-hrms/id1512085333),
  [Google Play](https://play.google.com/store/apps/details?id=gsot.smarthrms.timekeeping).

## Xác minh

- `npm run build` đạt, tạo HTML và ảnh SEO cho 11 dự án.
- `npm run preview -- --host 127.0.0.1 --port 4175 --strictPort` dùng để mở
  case study từ trang chủ, đổi VI/EN, kiểm tra hai URL store, ảnh cover và mở
  gallery.
- ESLint các file TS/TSX/MJS đã sửa, `xmllint --noout public/sitemap.xml` và
  `git diff --check` đạt. Prettier theo cấu hình repo cho phần mới. Một số dòng
  TSX có sai lệch định dạng cũ nằm ngoài diff.
- `npm run lint` toàn repo còn 25 lỗi và 9 cảnh báo cũ.
  `node_modules/.bin/tsc -p tsconfig.app.json --noEmit` còn bốn lỗi import
  `@/components/Skills` ở các hook kỹ năng ngoài phạm vi.

## Thứ tự hiển thị

- `src/hooks/project/useQueryGetAllProject.ts` ưu tiên Envispeed, Smart HRMS và
  OneStop@LTA cho cả mục Projects trên trang chủ lẫn danh sách ở footer. Sau ba
  mục này, các dự án tiếp tục theo thứ tự trước đó. Mã case study và URL dùng
  ID gốc.
- Kiểm tra bằng `npm run build`, Prettier, ESLint trên hook và
  `git diff --check`. Đã xác nhận thứ tự và URL trên preview local cho cả hai
  ngôn ngữ.
