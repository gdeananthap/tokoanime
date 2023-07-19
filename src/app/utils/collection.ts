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