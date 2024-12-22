interface RTAlgoliaSearchResponse {
  results: {
    hits: RTAlgoliaHit[];
    index: 'content_rt' | 'people_rt';
  }[];
}

interface RTAlgoliaHit {
  emsId: string;
  emsVersionId: string;
  tmsId: string;
  type: string;
  title: string;
  titles: string[];
  description: string;
  releaseYear: number;
  rating: string;
  genres: string[];
  updateDate: string;
  isEmsSearchable: boolean;
  rtId: number;
  vanity: string;
  aka: string[];
  posterImageUrl: string;
  rottenTomatoes: {
    audienceScore: number;
    criticsIconUrl: string;
    wantToSeeCount: number;
    audienceIconUrl: string;
    scoreSentiment: string;
    certifiedFresh: boolean;
    criticsScore: number;
  };
}

export interface RTRating {
  title: string;
  year: number;
  criticsRating: 'Certified Fresh' | 'Fresh' | 'Rotten';
  criticsScore: number;
  audienceRating?: 'Upright' | 'Spilled';
  audienceScore?: number;
  url: string;
}