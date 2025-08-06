import { MigrationInterface, QueryRunner } from 'typeorm';

// Tạo bảng room_wishlist
export class CreateRoomWishlistTable1722950400014 implements MigrationInterface {
  name = 'CreateRoomWishlistTable1722950400014';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE room_wishlist (
        room_type_id INT NOT NULL,
        user_id INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (room_type_id, user_id),
        CONSTRAINT fk_room_wishlist_room_types FOREIGN KEY (room_type_id) REFERENCES room_types(id),
        CONSTRAINT fk_room_wishlist_users FOREIGN KEY (user_id) REFERENCES users(id)
      )
    `);
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE room_wishlist`);
  }
}
