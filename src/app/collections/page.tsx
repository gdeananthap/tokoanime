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
import CollectionCard from '../component/collectionCard'
import { FolderAdd } from 'emotion-icons/fluentui-system-filled'

export default function Home() {
  const [data, setData] = useState([])
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }
  const refreshData = () => {
    const collection = JSON.parse(localStorage.getItem('collectionList') || '[]')
    setData(collection)
  }

  useEffect(() => {
    const collection = JSON.parse(localStorage.getItem('collectionList') || '[]')
    setData(collection)
  }, []);

  return (
    <div className='container' css={global.container}>
      <div className="main-container">
        <Header />
        <div className="page-container" css={global.pageContainer}>
          <div className="collection-list-header" css={collectionList.header}>
            <h1 className="collection-list-title" css={global.h1}>My Collections</h1>
            <button className="create-collection" css={global.primaryButton} onClick={toggleOpen}>
              <p className="create-collection-title" css={global.primaryButtonTitle}>Create New Collection</p>
              <FolderAdd className="create-collection-icon" css={global.primaryButtonIcon}/>
            </button>
          </div>
          <div className="collection-list-container" css={collectionList.container}>
            { data && data.length > 0 && data.map((collection, index) => (
              <CollectionCard 
                collection={collection}
                showRemove={true}
                index={index}
                key={index}
              />
            ))}
          </div>
          { data && data.length <= 0 &&
            <div className="error-page-container" css={global.errorContainer}>
              <h1 className="errorTitle" css={global.errorTitle}>No Collection Found</h1>
              <p className="errorTitle" css={global.errorDesc}><a className="clickable" css={global.errorDescClick}>Create new collection </a>to get started</p>
            </div>
          }
        </div>
        <ModalName 
          open={open}
          toggleOpen={toggleOpen}
          refresh={refreshData}
        />
      </div>
      <Footer />
    </div>
  )
}
