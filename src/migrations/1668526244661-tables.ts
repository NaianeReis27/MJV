import { MigrationInterface, QueryRunner } from "typeorm";

export class tables1668526244661 implements MigrationInterface {
    name = 'tables1668526244661'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(60) NOT NULL, "email" character varying(60) NOT NULL, "password" character varying(120) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "post_animals" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "image" character varying NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "userDataId" uuid, CONSTRAINT "PK_3bfa7660b7a3c734b87efc4dbaa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "post_animals" ADD CONSTRAINT "FK_4242933bc183e7d99eed3e9e2e4" FOREIGN KEY ("userDataId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post_animals" DROP CONSTRAINT "FK_4242933bc183e7d99eed3e9e2e4"`);
        await queryRunner.query(`DROP TABLE "post_animals"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
