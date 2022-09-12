import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  JoinColumn,
  Column,
} from 'typeorm';
import { Category } from '../category/category.entity';
import { Story } from '../story/story.entity';

@Entity('News')
export class News {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  image: string;

  @Column()
  short_description: string;

  @Column()
  likes: number;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;

  @OneToMany(() => Category, (category) => category.id)
  categories: Category[];

  @OneToOne(() => Story)
  @JoinColumn()
  story: Story;
}
