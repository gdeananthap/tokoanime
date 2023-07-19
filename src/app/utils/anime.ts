export type AnimeDetail = {
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

export type Anime = {
  id: number,
  title: {
    romaji: string,
  },
  coverImage: {
    large: string,
  },
  genres: string[],
  startDate: {
    year: number,
  },
}

export function createAnimeObjFromDetail(detail: AnimeDetail) : Anime {
  const animeDetail = {
    id: detail.id,
    title: {
      romaji: detail.title.romaji,
    },
    coverImage: {
      large: detail.coverImage.large,
    },
    genres: detail.genres,
    startDate: {
      year: detail.startDate.year,
    },
  }
  return animeDetail
}

export function getBulkAnimeList() : Anime[] {
  const animeList: Anime[] = JSON.parse(localStorage.getItem('animeCart') || "[]")
  return animeList
}

export function emptyAnimeList() : void {
  localStorage.removeItem('animeCart')
}

export function addAnimeToAnimeList(newAnime: Anime) : void {
  const currentAnimeList: Anime[] = JSON.parse(localStorage.getItem('animeCart') || "[]")
  if(!isAnimeInList(newAnime.id)){
    const newAnimeList = [...currentAnimeList, newAnime]
    localStorage.setItem('animeCart', JSON.stringify(newAnimeList))
  }
}

export function removeAnimeFromList(id: number) : void {
  const currentAnimeList: Anime[] = JSON.parse(localStorage.getItem('animeCart') || "[]")
  const newAnimeList = currentAnimeList.filter((anime: Anime) => anime.id !== id)
  localStorage.setItem('animeCart', JSON.stringify(newAnimeList))
}

export function isAnimeInList(animeId: number): boolean {
  const currentAnimeList: Anime[] = JSON.parse(localStorage.getItem('animeCart') || "[]")
  if (currentAnimeList) {
    return currentAnimeList.some(anime => anime.id === animeId)
  } else {
    return false
  }
}