import { MigrationInterface, QueryRunner } from 'typeorm';

// Tạo bảng rooms
export class CreateRoomsTable1722950400007 implements MigrationInterface {
  name = 'CreateRoomsTable1722950400007';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE rooms (
        id SERIAL PRIMARY KEY,
        room_number VARCHAR(255) NOT NULL,
        floor INT NOT NULL,
        room_type_id INT NOT NULL,
        status VARCHAR(20) CHECK (status IN ('available', 'occupied', 'maintenance')) NOT NULL DEFAULT 'available',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT fk_rooms_room_types FOREIGN KEY (room_type_id) REFERENCES room_types(id)
      )
    `);
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE rooms`);
  }
}
