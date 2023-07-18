/** @jsxRuntime classic */
/** @jsx jsx */
"use client";
import { jsx } from '@emotion/react'
import React, { useState } from 'react'
import Image from 'next/image'
import { global } from '../styles/global'
import { anime } from '../styles/anime'
import { collectionList } from '../styles/collectionList'
import Header from '../component/header'
import Footer from '../component/footer'
import CollectionCard from '../component/collectionCard'
import { animeDetail } from '../constants/animeData'
import { collectionData } from '../constants/collectionData'
import { AddSquareMultiple } from 'emotion-icons/fluentui-system-filled'
import { convertArray } from '../utils/convertArray'
import { convertEnum } from '../utils/convertEnum'
import { convertDate } from '../utils/convertDate'
import * as he from 'he'

export default function AnimeDetail() {
  const [animeData, setAnimeData] = useState(animeDetail)
  const [collections, setCollections] = useState(collectionData)

  return (
    <div className='container' css={global.container}>
      <div className="main-container">
        <Header />
        <div className="page-container" css={global.pageContainer}>
          <div className="anime-list-header" css={anime.header}>
            <h1 className="anime-list-title" css={global.h1}>{animeData.title.romaji}</h1>
          </div>
          <Image src={animeData.bannerImage} css={anime.banner} alt="anime banner" className="anime-banner" width={240} height={320} placeholder="blur" blurDataURL='/cover-placeholder.png'/>
          <div className="anime-detail-card" css={anime.card}>
            <Image src={animeData.coverImage.large} css={anime.cover} alt="anime banner" className="anime-banner" width={240} height={320} placeholder="blur" blurDataURL='/cover-placeholder.png'/>
            <div className="anime-detail-container" css={anime.detailContainer}>
              <button className="bulk-add" css={global.primaryButton}>
                <p className="bulk-add-title" css={global.primaryButtonTitle}>Add to Collection</p>
                <AddSquareMultiple className="bulk-add-icon" css={global.primaryButtonIcon}/>
              </button>
              <div className="anime-detail-text" css={anime.detailText}>
                <p className="anime-detail-desc" css={anime.desc}>{he.decode(animeData.description)}</p>
                <div className="anime-detail-more" css={anime.detailMore}>
                  <div className="anime-detail-left" css={anime.detailLeft}>
                    <div className="anime-detail-text-container" css={anime.detailTextContainer}>
                      <p className="anime-detail-text-label" css={anime.detailLabel}>Synonyms:</p>
                      <p className="anime-detail-text-value" css={anime.detailValue}>{convertArray(animeData.synonyms)}</p>
                    </div>
                    <div className="anime-detail-text-container" css={anime.detailTextContainer}>
                      <p className="anime-detail-text-label" css={anime.detailLabel}>Genre:</p>
                      <p className="anime-detail-text-value" css={anime.detailValue}>{convertArray(animeData.genres)}</p>
                    </div>
                    <div className="anime-detail-text-container" css={anime.detailTextContainer}>
                      <p className="anime-detail-text-label" css={anime.detailLabel}>Rating:</p>
                      <p className="anime-detail-text-value" css={anime.detailValue}>{animeData.averageScore}</p>
                    </div>
                    <div className="anime-detail-text-container" css={anime.detailTextContainer}>
                      <p className="anime-detail-text-label" css={anime.detailLabel}>Genres:</p>
                      <p className="anime-detail-text-value" css={anime.detailValue}>{convertEnum(animeData.status)}</p>
                    </div>
                  </div>
                  <div className="anime-detail-right" css={anime.detailRight}>
                    <div className="anime-detail-text-container" css={anime.detailTextContainer}>
                      <p className="anime-detail-text-label" css={anime.detailLabel}>Total episodes:</p>
                      <p className="anime-detail-text-value" css={anime.detailValue}>{`${animeData.episodes} episodes`}</p>
                    </div>
                    <div className="anime-detail-text-container" css={anime.detailTextContainer}>
                      <p className="anime-detail-text-label" css={anime.detailLabel}>Duration per episode:</p>
                      <p className="anime-detail-text-value" css={anime.detailValue}>{`${animeData.duration} minutes`}</p>
                    </div>
                    <div className="anime-detail-text-container" css={anime.detailTextContainer}>
                      <p className="anime-detail-text-label" css={anime.detailLabel}>Season:</p>
                      <p className="anime-detail-text-value" css={anime.detailValue}>{`${convertEnum(animeData.season)}, ${animeData.seasonYear}`}</p>
                    </div>
                    <div className="anime-detail-text-container" css={anime.detailTextContainer}>
                      <p className="anime-detail-text-label" css={anime.detailLabel}>Start airing:</p>
                      <p className="anime-detail-text-value" css={anime.detailValue}>{convertDate(animeData.startDate)}</p>
                    </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <h2 className="anime-list-title" css={global.h2}>Included in These Collections</h2>
          { collections && collections.length > 0 && 
            <div className="collection-list-container" css={collectionList.container}>
              { collections && collections.length > 0 && collections.map((collection, index) => (
                <CollectionCard 
                  collection={collection}
                  showRemove={false}
                  index={index}
                  key={index}
                />
              ))}
            </div>
          }
          { collections && collections.length <= 0 &&
            <div className="error-page-container" css={global.errorContainer}>
              <p className="errorTitle" css={global.errorTitleSmall}>Sorry, you don’t have any collections that include this anime</p>
            </div>
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}
