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
    const news = stories.map(
      ({ id, full_description, image, likes, title }) => {
        console.log(id, full_description, image, likes, title);
        return factory(News)({
          storyId: id,
          short_description: full_description.slice(0, 100),
          image: image,
          likes: likes,
          title: title,
        }).create();
      },
    );
    await Promise.all(news);
  }
}
