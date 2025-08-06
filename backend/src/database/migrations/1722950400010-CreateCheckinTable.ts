import { MigrationInterface, QueryRunner } from 'typeorm';

// Tạo bảng checkins
export class CreateCheckinTable1722950400010 implements MigrationInterface {
  name = 'CreateCheckinTable1722950400010';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE checkins (
        id SERIAL PRIMARY KEY,
        booking_id INT NOT NULL,
        employee_id INT NOT NULL,
        room_id INT NOT NULL,
        total_price DECIMAL(10, 2) NOT NULL,
        check_in_date DATE NOT NULL,
        check_out_date DATE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT fk_checkins_bookings FOREIGN KEY (booking_id) REFERENCES bookings(id),
        CONSTRAINT fk_checkins_employees FOREIGN KEY (employee_id) REFERENCES employees(id),
        CONSTRAINT fk_checkins_rooms FOREIGN KEY (room_id) REFERENCES rooms(id)
      )
    `);

    // Tạo index cho bảng checkins
    await queryRunner.query(`
      CREATE INDEX idx_checkins_booking_id ON checkins (booking_id);
      CREATE INDEX idx_checkins_employee_id ON checkins (employee_id);
      CREATE INDEX idx_checkins_room_id ON checkins (room_id);
    `);
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE checkins`);
  }
}
