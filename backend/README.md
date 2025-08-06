# Backend API - Quản lý Khách sạn

## Cài đặt

### Yêu cầu hệ thống
- Node.js 18+
- MySQL 8.0+
- npm hoặc yarn

### Cài đặt dependencies
```bash
npm install
```

### Cấu hình môi trường
1. Copy file `env.example` thành `.env`
```bash
cp env.example .env
```

2. Cập nhật các biến môi trường trong file `.env`:
```env
# Application
PORT=3000
NODE_ENV=development

# Database
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=your_password
DB_DATABASE=qlks_db

# JWT
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_EXPIRES_IN=1d
```

### Tạo database
```sql
CREATE DATABASE qlks_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

## Chạy ứng dụng

### Development mode
```bash
npm run start:dev
```

### Production mode
```bash
npm run build
npm run start:prod
```

## API Documentation

Sau khi chạy ứng dụng, truy cập Swagger UI tại:
- http://localhost:3000/api

## Cấu trúc dự án

```
src/
├── config/              # Cấu hình ứng dụng
│   ├── app.config.ts
│   ├── database.config.ts
│   └── jwt.config.ts
├── common/              # Shared components
│   ├── guards/          # Authentication guards
│   ├── interceptors/    # Response interceptors
│   └── pipes/           # Validation pipes
├── database/            # Database configuration
│   ├── database.module.ts
│   ├── migrations/      # Database migrations
│   └── seed/           # Database seeders
├── modules/             # Feature modules
│   ├── auth/           # Authentication module
│   ├── users/          # Users management
│   ├── rooms/          # Rooms management
│   └── bookings/       # Bookings management
└── main.ts             # Application entry point
```

## Thư viện đã cài đặt

### Core NestJS
- `@nestjs/common` - Core NestJS functionality
- `@nestjs/core` - NestJS core framework
- `@nestjs/platform-express` - Express integration
- `@nestjs/config` - Configuration management
- `@nestjs/typeorm` - TypeORM integration
- `@nestjs/jwt` - JWT authentication
- `@nestjs/passport` - Passport integration
- `@nestjs/swagger` - API documentation

### Database
- `typeorm` - ORM for database operations
- `mysql2` - MySQL driver

### Authentication & Security
- `passport` - Authentication middleware
- `passport-jwt` - JWT strategy
- `passport-local` - Local strategy
- `bcryptjs` - Password hashing
- `helmet` - Security headers
- `cors` - CORS middleware

### Validation & Transformation
- `class-validator` - Request validation
- `class-transformer` - Object transformation

### Utilities
- `dotenv` - Environment variables
- `reflect-metadata` - Metadata reflection
- `rxjs` - Reactive programming

## Scripts có sẵn

- `npm run start` - Chạy ứng dụng
- `npm run start:dev` - Chạy với hot reload
- `npm run start:debug` - Chạy với debug mode
- `npm run start:prod` - Chạy production build
- `npm run build` - Build ứng dụng
- `npm run test` - Chạy unit tests
- `npm run test:e2e` - Chạy end-to-end tests
- `npm run lint` - Kiểm tra code style
- `npm run format` - Format code với Prettier
