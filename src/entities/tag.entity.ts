import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "tags" })
export class TagEntity {
  @Column()
  @PrimaryGeneratedColumn()  
  id: number;
  @Column()
  name: string;
}