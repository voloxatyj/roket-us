import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { News } from '../news/news.entity';
import { getFormattedLikes } from '../../utils/getFormattedLikes';

@Injectable()
export class CategoryService {
  public logger = new Logger(CategoryService.name);

  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    @InjectRepository(News)
    private newsRepository: Repository<News>,
  ) {}

  async getListCategories() {
    const categories = await this.categoryRepository.find();
    if (categories.length !== 0) {
      return categories;
    }
    throw new HttpException("Can't find any categories", HttpStatus.NOT_FOUND);
  }

  async getNewsByCategoryId(categoryId) {
    const [category] = await this.categoryRepository.find({
      relations: ['news'],
      where: { id: categoryId },
    });
    const { story } = await this.newsRepository.findOne({
      relations: ['story'],
      where: { id: category.news.id },
    });
    const newsOne = {
      id: story.id,
      title: story.title,
      short_description: story.full_description.slice(0, 100),
      image: story.image,
      likes: getFormattedLikes(story.likes),
      date: `${story.date}`.slice(0, 10),
    };
    return newsOne;
  }
}
