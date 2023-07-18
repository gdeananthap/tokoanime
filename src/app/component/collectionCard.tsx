/** @jsxRuntime classic */
/** @jsx jsx */
"use client";
import { jsx } from '@emotion/react'
import { useRouter } from 'next/navigation'
import React, { MouseEvent } from 'react'
import Image from 'next/image'
import { Delete } from 'emotion-icons/material'
import { collectionList } from '../styles/collectionList'

export type Props = {
  collection: {
    id: number;
    title: string;
    cover: string;
  },
  index: number,
  showRemove: boolean
}

export default function CollectionCard(props: Props) {

  const router = useRouter()

  const goToCollectionDetail = (id: number) => {
    router.push(`/collection-detail?id=${id}`)
  }

  const deleteCollection = (id: number, event: MouseEvent): void => {
    event.stopPropagation();
    console.log(`delete collection with id: ${id}`);
  };

  return (
    <div className="collection-card" css={collectionList.card} onClick={() => goToCollectionDetail(props.collection.id)}>
      {props.showRemove &&
        <div className="collection-card-button" css={collectionList.cardButton} onClick={(event) => deleteCollection(props.collection.id, event)}>
          <Delete className="delete-icon" css={collectionList.buttonIcon}/>
        </div>
      }
      <div className="collection-card-label" css={collectionList.cardLabel}>
        <h3 className="collection-title" css={collectionList.title}>{props.collection.title}</h3>
      </div>
      <Image src={props.collection.cover === '' ? '/collection-placeholder.png' : props.collection.cover} alt="collection cover" className="collection-cover" width={240} height={320} css={collectionList.coverImage} placeholder="blur" blurDataURL='/collection-placeholder.png'/>
    </div>
  )
}
