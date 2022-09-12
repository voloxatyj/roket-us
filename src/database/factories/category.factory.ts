import { randWord } from '@ngneat/falso';
import { define } from 'typeorm-seeding';
import { Category } from '../../modules/category/category.entity';

define(Category, () => {
  const category = new Category();
  category.title = randWord();
  return category;
});
