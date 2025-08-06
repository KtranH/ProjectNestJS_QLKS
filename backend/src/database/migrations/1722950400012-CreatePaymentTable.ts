import { MigrationInterface, QueryRunner } from 'typeorm';

// Tạo bảng payments
export class CreatePaymentTable1722950400012 implements MigrationInterface {
  name = 'CreatePaymentTable1722950400012';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE payments (
        id SERIAL PRIMARY KEY,
        checkin_id INT NOT NULL,
        employee_id INT NOT NULL,
        extra_fee DECIMAL(10, 2) NOT NULL,
        amount DECIMAL(10, 2) NOT NULL,
        payment_method VARCHAR(255) NOT NULL,
        payment_status VARCHAR(20) CHECK (payment_status IN ('pending', 'paid', 'failed', 'refunded')) NOT NULL DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT fk_payments_checkins FOREIGN KEY (checkin_id) REFERENCES checkins(id),
        CONSTRAINT fk_payments_employees FOREIGN KEY (employee_id) REFERENCES employees(id)
      )
    `);

    // Tạo index cho bảng payments
    await queryRunner.query(`
      CREATE INDEX idx_payments_checkin_id ON payments (checkin_id);
      CREATE INDEX idx_payments_employee_id ON payments (employee_id);
    `);
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE payments`);
  }
}
