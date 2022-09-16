import { Controller, Get, Logger, Param } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('categories')
export class CategoryController {
  public logger = new Logger(CategoryController.name);

  constructor(private readonly categoryService: CategoryService) {}

  @Get('list')
  getAllCategories() {
    return this.categoryService.getListCategories();
  }

  @Get(':categoryId')
  getNewsByCategory(@Param('categoryId') categoryId: string) {
    return this.categoryService.getNewsByCategoryId(categoryId);
  }
}
