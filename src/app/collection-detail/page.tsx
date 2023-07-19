/** @jsxRuntime classic */
/** @jsx jsx */
"use client";
import { jsx } from '@emotion/react'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState, useEffect, useCallback } from 'react'
import { global } from '../styles/global'
import { animeList } from '../styles/animeList'
import Header from '../component/header'
import Footer from '../component/footer'
import AnimeCard from '../component/animeCard'
import ModalName from '../component/modalName'
import { Edit } from 'emotion-icons/material'
import { Collection, getCollectionById } from '../utils/collection'
import { Anime } from '../utils/anime';
import ModalRemoveAnime from '../component/modalRemoveAnime';

export default function CollectionDetail() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [dataCollection, setDataCollection] = useState<Collection>({id: 1, title: 'Error', animeList: []})
  const [error, setError] = useState(true)
  const [collectionId, setCollectionId] = useState(-1)
  const [loading, setLoading] = useState(false)
  const [openModalEdit, setOpenModalEdit] = useState(false)
  const [openModalRemove, setOpenModalRemove] = useState(false)
  const placeholderAnimeToRemove = {
    id: 15,
    coverImage: {
      large: ""
    },
    bannerImage: "",
    title: {
      romaji: ""
    },
    synonyms: [],
    description: "",
    status: "",
    genres: [],
    averageScore: -1,
    startDate: {
      year: -999,
      month: -1,
      day: -1
    },
    episodes: -1,
    duration: -1,
    season: "",
    seasonYear: -999
  }
  const [animeToRemove, setAnimeToRemove] = useState<Anime>(placeholderAnimeToRemove)

  const toggleOpenModalEdit = () => {
    setOpenModalEdit(!openModalEdit)
  }

  const toggleOpenModalRemove = () => {
    setOpenModalRemove(!openModalRemove)
  }

  const clickModalRemove = (anime : Anime) => {
    setAnimeToRemove(anime)
    toggleOpenModalRemove()
  }

  const refreshData = useCallback(() => {
    setLoading(true)
    const collection = getCollectionById(collectionId)
    if (collection) {
      setDataCollection(collection)
      setError(false)
    } else {
      setError(true)
    }
    setLoading(false)
  }, [collectionId])

  useEffect(() => {
    const id = parseInt(searchParams.get('id') || '-1')
    setCollectionId(id)
    refreshData()
  }, [refreshData, searchParams]);


  const goToAnimeList = () => {
    router.push('/')
  }

  return (
    <div className='container' css={global.container}>
      <div className="main-container">
        <Header />
        { !error &&
          <div className="page-container" css={global.pageContainer}>
            <div className="anime-list-header" css={animeList.header}>
              <h1 className="anime-list-title" css={global.h1}>{dataCollection.title}</h1>
              <button className="bulk-add" css={global.primaryButton} onClick={toggleOpenModalEdit}>
                <p className="bulk-add-title" css={global.primaryButtonTitle}>Edit</p>
                <Edit className="bulk-add-icon" css={global.primaryButtonIcon}/>
              </button>
            </div>
            <div className="anime-list-container" css={animeList.container}>
              { dataCollection.animeList && dataCollection.animeList.length > 0 && dataCollection.animeList.map((anime, index) => (
                <AnimeCard 
                  anime={anime}
                  key={index}
                  showRemove={true}
                  setAddAnime={()=>{}}
                  setRemoveAnime={()=>{clickModalRemove(anime)}}
                />
              ))}
            </div>
            { dataCollection.animeList && dataCollection.animeList.length <= 0 &&
              <div className="error-page-container" css={global.errorContainer}>
                <h1 className="errorTitle" css={global.errorTitle}>No Anime Found</h1>
                <p className="errorTitle" css={global.errorDesc}><a className="clickable" css={global.errorDescClick} onClick={goToAnimeList}>Explore list of anime </a>to get started</p>
              </div>
            }
          </div> 
        }
        { !error && !loading && 
        <ModalName 
          open={openModalEdit}
          toggleOpen={toggleOpenModalEdit}
          refresh={refreshData}
          collectionId={dataCollection.id}
          collectionName={dataCollection.title}
        /> }
        { !error && !loading && 
        <ModalRemoveAnime 
          open={openModalRemove}
          toggleOpen={toggleOpenModalRemove}
          refresh={refreshData}
          collection={dataCollection}
          anime={animeToRemove}
        /> }
        { error &&
          <div className="page-container" css={global.pageContainer}>
            <div className="error-page-container" css={global.errorContainer}>
              <h1 className="errorTitle" css={global.errorTitle}>Collection Not Found</h1>
            </div>
          </div>
        }
      </div>
      <Footer />
    </div>
  )
}
