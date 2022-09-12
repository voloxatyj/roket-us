import { randPhrase, randTextRange, randNumber, randImg } from '@ngneat/falso';
import { define } from 'typeorm-seeding';
import { News } from '../../modules/news/news.entity';

define(News, () => {
  const news = new News();
  news.short_description = randTextRange({ min: 150, max: 200 });
  news.title = randPhrase();
  news.image = randImg();
  news.likes = randNumber({ min: 100000, max: 2000000, precision: 1 });
  return news;
});
