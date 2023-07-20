import {addAnimeToCollection, bulkAddAnimeToCollection, createCollection, editCollection, generateNewCollectionName, getAllCollection, getCollectionById, getCollectionsWithAnime, isAnimeInCollection, isCollectionNameHasSpecialChar, isCollectionNameUnique, removeAnimeInCollection, removeCollection} from "../../utils/collection"
import 'jest-localstorage-mock'

const MOCK_LOCALSTORAGE = {
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
};

MOCK_LOCALSTORAGE.getItem.mockImplementation((name) => {
  if (name === 'collectionList') {
    return JSON.stringify([
      {
        id: 0, 
        title:'test', 
        animeList: [
          {
            id: 1,
            coverImage: {
              large: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx15-A4F2t0TgWoi4.png"
            },
            title: {
              romaji: "Anime 1"
            },
            genres: [
              "Sports"
            ],
            startDate: {
              year: 2005,
            },
          },
        ]
      }
    ]);
  } else if (name === 'latestId') {
    return '0';
  }
  return JSON.stringify([]);
});

beforeEach(() => {
  jest.clearAllMocks();
  Object.defineProperty(window, 'localStorage', {
    value: MOCK_LOCALSTORAGE,
  });
});

describe('Collection Modules', () => {
  test('Create Collection', () => {
    createCollection('Test')
    expect(window.localStorage.setItem).toBeCalledTimes(2);
    expect(window.localStorage.setItem).toBeCalledWith(
      'collectionList',
      JSON.stringify([
        {
          id: 0,
          title: 'test',
          animeList: [
            {
              id: 1,
              coverImage: {
                large: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx15-A4F2t0TgWoi4.png"
              },
              title: {
                romaji: "Anime 1"
              },
              genres: [
                "Sports"
              ],
              startDate: {
                year: 2005,
              },
            },
          ],
        },
        {
          id: 1,
          title: 'Test',
          animeList: [],
        },
      ])
    );
    expect(window.localStorage.setItem).toBeCalledWith(
      'latestId',
      JSON.stringify(1)
    );
  });

  test('Get All Collection', () => {
    expect(getAllCollection()).toStrictEqual([{
      id: 0, 
      title:'test', 
      animeList: [
        {
          id: 1,
          coverImage: {
            large: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx15-A4F2t0TgWoi4.png"
          },
          title: {
            romaji: "Anime 1"
          },
          genres: [
            "Sports"
          ],
          startDate: {
            year: 2005,
          },
        },
      ]
    }])
    expect(window.localStorage.getItem).toBeCalledWith(
      'collectionList',
    );
  });

  test('Get Collection By Id', () => {
    expect(getCollectionById(0)).toStrictEqual({
      id: 0, 
      title:'test', 
      animeList: [
        {
          id: 1,
          coverImage: {
            large: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx15-A4F2t0TgWoi4.png"
          },
          title: {
            romaji: "Anime 1"
          },
          genres: [
            "Sports"
          ],
          startDate: {
            year: 2005,
          },
        },
      ]
    })
  });

  test('Edit Collection', () => {
    editCollection(0, 'New Name')
    expect(window.localStorage.getItem('collectionList')).toBeCalled;
    expect(window.localStorage.setItem).toBeCalledTimes(1);
    expect(window.localStorage.setItem).toBeCalledWith(
      'collectionList',
      JSON.stringify([
        {
          id: 0,
          title: 'New Name',
          animeList: [
            {
              id: 1,
              coverImage: {
                large: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx15-A4F2t0TgWoi4.png"
              },
              title: {
                romaji: "Anime 1"
              },
              genres: [
                "Sports"
              ],
              startDate: {
                year: 2005,
              },
            },
          ],
        },
      ])
    );
  });

  test('Remove Collection', () => {
    removeCollection(0)
    expect(window.localStorage.setItem).toBeCalledWith(
      'collectionList',
      JSON.stringify([
      ])
    );
  });

  test('isCollectionNameUnique', () => {
    expect(isCollectionNameUnique('test 1')).toBe(true);
    expect(isCollectionNameUnique('test')).toBe(false);
  });

  test('isCollectionNameHasSpecialChar', () => {
    expect(isCollectionNameHasSpecialChar('test!')).toBe(true);
    expect(isCollectionNameHasSpecialChar('test')).toBe(false);
  });

  test('generateNewCollectionName', () => {
    expect(generateNewCollectionName()).toBe('New Collection');
  });

  test('addAnimeToCollection', () => {
    addAnimeToCollection(0, {
      id: 15,
      coverImage: {
        large: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx15-A4F2t0TgWoi4.png"
      },
      title: {
        romaji: "Eyeshield 21"
      },
      genres: [
        "Action",
        "Comedy",
        "Sports"
      ],
      startDate: {
        year: 2005,
      },
    })
    expect(window.localStorage.setItem).toBeCalledWith(
      'collectionList',
      JSON.stringify([
        {
          id: 0,
          title: 'test',
          animeList: [
            {
              id: 1,
              coverImage: {
                large: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx15-A4F2t0TgWoi4.png"
              },
              title: {
                romaji: "Anime 1"
              },
              genres: [
                "Sports"
              ],
              startDate: {
                year: 2005,
              },
            },
            {
              id: 15,
              coverImage: {
                large: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx15-A4F2t0TgWoi4.png"
              },
              title: {
                romaji: "Eyeshield 21"
              },
              genres: [
                "Action",
                "Comedy",
                "Sports"
              ],
              startDate: {
                year: 2005,
              },
            }
          ],
        },
      ])
    );;
  });

  test('bulkAddAnimeToCollection', () => {
    bulkAddAnimeToCollection(0, [
      {
        id: 15,
        coverImage: {
          large: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx15-A4F2t0TgWoi4.png"
        },
        title: {
          romaji: "Eyeshield 21"
        },
        genres: [
          "Action",
          "Comedy",
          "Sports"
        ],
        startDate: {
          year: 2005,
        },
      },
      {
        id: 17,
        coverImage: {
          large: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx15-A4F2t0TgWoi4.png"
        },
        title: {
          romaji: "Eyeshield 17"
        },
        genres: [
          "Sports"
        ],
        startDate: {
          year: 2099,
        },
      }
    ])
    expect(window.localStorage.setItem).toBeCalledWith(
      'collectionList',
      JSON.stringify([
        {
          id: 0,
          title: 'test',
          animeList: [
            {
              id: 1,
              coverImage: {
                large: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx15-A4F2t0TgWoi4.png"
              },
              title: {
                romaji: "Anime 1"
              },
              genres: [
                "Sports"
              ],
              startDate: {
                year: 2005,
              },
            },
            {
              id: 15,
              coverImage: {
                large: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx15-A4F2t0TgWoi4.png"
              },
              title: {
                romaji: "Eyeshield 21"
              },
              genres: [
                "Action",
                "Comedy",
                "Sports"
              ],
              startDate: {
                year: 2005,
              },
            },
            {
              id: 17,
              coverImage: {
                large: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx15-A4F2t0TgWoi4.png"
              },
              title: {
                romaji: "Eyeshield 17"
              },
              genres: [
                "Sports"
              ],
              startDate: {
                year: 2099,
              },
            }
          ],
        },
      ])
    );;
  });
  
  test('removeAnimeInCollection', () => {
    removeAnimeInCollection(0, 1)
    expect(window.localStorage.setItem).toBeCalledWith(
      'collectionList',
      JSON.stringify([
        {
          id: 0,
          title: 'test',
          animeList: [
          ],
        },
      ])
    );;
  });

  test('getCollectionsWithAnime', () => {
    expect(getCollectionsWithAnime(1)).toStrictEqual(
      [
        {
          id: 0, 
          title:'test', 
          animeList: [
            {
              id: 1,
              coverImage: {
                large: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx15-A4F2t0TgWoi4.png"
              },
              title: {
                romaji: "Anime 1"
              },
              genres: [
                "Sports"
              ],
              startDate: {
                year: 2005,
              },
            },
          ]
        }
      ]
    )
  });

  test('isAnimeInCollection', () => {
    expect(isAnimeInCollection(0, 1)).toBe(true)
    expect(isAnimeInCollection(0, 2)).toBe(false)
  });
});