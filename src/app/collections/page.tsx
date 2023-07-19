/** @jsxRuntime classic */
/** @jsx jsx */
"use client";
import { jsx } from '@emotion/react'
import React, { useState, useEffect } from 'react'
import { global } from '../styles/global'
import { collectionList } from '../styles/collectionList'
import Header from '../component/header'
import Footer from '../component/footer'
import ModalName from '../component/modalName'
import ModalRemove from '../component/modalRemove';
import CollectionCard from '../component/collectionCard'
import { FolderAdd } from 'emotion-icons/fluentui-system-filled'
import { Collection } from '../utils/collection';

export default function Home() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const placeholderCollectionToRemove = {
    id: -1,
    title: 'dummy',
    cover: '',
    animeList: [],
  }
  const [collectionToRemove, setCollectionToRemove] = useState<Collection>(placeholderCollectionToRemove)
  const [openModalName, setOpenModalName] = useState(false)
  const [openModalRemove, setOpenModalRemove] = useState(false)

  const toggleOpenModalName = () => {
    setOpenModalName(!openModalName)
  }

  const toggleOpenModalRemove = () => {
    if(openModalRemove) setCollectionToRemove(placeholderCollectionToRemove)
    setOpenModalRemove(!openModalRemove)
  }

  const clickModalRemove = (collection : Collection) => {
    setCollectionToRemove(collection)
    toggleOpenModalRemove()
  }

  const refreshData = () => {
    setLoading(true)
    const collection = JSON.parse(localStorage.getItem('collectionList') || '[]')
    setData(collection)
    setLoading(false)
  }

  useEffect(() => {
    refreshData()
  }, []);

  return (
    <div className='container' css={global.container}>
      <div className="main-container">
        <Header />
        <div className="page-container" css={global.pageContainer}>
          <div className="collection-list-header" css={collectionList.header}>
            <h1 className="collection-list-title" css={global.h1}>My Collections</h1>
            <button className="create-collection" css={global.primaryButton} onClick={toggleOpenModalName}>
              <p className="create-collection-title" css={global.primaryButtonTitle}>Create New Collection</p>
              <FolderAdd className="create-collection-icon" css={global.primaryButtonIcon}/>
            </button>
          </div>
          { loading && <div className="loader" css={global.loading}></div> }
          { !loading && <div className="collection-list-container" css={collectionList.container}>
            { data && data.length > 0 && data.map((collection, index) => (
              <CollectionCard 
                collection={collection}
                showRemove={true}
                index={index}
                key={index}
                setRemoveCollection={() => clickModalRemove(collection)}
              />
            ))}
          </div>}
          { !loading && data && data.length <= 0 &&
            <div className="error-page-container" css={global.errorContainer}>
              <h1 className="errorTitle" css={global.errorTitle}>No Collection Found</h1>
              <p className="errorTitle" css={global.errorDesc}><a className="clickable" css={global.errorDescClick}>Create new collection </a>to get started</p>
            </div>
          }
        </div>
        { !loading && 
        <ModalName 
          open={openModalName}
          toggleOpen={toggleOpenModalName}
          refresh={refreshData}
          collectionId={-1}
        /> }
        { !loading && <ModalRemove
          open={openModalRemove}
          toggleOpen={toggleOpenModalRemove}
          refresh={refreshData}
          collection={collectionToRemove}
        />}
      </div>
      <Footer />
    </div>
  )
}
