import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Story } from '../story/story.entity';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(Story)
    private storyRepository: Repository<Story>,
  ) {}

  async getAll() {
    const story = await this.storyRepository.find();

    return story;
  }
}
