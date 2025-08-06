import { MigrationInterface, QueryRunner } from 'typeorm';

// Tạo bảng checkin_guests
export class CreateCheckinGuestsTable1722950400011 implements MigrationInterface {
  name = 'CreateCheckinGuestsTable1722950400011';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE checkin_guests (
        id SERIAL PRIMARY KEY,
        checkin_id INT NOT NULL,
        name_guest VARCHAR(255) NOT NULL,
        phone_guest VARCHAR(255) NOT NULL,
        gender_guest VARCHAR(10) CHECK (gender_guest IN ('male', 'female', 'other')) NOT NULL DEFAULT 'male',
        cccd_guest VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT fk_checkin_guests_checkins FOREIGN KEY (checkin_id) REFERENCES checkins(id)
      )
    `);

    // Tạo index cho bảng checkin_guests
    await queryRunner.query(`
      CREATE INDEX idx_checkin_guests_checkin_id ON checkin_guests (checkin_id);
      CREATE INDEX idx_checkin_guests_name_guest ON checkin_guests (name_guest);
      CREATE INDEX idx_checkin_guests_phone_guest ON checkin_guests (phone_guest);
      CREATE INDEX idx_checkin_guests_gender_guest ON checkin_guests (gender_guest);
      CREATE INDEX idx_checkin_guests_cccd_guest ON checkin_guests (cccd_guest);
    `);
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE checkin_guests`);
  }
}
