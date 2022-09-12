import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1662722888569 implements MigrationInterface {
  name = 'init1662722888569';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "Story" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(20) NOT NULL, "image" character varying(20) NOT NULL, "full_description" character varying(50) NOT NULL, "likes" bigint, CONSTRAINT "PK_92822e4942a5e4eee63c1ccbb4d" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "News" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(20) NOT NULL, "image" character varying(20) NOT NULL, "short description" character varying(50) NOT NULL, "likes" bigint, "date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "storyId" uuid, CONSTRAINT "REL_79d336e1c705ce100a7488374b" UNIQUE ("storyId"), CONSTRAINT "PK_109fa61fff0eb3997a2890f52c0" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "Category" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(20) NOT NULL, "createdBy" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "short_description" character varying(50) NOT NULL, "likes" bigint, "newsId" uuid, CONSTRAINT "PK_c2727780c5b9b0c564c29a4977c" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "News" ADD CONSTRAINT "FK_79d336e1c705ce100a7488374bd" FOREIGN KEY ("storyId") REFERENCES "Story"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "Category" ADD CONSTRAINT "FK_6046e9c48fddcea152591886160" FOREIGN KEY ("newsId") REFERENCES "News"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "Category" DROP CONSTRAINT "FK_6046e9c48fddcea152591886160"`,
    );
    await queryRunner.query(
      `ALTER TABLE "News" DROP CONSTRAINT "FK_79d336e1c705ce100a7488374bd"`,
    );
    await queryRunner.query(`DROP TABLE "Category"`);
    await queryRunner.query(`DROP TABLE "News"`);
    await queryRunner.query(`DROP TABLE "Story"`);
  }
}
