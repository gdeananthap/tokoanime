import { addAnimeToAnimeList, emptyAnimeList, getBulkAnimeList, isAnimeInList, removeAnimeFromList } from '../../utils/anime';
import 'jest-localstorage-mock'

const MOCK_LOCALSTORAGE = {
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
};

const ANIME =       {
  id: 1,
  coverImage: {
    large: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx15-A4F2t0TgWoi4.png"
  },
  bannerImage: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n15-1eTutXlxYzYl.jpg",
  title: {
    romaji: "Anime 1"
  },
  synonyms: [
    "anime 1"
  ],
  description: "Description Anime",
  status: "FINISHED",
  genres: [ "Action", "Comedy"],
  averageScore: 75,
  startDate: {
    year: 2005,
    month: 4,
    day: 6
  },
  episodes: 145,
  duration: 23,
  season: "SPRING",
  seasonYear: 2005
}

MOCK_LOCALSTORAGE.getItem.mockImplementation((name) => {
  if (name === 'animeCart') {
    return JSON.stringify([
      {
        id: 1,
        coverImage: {
          large: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx15-A4F2t0TgWoi4.png"
        },
        title: {
          romaji: "Anime 1"
        },
        genres: [ "Action", "Comedy"],
        startDate: {
          year: 2005,
        },      
      }
    ]);
  }
  return JSON.stringify([]);
});

beforeEach(() => {
  jest.clearAllMocks();
  Object.defineProperty(window, 'localStorage', {
    value: MOCK_LOCALSTORAGE,
  });
});

describe('Anime Modules', () => {
  test('getBulkAnimeList', () => {
    expect(getBulkAnimeList()).toStrictEqual([
      {
        id: 1,
        coverImage: {
          large: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx15-A4F2t0TgWoi4.png"
        },
        title: {
          romaji: "Anime 1"
        },
        genres: [ "Action", "Comedy"],
        startDate: {
          year: 2005,
        },      
      }
    ])
  });

  test('emptyAnimeList', () => {
    emptyAnimeList()
    expect(window.localStorage.removeItem).toBeCalledWith('animeCart')
  });

  test('addAnimeToAnimeList', () => {
    addAnimeToAnimeList({
      id: 2,
      coverImage: {
        large: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx15-A4F2t0TgWoi4.png"
      },
      title: {
        romaji: "Anime 2"
      },
      genres: [ "Action", "Comedy"],
      startDate: {
        year: 2005,
      },      
    })
    expect(window.localStorage.setItem).toBeCalledWith(
      'animeCart',
      JSON.stringify([
        {
          id: 1,
          coverImage: {
            large: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx15-A4F2t0TgWoi4.png"
          },
          title: {
            romaji: "Anime 1"
          },
          genres: [ "Action", "Comedy"],
          startDate: {
            year: 2005,
          },
        },
        {
          id: 2,
          coverImage: {
            large: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx15-A4F2t0TgWoi4.png"
          },
          title: {
            romaji: "Anime 2"
          },
          genres: [ "Action", "Comedy"],
          startDate: {
            year: 2005,
          }, 
        }
      ])
    )
  });

  test('addAnimeToAnimeList', () => {
    removeAnimeFromList(1)
    expect(window.localStorage.setItem).toBeCalledWith(
      'animeCart',
      JSON.stringify([])
    )
  });

  test('isAnimeInList', () => {
    expect(isAnimeInList(1)).toBe(true)
    expect(isAnimeInList(999)).toBe(false)
  });
});
