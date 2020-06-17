import {MigrationInterface, QueryRunner} from "typeorm";

export class Init1592404111836 implements MigrationInterface {
    name = 'Init1592404111836'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `Questions` (`id` int NOT NULL AUTO_INCREMENT, `uid` char(10) NOT NULL, `firstName` varchar(32) NOT NULL, `lastName` varchar(32) NOT NULL, `question` longtext NOT NULL, `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `Questions`");
    }

}
