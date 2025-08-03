import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Cấu hình CORS cho frontend
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });
  
  // Thêm prefix cho API
  app.setGlobalPrefix('api');
  
  const port = process.env.PORT || 3001;
  await app.listen(port);
  console.log(`🚀 Hotel Management System API đang chạy trên port ${port}`);
}
bootstrap();
