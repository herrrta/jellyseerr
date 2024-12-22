interface SearchOptions {
  query: string;
  page?: number;
  includeAdult?: boolean;
  language?: string;
}

interface SingleSearchOptions extends SearchOptions {
  year?: number;
}

export const SortOptionsIterable = [
  'popularity.desc',
  'popularity.asc',
  'release_date.desc',
  'release_date.asc',
  'revenue.desc',
  'revenue.asc',
  'primary_release_date.desc',
  'primary_release_date.asc',
  'original_title.asc',
  'original_title.desc',
  'vote_average.desc',
  'vote_average.asc',
  'vote_count.desc',
  'vote_count.asc',
  'first_air_date.desc',
  'first_air_date.asc',
] as const;

export type SortOptions = (typeof SortOptionsIterable)[number];

export interface TmdbCertificationResponse {
  certifications: {
    [country: string]: {
      certification: string;
      meaning?: string;
      order?: number;
    }[];
  };
}

interface DiscoverMovieOptions {
  page?: number;
  includeAdult?: boolean;
  language?: string;
  primaryReleaseDateGte?: string;
  primaryReleaseDateLte?: string;
  withRuntimeGte?: string;
  withRuntimeLte?: string;
  voteAverageGte?: string;
  voteAverageLte?: string;
  voteCountGte?: string;
  voteCountLte?: string;
  originalLanguage?: string;
  genre?: string;
  studio?: string;
  keywords?: string;
  sortBy?: SortOptions;
  watchRegion?: string;
  watchProviders?: string;
  certification?: string;
  certificationGte?: string;
  certificationLte?: string;
  certificationCountry?: string;
}

interface DiscoverTvOptions {
  page?: number;
  language?: string;
  firstAirDateGte?: string;
  firstAirDateLte?: string;
  withRuntimeGte?: string;
  withRuntimeLte?: string;
  voteAverageGte?: string;
  voteAverageLte?: string;
  voteCountGte?: string;
  voteCountLte?: string;
  includeEmptyReleaseDate?: boolean;
  originalLanguage?: string;
  genre?: string;
  network?: number;
  keywords?: string;
  sortBy?: SortOptions;
  watchRegion?: string;
  watchProviders?: string;
  withStatus?: string; // Returning Series: 0 Planned: 1 In Production: 2 Ended: 3 Cancelled: 4 Pilot: 5
  certification?: string;
  certificationGte?: string;
  certificationLte?: string;
  certificationCountry?: string;
}