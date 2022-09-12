import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity('Story')
export class Story {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  image: string;

  @Column()
  full_description: string;

  @Column()
  likes: number;
}
