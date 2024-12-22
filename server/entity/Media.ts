import { MediaStatus, MediaType } from '@server/constants/media';
import { Blacklist } from '@server/entity/Blacklist';
import { Watchlist } from '@server/entity/Watchlist';
import type { DownloadingItem } from '@server/lib/downloadtracker';
import Issue from './Issue';
import { MediaRequest } from './MediaRequest';
import Season from './Season';

class Media {
  public id: number;

  public mediaType: MediaType;

  public tmdbId: number;

  public tvdbId?: number;

  public imdbId?: string;

  public status: MediaStatus;

  public status4k: MediaStatus;

  public requests: MediaRequest[];

  public watchlists: null | Watchlist[];

  public seasons: Season[];

  public issues: Issue[];

  public blacklist: Promise<Blacklist>;

  public createdAt: Date;

  public updatedAt: Date;

  public lastSeasonChange: Date;

  public mediaAddedAt: Date;

  public serviceId?: number | null;

  public serviceId4k?: number | null;

  public externalServiceId?: number | null;

  public externalServiceId4k?: number | null;

  public externalServiceSlug?: string | null;

  public externalServiceSlug4k?: string | null;

  public ratingKey?: string | null;

  public ratingKey4k?: string | null;

  public jellyfinMediaId?: string | null;

  public jellyfinMediaId4k?: string | null;

  public serviceUrl?: string;
  public serviceUrl4k?: string;
  public downloadStatus?: DownloadingItem[] = [];
  public downloadStatus4k?: DownloadingItem[] = [];

  public mediaUrl?: string;
  public mediaUrl4k?: string;

  public iOSPlexUrl?: string;
  public iOSPlexUrl4k?: string;

  public tautulliUrl?: string;
  public tautulliUrl4k?: string;

  constructor(init?: Partial<Media>) {
    Object.assign(this, init);
  }
}

export default Media;
