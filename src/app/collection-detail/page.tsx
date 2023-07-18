/** @jsxRuntime classic */
/** @jsx jsx */
"use client";
import { jsx } from '@emotion/react'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { global } from '../styles/global'
import { animeList } from '../styles/animeList'
import Header from '../component/header'
import Footer from '../component/footer'
import AnimeCard from '../component/animeCard'
import { collectionDetail, collectionDetailEmpty} from '../constants/collectionData';
import { Edit } from 'emotion-icons/material'

export default function CollectionDetail() {
  const router = useRouter()
  const [data, setData] = useState(collectionDetailEmpty)

  const goToAnimeList = () => {
    router.push('/')
  }

  return (
    <div className='container' css={global.container}>
      <div className="main-container">
        <Header />
        <div className="page-container" css={global.pageContainer}>
          <div className="anime-list-header" css={animeList.header}>
            <h1 className="anime-list-title" css={global.h1}>{data.title}</h1>
            <button className="bulk-add" css={global.primaryButton}>
              <p className="bulk-add-title" css={global.primaryButtonTitle}>Edit</p>
              <Edit className="bulk-add-icon" css={global.primaryButtonIcon}/>
            </button>
          </div>
          <div className="anime-list-container" css={animeList.container}>
            { data && data.animeList && data.animeList.length > 0 && data.animeList.map((anime, index) => (
              <AnimeCard 
                anime={anime}
                key={index}
              />
            ))}
          </div>
          { data && data.animeList.length <= 0 &&
            <div className="error-page-container" css={global.errorContainer}>
              <h1 className="errorTitle" css={global.errorTitle}>No Anime Found</h1>
              <p className="errorTitle" css={global.errorDesc}><a className="clickable" css={global.errorDescClick} onClick={goToAnimeList}>Explore list of anime </a>to get started</p>
            </div>
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}
