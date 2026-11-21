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

## Bảo mật thông tin công ty
Trang này công khai. Chỉ ghi những gì ở mức hồ sơ LinkedIn: vai trò, lĩnh vực, công nghệ chung. **Không** đưa vào:
- tên khách hàng/đối tác, số liệu kinh doanh (doanh thu, số người dùng, số chuyến…);
- kiến trúc chi tiết thật, tên service/repo nội bộ, endpoint, domain nội bộ, cấu hình, ảnh chụp màn hình hệ thống;
- sự cố, lỗ hổng, thông tin hạ tầng (account, region, IP).
Sơ đồ trên trang chỉ là minh hoạ đơn giản, không phải kiến trúc production.

## Đưa lên mạng
Đang deploy bằng GitHub Pages: https://sonnguyen1129.github.io/cv/ — push lên `main` là trang tự cập nhật.
