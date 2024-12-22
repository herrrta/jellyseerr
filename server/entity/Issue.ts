import type { IssueType } from '@server/constants/issue';
import { IssueStatus } from '@server/constants/issue';
import IssueComment from './IssueComment';
import Media from './Media';
import { User } from './User';

class Issue {
  public id: number;

  public issueType: IssueType;

  public status: IssueStatus;

  public problemSeason: number;

  public problemEpisode: number;

  public media: Media;

  public createdBy: User;

  public modifiedBy?: User;

  public comments: IssueComment[];

  public createdAt: Date;

  public updatedAt: Date;

  constructor(init?: Partial<Issue>) {
    Object.assign(this, init);
  }
}

export default Issue;
