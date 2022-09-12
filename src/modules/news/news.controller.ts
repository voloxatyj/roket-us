import { Controller, Get } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get('all')
  getAllNews() {
    return this.newsService.getAll();
  }
}
