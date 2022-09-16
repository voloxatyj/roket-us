import { define, factory } from 'typeorm-seeding';
import { News } from '../../modules/news/news.entity';
import { Story } from '../../modules/story/story.entity';

define(News, () => {
  const news = new News();
  news.story = factory(Story)() as any;
  return news;
});
