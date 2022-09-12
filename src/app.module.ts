import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { StoryModule } from './modules/story/story.module';
import { CategoryModule } from './modules/category/category.module';
import { NewsModule } from './modules/news/news.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
        HOST: Joi.string().required(),
        DB_TYPE: Joi.string().required(),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.number().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_DATABASE: Joi.string().required(),
        TYPEORM_LOGGING: Joi.boolean(),
        TYPEORM_SYNCHRONIZE: Joi.boolean(),
      }),
    }),
    DatabaseModule,
    StoryModule,
    CategoryModule,
    NewsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
