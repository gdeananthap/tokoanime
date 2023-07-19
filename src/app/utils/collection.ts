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
  localStorage.setItem('latestId', newId.toString())
}

export function removeCollection(id: number) : void {
  const currentCollectionList = JSON.parse(localStorage.getItem('collectionList') || "[]")
  const newCollectionList = currentCollectionList.filter((collection: Collection) => collection.id !== id)
  localStorage.setItem('collectionList', JSON.stringify(newCollectionList))
}