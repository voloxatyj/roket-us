import {MigrationInterface, QueryRunner} from "typeorm";

export class init1663159679491 implements MigrationInterface {
    name = 'init1663159679491'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Story" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "image" character varying NOT NULL, "full_description" character varying NOT NULL, "likes" integer NOT NULL, "date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_92822e4942a5e4eee63c1ccbb4d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "News" ("id" SERIAL NOT NULL, "storyId" integer, CONSTRAINT "REL_79d336e1c705ce100a7488374b" UNIQUE ("storyId"), CONSTRAINT "PK_109fa61fff0eb3997a2890f52c0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Category" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "createdBy" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "newsId" integer, CONSTRAINT "PK_c2727780c5b9b0c564c29a4977c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "News" ADD CONSTRAINT "FK_79d336e1c705ce100a7488374bd" FOREIGN KEY ("storyId") REFERENCES "Story"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Category" ADD CONSTRAINT "FK_6046e9c48fddcea152591886160" FOREIGN KEY ("newsId") REFERENCES "News"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Category" DROP CONSTRAINT "FK_6046e9c48fddcea152591886160"`);
        await queryRunner.query(`ALTER TABLE "News" DROP CONSTRAINT "FK_79d336e1c705ce100a7488374bd"`);
        await queryRunner.query(`DROP TABLE "Category"`);
        await queryRunner.query(`DROP TABLE "News"`);
        await queryRunner.query(`DROP TABLE "Story"`);
    }

}
