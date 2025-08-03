# 🏨 Hệ thống Quản lý Khách sạn

Dự án full-stack sử dụng NestJS (backend) và Vue3 (frontend) để xây dựng hệ thống quản lý khách sạn hiện đại.

## 🚀 Công nghệ sử dụng

### Backend (NestJS)
- **Framework**: NestJS 10+
- **Language**: TypeScript 5+
- **Database**: TypeORM/Prisma (sẽ thêm sau)
- **Authentication**: JWT + Passport
- **Validation**: class-validator
- **Documentation**: Swagger/OpenAPI

### Frontend (Vue3)
- **Framework**: Vue 3 với Composition API
- **Language**: TypeScript
- **Build Tool**: Vite
- **State Management**: Pinia
- **Routing**: Vue Router 4
- **HTTP Client**: Axios
- **Styling**: CSS3 với responsive design

## 📁 Cấu trúc dự án

```
hotel-management-system/
├── backend/                 # NestJS Backend
│   ├── src/
│   │   ├── modules/        # Các module chức năng
│   │   ├── common/         # Shared utilities
│   │   ├── config/         # Cấu hình
│   │   └── main.ts         # Entry point
│   └── package.json
├── frontend/               # Vue3 Frontend
│   ├── src/
│   │   ├── components/     # Vue components
│   │   ├── views/          # Page components
│   │   ├── stores/         # Pinia stores
│   │   ├── router/         # Vue Router
│   │   ├── services/       # API services
│   │   └── types/          # TypeScript types
│   └── package.json
└── package.json            # Root package.json
```

## 🛠️ Cài đặt và chạy

### Yêu cầu hệ thống
- Node.js 18+ 
- npm hoặc yarn

### Cài đặt dependencies
```bash
# Cài đặt tất cả dependencies
npm run install:all

# Hoặc cài đặt từng phần
npm install                    # Root dependencies
cd backend && npm install      # Backend dependencies
cd ../frontend && npm install  # Frontend dependencies
```

### Chạy dự án

#### Chạy cả backend và frontend
```bash
npm run dev
```

#### Chạy riêng lẻ
```bash
# Backend (port 3001)
npm run dev:backend

# Frontend (port 3000)
npm run dev:frontend
```

### Build dự án
```bash
# Build cả backend và frontend
npm run build

# Build riêng lẻ
npm run build:backend
npm run build:frontend
```

## 🌐 Truy cập ứng dụng

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001/api
- **API Health Check**: http://localhost:3001/api/health

## 📋 Tính năng dự kiến

### Quản lý Phòng
- [ ] Thêm/sửa/xóa phòng
- [ ] Quản lý trạng thái phòng
- [ ] Phân loại phòng (Standard, Deluxe, Suite)
- [ ] Quản lý giá phòng

### Quản lý Khách
- [ ] Thêm/sửa/xóa thông tin khách
- [ ] Tìm kiếm khách
- [ ] Lịch sử đặt phòng
- [ ] Quản lý thông tin cá nhân

### Quản lý Đặt phòng
- [ ] Tạo đặt phòng mới
- [ ] Quản lý trạng thái đặt phòng
- [ ] Lịch đặt phòng
- [ ] Thanh toán và hóa đơn

### Báo cáo và Thống kê
- [ ] Báo cáo doanh thu
- [ ] Thống kê tình trạng phòng
- [ ] Báo cáo khách hàng
- [ ] Dashboard tổng quan

## 🔧 Development

### Backend Development
```bash
cd backend
npm run start:dev    # Development mode với hot reload
npm run test         # Chạy tests
npm run test:e2e     # End-to-end tests
```

### Frontend Development
```bash
cd frontend
npm run dev          # Development server
npm run build        # Build production
npm run test:unit    # Unit tests
npm run lint         # ESLint
npm run format       # Prettier
```

## 📝 Scripts có sẵn

### Root level
- `npm run dev` - Chạy cả backend và frontend
- `npm run install:all` - Cài đặt tất cả dependencies
- `npm run build` - Build cả backend và frontend
- `npm run test` - Chạy tests cho cả backend và frontend

### Backend
- `npm run start:dev` - Development mode
- `npm run build` - Build production
- `npm run test` - Unit tests
- `npm run test:e2e` - E2E tests

### Frontend
- `npm run dev` - Development server
- `npm run build` - Build production
- `npm run test:unit` - Unit tests
- `npm run lint` - ESLint
- `npm run format` - Prettier

## 🤝 Đóng góp

1. Fork dự án
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📄 License

Dự án này được phân phối dưới MIT License. Xem file `LICENSE` để biết thêm chi tiết.

## 📞 Liên hệ

Nếu có câu hỏi hoặc góp ý, vui lòng tạo issue trên GitHub repository. 