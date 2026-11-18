# Cập nhật PDF tải CV trong portfolio

Ngày 18/11/2026.

- Thay `src/assets/HUYCHE-CV.pdf` bằng CV mới đã chỉnh format trên Overleaf, gồm ba trang A4 và nội dung OneStop@LTA SuperApp, Smart HRMS, Envispeed.
- Hai nút Download CV tại navigation desktop và menu mobile trong `src/components/home/Navigation.tsx` dùng chung asset này, nên tải bản mới qua import PDF hiện có. Tên tệp tải về là `HUYCHE-CV.pdf`.
- Vite tạo asset `HUYCHE-CV-CyU72rt6.pdf`. SHA-256 của PDF nguồn và bản build là `0cc0cb466e261524632f44164d2665f225f508079800c76fcacb561d25e88e41`.
- `npm run build` thành công, bao gồm tạo SEO HTML cho 11 trang dự án. Build có thông báo dữ liệu baseline-browser-mapping và Browserslist đã cũ.
- Kiểm tra PDF bằng `pypdf` xác nhận ba trang, tên dự án và các nhãn đúng format. Đối chiếu byte giữa PDF đã duyệt, asset nguồn và asset build thành công. Kiểm tra JavaScript bundle tham chiếu đúng tên asset mới và cả hai anchor tải CV dùng asset này.
- Phục vụ thư mục `dist` bằng HTTP local và tải PDF qua đường dẫn asset nhận HTTP 200, Content-Type `application/pdf`, nội dung khớp bản đã duyệt. `git diff --check` đạt.
