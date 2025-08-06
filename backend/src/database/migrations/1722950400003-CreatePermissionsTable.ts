import { MigrationInterface, QueryRunner } from 'typeorm';

// Tạo bảng permissions
export class CreatePermissionsTable1722950400003 implements MigrationInterface {
  name = 'CreatePermissionsTable1722950400003';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE permissions (
        id SERIAL PRIMARY KEY,
        name_permission VARCHAR(255) NOT NULL UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE permissions`);
  }
}
