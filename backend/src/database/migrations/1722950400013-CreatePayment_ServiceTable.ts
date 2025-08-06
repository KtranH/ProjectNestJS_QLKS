import { MigrationInterface, QueryRunner } from 'typeorm';

// Tạo bảng payment_services
export class CreatePaymentServiceTable1722950400013 implements MigrationInterface {
  name = 'CreatePaymentServiceTable1722950400013';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE payment_services (
        payment_id INT NOT NULL,
        service_id INT NOT NULL,
        quantity INT NOT NULL,
        PRIMARY KEY (payment_id, service_id),
        CONSTRAINT fk_payment_services_payments FOREIGN KEY (payment_id) REFERENCES payments(id),
        CONSTRAINT fk_payment_services_services FOREIGN KEY (service_id) REFERENCES services(id)
      )
    `);
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE payment_services`);
  }
}
