/** @jsxRuntime classic */
/** @jsx jsx */
"use client";
import { jsx } from '@emotion/react'
import { useRouter } from 'next/navigation'
import React, { MouseEvent } from 'react'
import Image from 'next/image'
import { Delete } from 'emotion-icons/material'
import { Edit } from 'emotion-icons/material'
import { global } from '../styles/global'
import { collectionList } from '../styles/collectionList'
import { Collection } from '../utils/collection';

export type Props = {
  collection: Collection,
  showRemove: boolean,
  showEdit: boolean,
  setRemoveCollection: () => void,
  setEditCollection: () => void,
}

export default function CollectionCard({
  collection,
  showRemove,
  showEdit,
  setRemoveCollection,
  setEditCollection,
} : Props) {
  const router = useRouter()

  const goToCollectionDetail = (id: number) => {
    router.push(`/collection-detail?id=${id}`)
  }

  const deleteCollection = (event: MouseEvent): void => {
    event.stopPropagation();
    setRemoveCollection()
  };

  const editCollection = (event: MouseEvent): void => {
    event.stopPropagation();
    setEditCollection()
  };

  return (
    <div className="collection-card" css={showEdit? collectionList.cardEdit : collectionList.card} onClick={() => goToCollectionDetail(collection.id)}>
      {showRemove &&
        <div className="collection-card-button" css={collectionList.cardButton} onClick={(event) => deleteCollection(event)}>
          <Delete className="delete-icon" css={collectionList.buttonIcon}/>
        </div>
      }
      <div className="collection-card-label" css={collectionList.cardLabel}>
        <h3 className="collection-title" css={collectionList.title}>{collection.title}</h3>
      </div>
      { showEdit && 
        <button className="edit" css={global.primaryButtonSmall} onClick={(event) => editCollection(event)}>
          <p className="edit-title" css={global.primaryButtonTitleSmall}>Edit</p>
          <Edit className="edit-icon" css={global.primaryButtonIconSmall}/>
        </button>
      }
      { collection && collection.animeList &&
        <Image src={collection.animeList.length === 0 || collection.animeList[0].coverImage.large === '' ? '/collection-placeholder.png' : collection.animeList[0].coverImage.large} alt="collection cover" className="collection-cover" width={240} height={320} css={collectionList.coverImage} placeholder="blur" blurDataURL='/collection-placeholder.png'/>
      }
    </div>
  )
}
