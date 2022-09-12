import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { Story } from '../../modules/story/story.entity';
import { News } from '../../modules/news/news.entity';

@Injectable()
export class StoryCreateSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    const stories = await factory(Story)().createMany(20);
    stories.map((item) => console.log(item.id));
    const news = stories.map((story) => {
      return factory(News)({
        storyId: story.id,
        short_description: story.full_description.slice(0, 100),
        image: story.image,
        likes: story.likes,
        title: story.title,
      }).createMany(20);
    });
    await Promise.all(news);
  }
}
