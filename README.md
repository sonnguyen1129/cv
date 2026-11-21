# CV — Son Nguyen

Trang CV song ngữ Anh–Việt, một trang tĩnh, không cần build.

| File | Vai trò |
|---|---|
| `index.html` | Giao diện + logic chuyển ngôn ngữ, sơ đồ kiến trúc |
| `cv-data.js` | **Toàn bộ nội dung CV** — chỉ cần sửa file này |

## Xem
Mở `index.html` bằng trình duyệt (double-click). Nút **EN / VI** đổi ngôn ngữ; link có thể gắn sẵn ngôn ngữ: `…/index.html#vi`.
Nút **Print / Save PDF** để xuất PDF (bản in tự ẩn sơ đồ và nút).

## Cập nhật nội dung
Sửa `cv-data.js`. Mỗi chuỗi song ngữ dạng `{ en: "...", vi: "..." }`. Muốn công khai email: bỏ comment dòng `Email` trong `links`.

## Đưa lên mạng (tuỳ chọn)
Thư mục này là site tĩnh, deploy được nguyên trạng lên GitHub Pages, S3 + CloudFront, Netlify hoặc Vercel.
