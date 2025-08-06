import { MigrationInterface, QueryRunner } from 'typeorm';

// Tạo bảng employees
export class CreateEmployeesTable1722950400006 implements MigrationInterface {
  name = 'CreateEmployeesTable1722950400006';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE employees (
        id SERIAL PRIMARY KEY,
        fullname VARCHAR(255) NOT NULL,
        cccd VARCHAR(255) NOT NULL UNIQUE,
        email VARCHAR(255) NOT NULL UNIQUE,
        email_verified_at TIMESTAMP,
        password VARCHAR(255) NOT NULL,
        phone VARCHAR(255) UNIQUE,
        gender VARCHAR(10) CHECK (gender IN ('male', 'female', 'other')) NOT NULL DEFAULT 'male',
        status VARCHAR(10) CHECK (status IN ('active', 'inactive')) NOT NULL DEFAULT 'inactive',
        role_id INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT fk_employees_roles FOREIGN KEY (role_id) REFERENCES roles(id)
      )
    `);

    // Tạo index cho bảng employees
    await queryRunner.query(`
      CREATE INDEX idx_employees_email ON employees (email);
      CREATE INDEX idx_employees_phone ON employees (phone);
      CREATE INDEX idx_employees_cccd ON employees (cccd);
    `);
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE employees`);
  }
}
