import {
  MediaRequestStatus,
  MediaType,
} from '@server/constants/media';
import Media from './Media';
import SeasonRequest from './SeasonRequest';
import { User } from './User';

type MediaRequestOptions = {
  isAutoRequest?: boolean;
};

export class MediaRequest {
  public id: number;

  public status: MediaRequestStatus;

  public media: Media;

  public requestedBy: User;

  public modifiedBy?: User;

  public createdAt: Date;

  public updatedAt: Date;

  public type: MediaType;

  public seasonCount: number;

  public seasons: SeasonRequest[];

  public is4k: boolean;

  public serverId: number;

  public profileId: number;

  public rootFolder: string;

  public languageProfileId: number;

  public tags?: number[];

  public isAutoRequest: boolean;

  constructor(init?: Partial<MediaRequest>) {
    Object.assign(this, init);
  }
}

export default MediaRequest;
