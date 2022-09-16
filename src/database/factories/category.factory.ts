import { randWord } from '@ngneat/falso';
import { define, factory } from 'typeorm-seeding';
import { Category } from '../../modules/category/category.entity';
import { News } from '../../modules/news/news.entity';

define(Category, () => {
  const category = new Category();
  category.title = randWord();
  category.news = factory(News)() as any;
  return category;
});
