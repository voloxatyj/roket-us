import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  Entity,
} from 'typeorm';
import { News } from '../news/news.entity';

@Entity('Category')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdBy: Date;

  @ManyToOne(() => News, (news) => news.categories)
  news!: News;
}
