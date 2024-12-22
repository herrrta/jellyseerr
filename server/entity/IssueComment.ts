import Issue from './Issue';
import { User } from './User';

class IssueComment {
  public id: number;

  public user: User;

  public issue: Issue;

  public message: string;

  public createdAt: Date;

  public updatedAt: Date;

  constructor(init?: Partial<IssueComment>) {
    Object.assign(this, init);
  }
}

export default IssueComment;
