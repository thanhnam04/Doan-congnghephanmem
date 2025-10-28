# Tài liệu Components và Liên kết Chỉnh sửa - App-complete.js

Tài liệu này mô tả chi tiết các component trong file `public/js/App-complete.js`, bao gồm các nút, trạng thái (states), và liên kết để chỉnh sửa. Mỗi component được liệt kê với ví dụ như "Bảng điều khiển quản lí có nút Tổng quan và có setActiveTab là overview".

## 1. ManagerDashboard Component
**Mô tả:** Bảng điều khiển cho vai trò Quản lý, bao gồm các tab: Tổng quan, Danh sách, Quản lý, Tin nhắn, Phụ huynh.

### Các Nút và Trạng Thái:
- **Nút Tổng quan:** `setActiveTab('overview')` - Hiển thị tổng quan hệ thống (số xe, học sinh, tài xế, tuyến đường) và xe đang hoạt động.
- **Nút Danh sách:** `setActiveTab('lists')` - Hiển thị danh sách học sinh và tài xế.
- **Nút Quản lý:** `setActiveTab('manage')` - Tạo lịch trình tuần/tháng.
- **Nút Tin nhắn:** `setActiveTab('messages')` - Gửi tin nhắn đến tài xế hoặc phụ huynh.
- **Nút Phụ huynh:** `setActiveTab('overviewparent')` - Tổng quan phụ huynh (tên, số con, địa chỉ, tên con, số điện thoại) và xe đang hoạt động.

### Trạng Thái Chính:
- `activeTab`: Quản lý tab hiện tại (mặc định: 'overview').
- `message` và `selectedRecipient`: Cho gửi tin nhắn.
- `schedule` và `savedSchedules`: Cho tạo lịch trình.

### Hàm Chính:
- `sendMessage`: Gửi tin nhắn.
- `generateWeeklySchedule`: Tạo lịch tuần.
- `generateMonthlySchedule`: Tạo lịch tháng và lưu.

## 2. DriverDashboard Component
**Mô tả:** Bảng điều khiển cho vai trò Tài xế, hiển thị lịch làm việc và danh sách học sinh cần đón.

### Các Nút và Trạng Thái:
- **Nút Báo cáo đón:** Cho học sinh chưa đón.
- **Nút Báo cáo trả:** Cho học sinh đã đón.
- **Nút Gửi cảnh báo:** Gửi cảnh báo sự cố.

### Trạng Thái Chính:
- Không có state riêng, sử dụng data từ props.

### Hàm Chính:
- Lọc học sinh theo xe: `driverStudents = data.students.filter(student => student.bus === 'Xe 01')`.

## 3. ParentDashboard Component
**Mô tả:** Bảng điều khiển cho vai trò Phụ huynh, hiển thị xe của bé, bản đồ, thông báo và cảnh báo.

### Các Nút và Trạng Thái:
- Không có nút tương tác trực tiếp, chủ yếu hiển thị thông tin.

### Trạng Thái Chính:
- Sử dụng `useEffect` để khởi tạo bản đồ Google Maps.

### Hàm Chính:
- Khởi tạo bản đồ với marker cho xe buýt và đường đi.

## 4. App Component (Main)
**Mô tả:** Component chính quản lý đăng nhập, chọn vai trò, và render dashboard tương ứng.

### Các Nút và Trạng Thái:
- **Nút Phụ huynh:** `handleRoleSelect('parent')` - Chọn vai trò phụ huynh.
- **Nút Tài xế:** `handleRoleSelect('driver')` - Chọn vai trò tài xế.
- **Nút Quản lý:** `handleRoleSelect('manager')` - Chọn vai trò quản lý.
- **Nút Đăng nhập:** `handleLogin` - Xử lý đăng nhập.
- **Nút Quay lại:** `handleBackToLanding` - Quay về trang chủ.
- **Nút Đăng xuất:** Reset trạng thái.
- **Nút Tính năng:** Hiển thị popup tính năng.
- **Nút Liên hệ:** Hiển thị popup liên hệ.
- **Nút Về chúng tôi:** `handleAboutClick` - Chuyển đến trang about.

### Trạng Thái Chính:
- `currentView`: Quản lý view hiện tại ('landing', 'login', 'about').
- `selectedRole`: Vai trò được chọn.
- `loggedIn`: Trạng thái đăng nhập.
- `username`, `password`: Thông tin đăng nhập.
- `role`: Vai trò sau đăng nhập.
- `data`: Dữ liệu mock.

### Hàm Chính:
- `handleAboutClick`: Chuyển đến 'about'.
- `handleBackToLanding`: Reset về landing.
- `handleRoleSelect`: Chọn vai trò và chuyển đến login.
- `handleLogin`: Kiểm tra đăng nhập.

## Lưu Ý Chỉnh Sửa:
- Để tùy chỉnh, tìm phần tương ứng trong `public/js/App-complete.js` và sửa code (ví dụ: thay đổi text nút, thêm logic).
- Các state như `setActiveTab` có thể được mở rộng bằng cách thêm tab mới.
- Dữ liệu mock ở đầu file có thể được thay thế bằng API thực.

Nếu cần chỉnh sửa cụ thể, hãy chỉ định component và phần muốn thay đổi.
