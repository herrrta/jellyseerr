import { User } from './User';

export class UserSettings {
  constructor(init?: Partial<UserSettings>) {
    Object.assign(this, init);
  }

  public id: number;

  public user: User;

  public locale?: string;

  public discoverRegion?: string;

  public streamingRegion?: string;

  public originalLanguage?: string;

  public pgpKey?: string;

  public discordId?: string;

  public pushbulletAccessToken?: string;

  public pushoverApplicationToken?: string;

  public pushoverUserKey?: string;

  public pushoverSound?: string;

  public telegramChatId?: string;

  public telegramMessageThreadId?: string;

  public telegramSendSilently?: boolean;

  public watchlistSyncMovies?: boolean;

  public watchlistSyncTv?: boolean;
}
