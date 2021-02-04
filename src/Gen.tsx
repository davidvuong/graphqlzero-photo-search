import faker from 'faker';
import { Photo } from './typed/Photo';

export const genId = (): string => faker.random.uuid();
export const genNumber = (min = 0, max = 1, precision?: number): number => faker.random.number({ min, max, precision });
export const genImageUrl = (): string => faker.image.imageUrl();
export const genText = (): string => faker.lorem.sentences(genNumber(1, 3));

export const genPhoto = (options?: Partial<Photo>): Photo => ({
  id: genId(),
  title: genText(),
  url: genImageUrl(),
  thumbnailUrl: genImageUrl(),
  ...options,
});
