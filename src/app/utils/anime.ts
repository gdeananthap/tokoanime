export type Anime = {
  id: number,
  title: {
    romaji: string,
  },
  coverImage: {
    large: string,
  },
  bannerImage: string,
  synonyms: string[],
  description: string,
  status: string,
  genres: string[],
  averageScore: number,
  startDate: {
    year: number,
    month: number,
    day: number,
  },
  episodes: number,
  duration: number,
  season: string,
  seasonYear: number,
}