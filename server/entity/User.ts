import { UserType } from '@server/constants/user';
import { Watchlist } from '@server/entity/Watchlist';
import {hasPermission, Permission, PermissionCheckOptions} from "@server/lib/permissions";
import Issue from './Issue';
import { MediaRequest } from './MediaRequest';
import { UserSettings } from './UserSettings';

export class User {
  public static filterMany(
    users: User[],
    showFiltered?: boolean
  ): Partial<User>[] {
    return users.map((u) => u.filter(showFiltered));
  }

  static readonly filteredFields: string[] = ['email', 'plexId'];

  public displayName: string;

  public id: number;

  public email: string;

  public plexUsername?: string;

  public jellyfinUsername?: string;

  public username?: string;

  public password?: string;

  public resetPasswordGuid?: string;

  public recoveryLinkExpirationDate?: Date | null;

  public userType: UserType;

  public plexId?: number;

  public jellyfinUserId?: string;

  public jellyfinDeviceId?: string;

  public jellyfinAuthToken?: string;

  public plexToken?: string;

  public permissions = 0;

  public avatar: string;

  public requestCount: number;

  public requests: MediaRequest[];

  public watchlists: Watchlist[];

  public movieQuotaLimit?: number;

  public movieQuotaDays?: number;

  public tvQuotaLimit?: number;

  public tvQuotaDays?: number;

  public settings?: UserSettings;

  public createdIssues: Issue[];

  public createdAt: Date;

  public updatedAt: Date;

  public warnings: string[] = [];

  constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }

  public filter(showFiltered?: boolean): Partial<User> {
    const filtered: Partial<User> = Object.assign(
      {},
      ...(Object.keys(this) as (keyof User)[])
        .filter((k) => showFiltered || !User.filteredFields.includes(k))
        .map((k) => ({ [k]: this[k] }))
    );

    return filtered;
  }

  public hasPermission(
    permissions: Permission | Permission[],
    options?: PermissionCheckOptions
  ): boolean {
    return !!hasPermission(permissions, this.permissions, options);
  }
}
