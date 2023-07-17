/** @jsxRuntime classic */
/** @jsx jsx */
"use client";
import { jsx } from '@emotion/react'
import React, { useState } from 'react'
import { global } from './styles/global'
import { animeList } from './styles/animeList'
import Header from './component/header'
import Footer from './component/footer'
import Image from 'next/image'
import { animeData } from './constants/animeList';
import { AddSquareMultiple } from 'emotion-icons/fluentui-system-filled'
import { AddSquare } from 'emotion-icons/fluentui-system-regular'

export default function Home() {
  const [data, setData] = useState(animeData)

  return (
    <div className='container' css={global.container}>
      <div className="main-container">
        <Header />
        <div className="page-container" css={global.pageContainer}>
          <div className="anime-list-header" css={animeList.header}>
            <h1 className="anime-list-title" css={global.h1}>Anime List</h1>
            <button className="bulk-add" css={global.primaryButton}>
              <p className="bulk-add-title" css={global.primaryButtonTitle}>Collection Cart</p>
              <AddSquareMultiple className="bulk-add-icon" css={global.primaryButtonIcon}/>
            </button>
          </div>
          <div className="anime-list-container" css={animeList.container}>
            { data && data.page.media && data.page.media.length > 0 && data.page.media.map((anime, index) => (
              <div className="anime-card" key={index} css={animeList.card}>
                <Image src={anime.coverImage.large} alt="anime cover" className="anime-cover" width={240} height={320} css={animeList.coverImage} placeholder="blur" blurDataURL='/cover-placeholder.png'/>
                <div className="anime-card-button" css={animeList.cardButton}>
                  <AddSquare className="bulk-add-icon" css={animeList.buttonIcon}/>
                </div>
                <div className="anime-card-label" css={animeList.cardLabel}>
                  <h3 className="anime-title" css={animeList.title}>{anime.title.romaji}</h3>
                  <h4 className="anime-description" css={animeList.description}>{`${anime.startDate.year}, ${anime.genres[0] ?? ''}`}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
