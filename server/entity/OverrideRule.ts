class OverrideRule {
  public id: number;

  public radarrServiceId?: number;

  public sonarrServiceId?: number;

  public users?: string;

  public genre?: string;

  public language?: string;

  public keywords?: string;

  public profileId?: number;

  public rootFolder?: string;

  public tags?: string;

  public createdAt: Date;

  public updatedAt: Date;

  constructor(init?: Partial<OverrideRule>) {
    Object.assign(this, init);
  }
}

export default OverrideRule;
