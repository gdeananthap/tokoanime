/** @jsxRuntime classic */
/** @jsx jsx */
"use client";
import { jsx } from '@emotion/react'
import React, { MouseEvent } from 'react'
import Image from 'next/image'
import { AddSquare } from 'emotion-icons/fluentui-system-regular'
import { animeList } from '../styles/animeList'

export type Props = {
  anime: {
    id: number;
    title: {
      romaji: string;
    };
    coverImage: {
      large: string;
    };
    genres: string[];
    averageScore: number;
    startDate: {
      year: number;
    };
  }
}

export default function AnimeCard(props: Props) {

  const goToAnimeDetail = (id: number) => {
    console.log(`go to anime detail with id: ${id}`)
  }

  const addAnimeToCart = (id: number, event: MouseEvent): void => {
    event.stopPropagation();
    console.log(`add anime to cart with id: ${id}`);
  };

  return (
    <div className="anime-card" css={animeList.card} onClick={() => goToAnimeDetail(props.anime.id)}>
      <Image src={props.anime.coverImage.large} alt="anime cover" className="anime-cover" width={240} height={320} css={animeList.coverImage} placeholder="blur" blurDataURL='/cover-placeholder.png'/>
      <div className="anime-card-button" css={animeList.cardButton} onClick={(event) => addAnimeToCart(props.anime.id, event)}>
        <AddSquare className="bulk-add-icon" css={animeList.buttonIcon}/>
      </div>
      <div className="anime-card-label" css={animeList.cardLabel}>
        <h3 className="anime-title" css={animeList.title}>{props.anime.title.romaji}</h3>
        <h4 className="anime-description" css={animeList.description}>{`${props.anime.startDate.year}, ${props.anime.genres[0] ?? ''}`}</h4>
      </div>
    </div>
  )
}
