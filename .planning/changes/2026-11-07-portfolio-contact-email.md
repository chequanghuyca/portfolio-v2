# Email liên hệ portfolio

- `src/lib/contact.ts` đặt địa chỉ liên hệ thành `info@huyche.com`.
- `src/components/home/Contact.tsx` dùng địa chỉ mới cho nhãn và link
  `mailto:` trong mục Liên hệ. `src/components/home/Hero.tsx` dùng cùng địa chỉ
  cho nút Email đầu trang.
- `npm run build`, ESLint trên ba file sửa và `git diff --check` đạt. Đã kiểm
  tra nhãn và cả hai link trên bản preview local. Prettier kiểm tra các dòng
  sửa theo cấu hình repo. Dòng mở section trong `Contact.tsx` có sai lệch định
  dạng từ trước.
