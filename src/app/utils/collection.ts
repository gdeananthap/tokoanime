import { Anime, emptyAnimeList } from "./anime"

export type Collection = {
  id: number,
  title: string,
  animeList: Anime[],
}

export function createCollection(name: string) : void {
  const currentCollectionList = JSON.parse(localStorage.getItem('collectionList') || "[]")
  const newId = parseInt(localStorage.getItem('latestId') || '-1') + 1
  const newCollection = {
    id: newId,
    title: name=== '' ? generateNewCollectionName() : name,
    animeList: [],
  }
  const newCollectionList = [...currentCollectionList, newCollection]
  localStorage.setItem('collectionList', JSON.stringify(newCollectionList))
  localStorage.setItem('latestId', newId.toString())
}

export function getAllCollection() : Collection[] {
  const collectionList: Collection[] = JSON.parse(localStorage.getItem('collectionList') || "[]")
  return collectionList
}

export function getCollectionById(id: number) : Collection | undefined {
  const collectionList: Collection[] = JSON.parse(localStorage.getItem('collectionList') || "[]")
  const collection = collectionList.find(collection => collection.id === id) 
  return collection
}

export function editCollection(id: number, name: string) : void {
  const currentCollectionList: Collection[] = JSON.parse(localStorage.getItem('collectionList') || "[]")
  const newCollectionList =  currentCollectionList.map(collection => {
    if (collection.id === id) {
      return { ...collection, title: name };
    }
    return collection;
  });
  localStorage.setItem('collectionList', JSON.stringify(newCollectionList))
}

export function removeCollection(id: number) : void {
  const currentCollectionList = JSON.parse(localStorage.getItem('collectionList') || "[]")
  const newCollectionList = currentCollectionList.filter((collection: Collection) => collection.id !== id)
  localStorage.setItem('collectionList', JSON.stringify(newCollectionList))
}

export function isCollectionNameUnique(name: string) : boolean {
  const currentCollectionList: Collection[] = JSON.parse(localStorage.getItem('collectionList') || "[]")
  const lowerCaseName = name.toLowerCase();
  return !currentCollectionList.some(collection => collection.title.toLowerCase() === lowerCaseName)
}

export function isCollectionNameHasSpecialChar(name: string): boolean {
  const regex =  /[!@#$%^&*(),.?":{}|<>]/
  const hasSpecialChars = regex.test(name)
  if (hasSpecialChars) {
    return true
  } else {
    return false
  }
}

export function generateNewCollectionName() : string {
  let count = 0
  let name = 'New Collection'
  let found = false
  while(!found) {
    if(!isCollectionNameUnique(name)){
      count++
      name = `New Collection ${count}`
    } else {
      found = true
    }
  }
  return name
}

export function addAnimeToCollection(id: number, anime: Anime) : void {
  const currentCollectionList: Collection[] = JSON.parse(localStorage.getItem('collectionList') || "[]")
  const newCollectionList =  currentCollectionList.map(collection => {
    if (collection.id === id && !isAnimeInCollection(id, anime.id)) {
      const updatedAnimeList = [...collection.animeList, anime];
      return { ...collection, animeList: updatedAnimeList };
    }
    return collection;
  });
  localStorage.setItem('collectionList', JSON.stringify(newCollectionList))
}

export function bulkAddAnimeToCollection(id: number, animeList: Anime[]) : void {
  const currentCollectionList: Collection[] = JSON.parse(localStorage.getItem('collectionList') || "[]")
  const newCollectionList =  currentCollectionList.map(collection => {
    if (collection.id === id) {
      const existingAnimeIds = collection.animeList.map(anime => anime.id);
      const newAnimeList = animeList.filter(anime => !existingAnimeIds.includes(anime.id));
      const updatedAnimeList = [...collection.animeList, ...newAnimeList];
      return { ...collection, animeList: updatedAnimeList };
    }
    return collection;
  });
  localStorage.setItem('collectionList', JSON.stringify(newCollectionList))
  emptyAnimeList()
}

export function removeAnimeInCollection(collectionId: number, animeId: number) : void {
  const currentCollectionList: Collection[] = JSON.parse(localStorage.getItem('collectionList') || "[]")
  const newCollectionList =  currentCollectionList.map(collection => {
    if (collection.id === collectionId && isAnimeInCollection(collectionId, animeId)) {
      const updatedAnimeList = collection.animeList.filter((anime: Anime) => anime.id !== animeId);
      return { ...collection, animeList: updatedAnimeList };
    }
    return collection;
  });
  localStorage.setItem('collectionList', JSON.stringify(newCollectionList))
}

export function getCollectionsWithAnime(animeId: number): Collection[] {
  const currentCollectionList: Collection[] = JSON.parse(localStorage.getItem('collectionList') || "[]")
  return currentCollectionList.filter(collection =>
    collection.animeList.some(anime => anime.id === animeId)
  );
}

export function isAnimeInCollection(collectionId: number, animeId: number): boolean {
  const collection = getCollectionById(collectionId)
  if (collection) {
    return collection.animeList.some(anime => anime.id === animeId)
  } else {
    return false
  }
}