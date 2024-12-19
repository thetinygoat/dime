import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsersTable1734629401221 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            create table if not exists users (
                id bigserial not null primary key,
                email varchar not null unique,
                password varchar not null,
                created_at timestamptz default now() not null,
                updated_at timestamptz default now() not null
            );

            create index on users(email);
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            drop table if exists users;
        `);
  }
}
