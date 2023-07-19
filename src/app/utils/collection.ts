export type Collection = {
  id: number,
  title: string,
  cover: string
}

export function createCollection(name: string) : void {
  const currentCollectionList = JSON.parse(localStorage.getItem('collectionList') || "[]")
  const newId = parseInt(localStorage.getItem('latestId') || '-1') + 1
  const newCollection = {
    id: newId,
    title: name,
    cover: ''
  }
  const newCollectionList = [...currentCollectionList, newCollection]
  localStorage.setItem('collectionList', JSON.stringify(newCollectionList))
  localStorage.setItem(`collection-${newId}`, '[]')
  localStorage.setItem('latestId', newId.toString())
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
  localStorage.removeItem(`collection-${id}`)
}