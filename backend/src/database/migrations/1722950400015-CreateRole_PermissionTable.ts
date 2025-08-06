import { MigrationInterface, QueryRunner } from 'typeorm';

// Tạo bảng role_permission
export class CreateRolePermissionTable1722950400015 implements MigrationInterface {
  name = 'CreateRolePermissionTable1722950400015';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE role_permission (
        role_id INT NOT NULL ,
        permission_id INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (role_id, permission_id),
        CONSTRAINT fk_role_permission_role FOREIGN KEY (role_id) REFERENCES roles(id),
        CONSTRAINT fk_role_permission_permission FOREIGN KEY (permission_id) REFERENCES permissions(id)
      )
    `);
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE role_permission`);
  }
}
