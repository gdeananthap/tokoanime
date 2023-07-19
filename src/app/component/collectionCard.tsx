/** @jsxRuntime classic */
/** @jsx jsx */
"use client";
import { jsx } from '@emotion/react'
import { useRouter } from 'next/navigation'
import React, { MouseEvent } from 'react'
import Image from 'next/image'
import { Delete } from 'emotion-icons/material'
import { collectionList } from '../styles/collectionList'
import { Collection } from '../utils/collection';

export type Props = {
  collection: {
    id: number;
    title: string;
    cover: string;
  },
  index: number,
  showRemove: boolean,
  setRemoveCollection: () => void,
}

export default function CollectionCard({
  collection,
  index,
  showRemove,
  setRemoveCollection
} : Props) {

  const router = useRouter()

  const goToCollectionDetail = (id: number) => {
    router.push(`/collection-detail?id=${id}`)
  }

  const deleteCollection = (event: MouseEvent): void => {
    event.stopPropagation();
    setRemoveCollection()
  };

  return (
    <div className="collection-card" css={collectionList.card} onClick={() => goToCollectionDetail(collection.id)}>
      {showRemove &&
        <div className="collection-card-button" css={collectionList.cardButton} onClick={(event) => deleteCollection(event)}>
          <Delete className="delete-icon" css={collectionList.buttonIcon}/>
        </div>
      }
      <div className="collection-card-label" css={collectionList.cardLabel}>
        <h3 className="collection-title" css={collectionList.title}>{collection.title}</h3>
      </div>
      <Image src={collection.cover === '' ? '/collection-placeholder.png' : collection.cover} alt="collection cover" className="collection-cover" width={240} height={320} css={collectionList.coverImage} placeholder="blur" blurDataURL='/collection-placeholder.png'/>
    </div>
  )
}
