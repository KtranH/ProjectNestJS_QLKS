import { MigrationInterface, QueryRunner } from 'typeorm';

// Tạo bảng room_types
export class CreateRoomTypesTable1722950400005 implements MigrationInterface {
  name = 'CreateRoomTypesTable1722950400005';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE room_types (
        id SERIAL PRIMARY KEY,
        name_room_type VARCHAR(255) NOT NULL,
        capacity INT NOT NULL,
        price_room_type DECIMAL(10, 2) NOT NULL,
        description VARCHAR(255) NOT NULL,
        status VARCHAR(10) CHECK (status IN ('active', 'inactive')) NOT NULL DEFAULT 'active',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE room_types`);
  }
}
