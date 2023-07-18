/** @jsxRuntime classic */
/** @jsx jsx */
"use client";
import { jsx } from '@emotion/react'
import { useSearchParams } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { global } from './styles/global'
import { animeList } from './styles/animeList'
import Header from './component/header'
import Footer from './component/footer'
import AnimeCard from './component/animeCard'
import Pagination from './component/pagination'
import { animeData } from './constants/animeData';
import { AddSquareMultiple } from 'emotion-icons/fluentui-system-filled'

export default function Home() {
  const searchParams = useSearchParams()
  const [data, setData] = useState(animeData)
  const [currentPage, setCurrentPage] = useState<any>(1);

  useEffect(() => {
    const page = searchParams.get('page') || 1;
    setCurrentPage(page)
  }, [searchParams]);


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
              <AnimeCard 
                anime={anime}
                key={index}
              />
            ))}
          </div>
          <Pagination
            currentPage={parseInt(currentPage)}
            lastPage={animeData.page.pageInfo.lastPage}
            maxLength={7}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}
