import {
  PrimaryGeneratedColumn,
  Entity,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Category } from '../category/category.entity';
import { Story } from '../story/story.entity';

@Entity('News')
export class News {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Category, (category) => category.news)
  categories?: Category[];

  @OneToOne(() => Story)
  @JoinColumn()
  story: Story;
}
