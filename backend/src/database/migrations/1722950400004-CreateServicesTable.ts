import { MigrationInterface, QueryRunner } from 'typeorm';

// Tạo bảng services
export class CreateServicesTable1722950400004 implements MigrationInterface {
  name = 'CreateServicesTable1722950400004';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE services (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        status VARCHAR(10) CHECK (status IN ('active', 'inactive')) NOT NULL DEFAULT 'active',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE services`);
  }
}
