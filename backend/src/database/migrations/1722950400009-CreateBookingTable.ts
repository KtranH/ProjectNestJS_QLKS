import { MigrationInterface, QueryRunner } from 'typeorm';

// Tạo bảng bookings
export class CreateBookingTable1722950400009 implements MigrationInterface {
  name = 'CreateBookingTable1722950400009';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE bookings (
        id SERIAL PRIMARY KEY,
        room_type_id INT NOT NULL,
        user_id INT NOT NULL,
        check_in_date DATE NOT NULL,
        check_out_date DATE NOT NULL,
        check_in_person VARCHAR(255) NOT NULL,
        employee_id INT NOT NULL,
        total_price DECIMAL(10, 2) NOT NULL,
        status VARCHAR(20) CHECK (status IN ('pending', 'confirmed', 'cancelled')) NOT NULL DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT fk_bookings_room_types FOREIGN KEY (room_type_id) REFERENCES room_types(id),
        CONSTRAINT fk_bookings_users FOREIGN KEY (user_id) REFERENCES users(id),
        CONSTRAINT fk_bookings_employees FOREIGN KEY (employee_id) REFERENCES employees(id)
      )
    `);

    // Tạo index cho bảng bookings
    await queryRunner.query(`
      CREATE INDEX idx_bookings_room_type_id ON bookings (room_type_id);
      CREATE INDEX idx_bookings_user_id ON bookings (user_id);
      CREATE INDEX idx_bookings_employee_id ON bookings (employee_id);
    `);
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE bookings`);
  }
}
