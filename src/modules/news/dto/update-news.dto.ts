import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateNewsDto {
  @IsNumber()
  @IsNotEmpty()
  storyId: number;
}
