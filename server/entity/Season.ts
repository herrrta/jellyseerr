import { MediaStatus } from '@server/constants/media';
import Media from './Media';

class Season {
  public id: number;

  public seasonNumber: number;

  public status: MediaStatus;

  public status4k: MediaStatus;

  public media: Promise<Media>;

  public createdAt: Date;

  public updatedAt: Date;

  constructor(init?: Partial<Season>) {
    Object.assign(this, init);
  }
}

export default Season;
