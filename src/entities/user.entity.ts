import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { PostAnimals } from "./PostAnimals.entity";

@Entity('user')
class User{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({length: 60})
    name:string

    @Column({length: 60, unique: true})
    email:string

    @Column({length:120})
    password:string

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date

    @OneToMany(()=> PostAnimals, PostAnimals => PostAnimals.userData)
    posts: PostAnimals
    
}

export {User}