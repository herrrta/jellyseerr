import { MediaStatus, type MediaType } from '@server/constants/media';
import dataSource from '@server/datasource';
import Media from '@server/entity/Media';
import { User } from '@server/entity/User';
import type { BlacklistItem } from '@server/interfaces/api/blacklistInterfaces';
import type { ZodNumber, ZodOptional, ZodString } from 'zod';

export class Blacklist implements BlacklistItem {
  public id: number;
  public mediaType: MediaType;
  title?: string;
  public tmdbId: number;
  user?: User;
  public media: Media;
  public blacklistedTags?: string;
  public createdAt: Date;

  constructor(init?: Partial<Blacklist>) {
    Object.assign(this, init);
  }

  public static async addToBlacklist(
    {
      blacklistRequest,
    }: {
      blacklistRequest: {
        mediaType: MediaType;
        title?: ZodOptional<ZodString>['_output'];
        tmdbId: ZodNumber['_output'];
        blacklistedTags?: string;
      };
    },
    entityManager?: EntityManager
  ): Promise<void> {
    const em = entityManager ?? dataSource;
    const blacklist = new this({
      ...blacklistRequest,
    });

    const mediaRepository = em.getRepository(Media);
    let media = await mediaRepository.findOne({
      where: {
        tmdbId: blacklistRequest.tmdbId,
      },
    });

    const blacklistRepository = em.getRepository(this);

    await blacklistRepository.save(blacklist);

    if (!media) {
      media = new Media({
        tmdbId: blacklistRequest.tmdbId,
        status: MediaStatus.BLACKLISTED,
        status4k: MediaStatus.BLACKLISTED,
        mediaType: blacklistRequest.mediaType,
        blacklist: Promise.resolve(blacklist),
      });

      await mediaRepository.save(media);
    } else {
      media.blacklist = Promise.resolve(blacklist);
      media.status = MediaStatus.BLACKLISTED;
      media.status4k = MediaStatus.BLACKLISTED;

      await mediaRepository.save(media);
    }
  }
}
