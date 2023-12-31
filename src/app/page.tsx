/** @jsxRuntime classic */
/** @jsx jsx */
"use client";
import { jsx } from '@emotion/react'
import { useSearchParams } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { global } from './styles/global'
import { animeList } from './styles/animeList'
import Header from './component/header'
import Footer from './component/footer'
import AnimeCard from './component/animeCard'
import Pagination from './component/pagination'
import { AddSquareMultiple } from 'emotion-icons/fluentui-system-filled'
import { GET_ANIME_LIST, createVariables} from './api/getAnimeList'
import { Anime, addAnimeToAnimeList } from './utils/anime';
import ModalBulkAddAnime from './component/modalBulkAddAnime';

export default function Home() {
  const searchParams = useSearchParams()
  const [currentPage, setCurrentPage] = useState<any>(1);
  const [search, setSearch] = useState<string>('');
  const [openModalBulk, setOpenModalBulk] = useState<boolean>(false);
  const [showSnackbar, setShowSnackbar] = useState<boolean>(false);

  const { loading, data } = useQuery(GET_ANIME_LIST, {
    variables: createVariables(currentPage, search),
  });

  const toggleOpenModalBulk = () => {
    setOpenModalBulk(!openModalBulk)
  }

  const addAnimeToCart = (anime: Anime) => {
    addAnimeToAnimeList(anime)
    console.log(anime)
    setShowSnackbar(true)
    console.log(showSnackbar)
    setTimeout(() => setShowSnackbar(false), 3000);
  }

  useEffect(() => {
    const page = searchParams.get('page') || 1
    const search = searchParams.get('search') || ''
    setCurrentPage(page)
    setSearch(search)
  }, [searchParams]);

  return (
    <div className='container' css={global.container}>
      <div className="main-container">
        <Header 
          search={search}
        />
        <div className="page-container" css={global.pageContainer}>
          <div className="anime-list-header" css={animeList.header}>
            <h1 className="anime-list-title" css={global.h1}>Anime List</h1>
            <button className="bulk-add" css={global.primaryButton}>
              <p className="bulk-add-title" css={global.primaryButtonTitle} onClick={toggleOpenModalBulk}>Collection Cart</p>
              <AddSquareMultiple className="bulk-add-icon" css={global.primaryButtonIcon}/>
            </button>
          </div>
          { loading && <div className="loader" css={global.loading}></div> }
          { !loading && <div className="anime-list-container" css={animeList.container}>
            {  data && data.Page.media && data.Page.media.length > 0 && data.Page.media.map((anime, index) => (
              <AnimeCard 
                anime={anime}
                key={index}
                showRemove={false}
                setAddAnime={()=>{addAnimeToCart(anime)}}
                setRemoveAnime={()=>{}}
              />
            ))}
          </div>}
          {!loading && 
          <Pagination
            currentPage={parseInt(currentPage)}
            lastPage={data ? data.Page.pageInfo.lastPage : 1}
            maxLength={7}
            search={search}
          />}
        </div>
        { !loading && 
        <ModalBulkAddAnime 
          open={openModalBulk}
          toggleOpen={toggleOpenModalBulk}
        /> }
        <div className='snackbar' css={showSnackbar ? global.snackbarShow : global.snackbarHidden}>Succesfully add anime to collection cart</div>
      </div>
      <Footer />
    </div>
  )
}
