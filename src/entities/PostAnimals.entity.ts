import { Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { User } from "./user.entity";

@Entity("post_animals")
class PostAnimals {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  image: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => User)
  userData: User
}

export { PostAnimals };
