/** @jsxRuntime classic */
/** @jsx jsx */
"use client";
import { jsx } from '@emotion/react'
import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { useQuery } from '@apollo/client'
import { global } from '../styles/global'
import { anime } from '../styles/anime'
import { collectionList } from '../styles/collectionList'
import Header from '../component/header'
import Footer from '../component/footer'
import CollectionCard from '../component/collectionCard'
import { collectionData } from '../constants/collectionData'
import { AddSquareMultiple } from 'emotion-icons/fluentui-system-filled'
import { convertArray } from '../utils/convertArray'
import { convertEnum } from '../utils/convertEnum'
import { convertDate } from '../utils/convertDate'
import * as he from 'he'
import { GET_ANIME_DETAIL, createVariables} from '../api/getAnimeDetail'

export default function AnimeDetail() {
  const searchParams = useSearchParams()
  const [id, setId] = useState<any>(1)
  const [collections, setCollections] = useState(collectionData)

  const { loading, data } = useQuery(GET_ANIME_DETAIL, {
    variables: createVariables(id),
  });

  useEffect(() => {
    const id = searchParams.get('id') || 1
    setId(id)
  }, [searchParams]);

  return (
    <div className='container' css={global.container}>
      <div className="main-container">
        <Header />
        <div className="page-container" css={global.pageContainer}>
          { loading && <div className="loader" css={global.loading}></div> }
          { !loading && <div className="anime-list-header" css={anime.header}>
            <h1 className="anime-list-title" css={global.h1}>{data?.Media.title.romaji}</h1>
          </div> }
          { !loading && data?.Media.bannerImage &&
            <Image src={data?.Media.bannerImage} css={anime.banner} alt="anime banner" className="anime-banner" width={240} height={320} placeholder="blur" blurDataURL='/cover-placeholder.png'/>
          }
          {!loading && <div className="anime-detail-card" css={anime.card}>
            <Image src={data?.Media.coverImage.large ?? ''} css={anime.cover} alt="anime banner" className="anime-banner" width={240} height={320} placeholder="blur" blurDataURL='/cover-placeholder.png'/>
            <div className="anime-detail-container" css={anime.detailContainer}>
              <button className="bulk-add" css={global.primaryButton}>
                <p className="bulk-add-title" css={global.primaryButtonTitle}>Add to Collection</p>
                <AddSquareMultiple className="bulk-add-icon" css={global.primaryButtonIcon}/>
              </button>
              <div className="anime-detail-text" css={anime.detailText}>
                <p className="anime-detail-desc" css={anime.desc}>{he.decode(data?.Media.description ?? '')}</p>
                <div className="anime-detail-more" css={anime.detailMore}>
                  <div className="anime-detail-left" css={anime.detailLeft}>
                    <div className="anime-detail-text-container" css={anime.detailTextContainer}>
                      <p className="anime-detail-text-label" css={anime.detailLabel}>Synonyms:</p>
                      <p className="anime-detail-text-value" css={anime.detailValue}>{convertArray(data?.Media.synonyms)}</p>
                    </div>
                    <div className="anime-detail-text-container" css={anime.detailTextContainer}>
                      <p className="anime-detail-text-label" css={anime.detailLabel}>Genre:</p>
                      <p className="anime-detail-text-value" css={anime.detailValue}>{convertArray(data?.Media.genres)}</p>
                    </div>
                    <div className="anime-detail-text-container" css={anime.detailTextContainer}>
                      <p className="anime-detail-text-label" css={anime.detailLabel}>Rating:</p>
                      <p className="anime-detail-text-value" css={anime.detailValue}>{data?.Media.averageScore ?? '-'}</p>
                    </div>
                    <div className="anime-detail-text-container" css={anime.detailTextContainer}>
                      <p className="anime-detail-text-label" css={anime.detailLabel}>Status:</p>
                      <p className="anime-detail-text-value" css={anime.detailValue}>{convertEnum(data?.Media.status) }</p>
                    </div>
                  </div>
                  <div className="anime-detail-right" css={anime.detailRight}>
                    <div className="anime-detail-text-container" css={anime.detailTextContainer}>
                      <p className="anime-detail-text-label" css={anime.detailLabel}>Total episodes:</p>
                      <p className="anime-detail-text-value" css={anime.detailValue}>{`${data?.Media.episodes ? `${data?.Media.episodes} episodes` : '-'}`}</p>
                    </div>
                    <div className="anime-detail-text-container" css={anime.detailTextContainer}>
                      <p className="anime-detail-text-label" css={anime.detailLabel}>Duration per episode:</p>
                      <p className="anime-detail-text-value" css={anime.detailValue}>{`${data?.Media.duration ? `${data?.Media.duration} minutes` : '-'}`}</p>
                    </div>
                    <div className="anime-detail-text-container" css={anime.detailTextContainer}>
                      <p className="anime-detail-text-label" css={anime.detailLabel}>Season:</p>
                      <p className="anime-detail-text-value" css={anime.detailValue}>{`${data?.Media.season && data?.Media.seasonYear ? `${convertEnum(data?.Media.season)}, ${data?.Media.seasonYear}` : '-'}`}</p>
                    </div>
                    <div className="anime-detail-text-container" css={anime.detailTextContainer}>
                      <p className="anime-detail-text-label" css={anime.detailLabel}>Start airing:</p>
                      <p className="anime-detail-text-value" css={anime.detailValue}>{convertDate(data?.Media.startDate)}</p>
                    </div>
                    </div>
                </div>
              </div>
            </div>
          </div>}
          {!loading && <h2 className="anime-list-title" css={global.h2}>Included in These Collections</h2>}
          { !loading && collections && collections.length > 0 && 
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
          { !loading && collections && collections.length <= 0 &&
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
