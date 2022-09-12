import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Story } from './story.entity';
import { StoryController } from './story.controller';
import { StoryService } from './story.service';

@Module({
  imports: [TypeOrmModule.forFeature([Story]), ConfigModule],
  providers: [StoryService],
  controllers: [StoryController],
  exports: [StoryService],
})
export class StoryModule {}
