import { Controller, Get, Logger, Param } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  public logger = new Logger(NewsController.name);

  constructor(private readonly newsService: NewsService) {}

  @Get(':page')
  getAllNews(@Param('page') page: string) {
    return this.newsService.getAll(page);
  }
}
