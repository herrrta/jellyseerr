// Anime-List xml files are community maintained mappings that Hama agent uses to map AniDB IDs to TVDB/TMDB IDs
// https://github.com/Anime-Lists/anime-lists/

interface AnimeMapping {
  $: {
    anidbseason: string;
    tvdbseason: string;
  };
  _: string;
}

interface Anime {
  $: {
    anidbid: number;
    tvdbid?: string;
    defaulttvdbseason?: string;
    tmdbid?: number;
    imdbid?: string;
  };
  'mapping-list'?: {
    mapping: AnimeMapping[];
  }[];
}

interface AnimeList {
  'anime-list': {
    anime: Anime[];
  };
}

export interface AnidbItem {
  tvdbId?: number;
  tmdbId?: number;
  imdbId?: string;
}
