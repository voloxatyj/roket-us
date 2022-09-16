import { Factory, Seeder } from 'typeorm-seeding';
import { Category } from '../../modules/category/category.entity';

export class CategoryCreateSeed implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Category)().createMany(20);
  }
}
