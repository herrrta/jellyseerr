import { type MediaType } from '@server/constants/media';
import Media from '@server/entity/Media';
import { User } from '@server/entity/User';
import type { BlacklistItem } from '@server/interfaces/api/blacklistInterfaces';

export class Blacklist implements BlacklistItem {
  public id: number;
  public mediaType: MediaType;
  title?: string;
  public tmdbId: number;
  user: User;
  public media: Media;
  public createdAt: Date;

  constructor(init?: Partial<Blacklist>) {
    Object.assign(this, init);
  }
}
