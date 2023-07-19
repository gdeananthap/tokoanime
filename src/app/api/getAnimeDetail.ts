import { gql, TypedDocumentNode } from '@apollo/client';

type AnimeDetailData = {
  Media: {
    id: number;
    title: {
      romaji: string;
    };
    coverImage: {
      large: string;
    };
    bannerImage: string;
    synonyms: string[];
    description: string;
    status: string;
    genres: string[];
    averageScore: number;
    startDate: {
      year: number;
      month: number;
      day: number;
    };
    episodes: number;
    duration: number;
    season: string;
    seasonYear: number;
  };
};

type AnimeDetailVariables = {
  id: number
};

export function createVariables(id: number): AnimeDetailVariables  {
  return {
    id: id
  }
}

export const GET_ANIME_DETAIL: TypedDocumentNode<AnimeDetailData, AnimeDetailVariables> = gql(`
  query ($id: Int) {
    Media(id: $id) {
      id
      coverImage {
        large
      }
      bannerImage
      title {
        romaji
      }
      synonyms
      description(asHtml: false)
      status
      genres
      averageScore
      startDate {
        year
        month
        day
      }
      episodes
      duration
      season
      seasonYear
    }
  }
`);
