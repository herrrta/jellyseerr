import { MediaType } from '@server/constants/media';
import Media from '@server/entity/Media';
import { User } from '@server/entity/User';
import type { WatchlistItem } from '@server/interfaces/api/discoverInterfaces';

export class DuplicateWatchlistRequestError extends Error {}
export class NotFoundError extends Error {
  constructor(message = 'Not found') {
    super(message);
    this.name = 'NotFoundError';
  }
}

export class Watchlist implements WatchlistItem {
  id: number;

  public ratingKey = '';

  public mediaType: MediaType;

  title = '';

  public tmdbId: number;

  public requestedBy: User;

  public media: Media;

  public createdAt: Date;

  public updatedAt: Date;

  constructor(init?: Partial<Watchlist>) {
    Object.assign(this, init);
  }
}
