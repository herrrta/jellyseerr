import { MediaRequestStatus } from '@server/constants/media';
import { MediaRequest } from './MediaRequest';

class SeasonRequest {
  public id: number;

  public seasonNumber: number;

  public status: MediaRequestStatus;

  public request: MediaRequest;

  public createdAt: Date;

  public updatedAt: Date;

  constructor(init?: Partial<SeasonRequest>) {
    Object.assign(this, init);
  }
}

export default SeasonRequest;
