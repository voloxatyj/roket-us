import { randPhrase, randTextRange, randNumber, randImg } from '@ngneat/falso';
import { define } from 'typeorm-seeding';
import { Story } from '../../modules/story/story.entity';

define(Story, () => {
  const story = new Story();
  story.full_description = randTextRange({ min: 200, max: 1000 });
  story.title = randPhrase();
  story.image = randImg();
  story.likes = randNumber({ min: 100000, max: 2000000, precision: 1 });
  return story;
});
