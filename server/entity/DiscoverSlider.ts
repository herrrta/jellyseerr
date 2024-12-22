import type { DiscoverSliderType } from '@server/constants/discover';

class DiscoverSlider {

  public id: number;

  public type: DiscoverSliderType;

  public order: number;

  public isBuiltIn: boolean;

  public enabled: boolean;

  // Title is not required for built in sliders because we will
  // use translations for them.
  public title?: string;

  public data?: string;

  public createdAt: Date;

  public updatedAt: Date;

  constructor(init?: Partial<DiscoverSlider>) {
    Object.assign(this, init);
  }
}

export default DiscoverSlider;
