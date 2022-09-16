import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { News } from './news.entity';
import { getFormattedLikes } from '../../utils/getFormattedLikes';

@Injectable()
export class NewsService {
  public logger = new Logger(NewsService.name);

  constructor(
    @InjectRepository(News)
    private newsRepository: Repository<News>,
  ) {}

  async getAll(page = '1') {
    const count = 10;
    const skip = +count * (+page - 1);
    const [stories, storiesCount] = await this.newsRepository.findAndCount({
      relations: ['story'],
      take: +count,
      skip,
    });

    if (stories.length === 0) {
      throw new HttpException("Can't find any stories", HttpStatus.NOT_FOUND);
    }

    const news = stories.map(({ story }) => {
      return {
        id: story.id,
        title: story.title,
        short_description: story.full_description.slice(0, 100),
        image: story.image,
        likes: getFormattedLikes(story.likes),
        date: `${story.date}`.slice(0, 10),
      };
    });

    return { news, storiesCount };
  }
}
