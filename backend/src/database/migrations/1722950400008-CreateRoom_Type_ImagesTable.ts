import { MigrationInterface, QueryRunner } from 'typeorm';

// Tạo bảng room_type_images
export class CreateRoomTypeImagesTable1722950400008 implements MigrationInterface {
  name = 'CreateRoomTypeImagesTable1722950400008';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE room_type_images (
        id SERIAL PRIMARY KEY,
        room_type_id INT NOT NULL,
        image_url VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT fk_room_type_images_room_types FOREIGN KEY (room_type_id) REFERENCES room_types(id)
      )
    `);
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE room_type_images`);
  }
}
