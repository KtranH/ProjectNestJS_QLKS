import { MigrationInterface, QueryRunner } from 'typeorm';

// Tạo bảng users
export class CreateUsersTable1722950400001 implements MigrationInterface {
  name = 'CreateUsersTable1722950400001';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        fullname VARCHAR(255) NOT NULL,
        cccd VARCHAR(255) NOT NULL UNIQUE,
        email VARCHAR(255) NOT NULL UNIQUE,
        email_verified_at TIMESTAMP,     
        password VARCHAR(255) NOT NULL,
        phone VARCHAR(255) UNIQUE,
        gender VARCHAR(10) CHECK (gender IN ('male', 'female', 'other')) NOT NULL DEFAULT 'male',
        status VARCHAR(10) CHECK (status IN ('active', 'inactive')) NOT NULL DEFAULT 'inactive',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Tạo index cho bảng users
    await queryRunner.query(`
      CREATE INDEX idx_users_email ON users (email);
      CREATE INDEX idx_users_phone ON users (phone);
      CREATE INDEX idx_users_cccd ON users (cccd);
    `);
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE users`);
  }
}
