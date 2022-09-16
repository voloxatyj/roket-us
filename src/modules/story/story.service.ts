import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Story } from './story.entity';

@Injectable()
export class StoryService {
  public logger = new Logger(StoryService.name);

  constructor(
    @InjectRepository(Story)
    private storyRepository: Repository<Story>,
  ) {}

  async getStory(id) {
    const story = await this.storyRepository.find({ id });

    if (!story) {
      throw new HttpException("Can't find any stories", HttpStatus.NOT_FOUND);
    }

    return story;
  }
}
