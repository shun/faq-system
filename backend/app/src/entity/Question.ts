import 'reflect-metadata';
import { ObjectType, Field, ID, InputType } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity('Questions')
export class Question extends BaseEntity {

    @PrimaryGeneratedColumn()
    @Field({nullable: false})
    id: number;

    @Column({type: "char", length: 10, nullable: false})
    @Field({nullable: false})
    uid: string;

    @Column({type: "varchar", length: 32, nullable: false})
    @Field({nullable: false})
    firstName: string;

    @Column({type: "varchar", length: 32, nullable: false})
    @Field({nullable: false})
    lastName: string;

    @Column({type: "longtext", nullable: false})
    @Field({nullable: false})
    question: string;

    @Column({type: "datetime", nullable: false, default: () => 'CURRENT_TIMESTAMP'})
    @Field({nullable: false})
    created_at: Date;

}

@InputType()
export class AddQuestion {

    @Column({type: "char", length: 10, nullable: false})
    @Field({nullable: false})
    uid: string;

    @Column({type: "varchar", length: 32, nullable: false})
    @Field({nullable: false})
    firstName: string;

    @Column({type: "varchar", length: 32, nullable: false})
    @Field({nullable: false})
    lastName: string;

    @Column({type: "longtext", nullable: false})
    @Field({nullable: false})
    question: string;

}

