import { Controller, Get, Logger, Param } from '@nestjs/common';
import { StoryService } from './story.service';

@Controller('story')
export class StoryController {
  public logger = new Logger(StoryController.name);

  constructor(private readonly storyService: StoryService) {}

  @Get(':storyId')
  getStoryById(@Param('storyId') storyId: string) {
    return this.storyService.getStory(storyId);
  }
}
