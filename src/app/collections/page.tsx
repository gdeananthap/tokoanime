/** @jsxRuntime classic */
/** @jsx jsx */
"use client";
import { jsx } from '@emotion/react'
import React, { useState, useEffect } from 'react'
import { global } from '../styles/global'
import { collectionList } from '../styles/collectionList'
import Header from '../component/header'
import Footer from '../component/footer'
import CollectionCard from '../component/collectionCard'
import { collectionData } from '../constants/collectionData'
import { FolderAdd } from 'emotion-icons/fluentui-system-filled'

export default function Home() {
  const [data, setData] = useState(collectionData)

  return (
    <div className='container' css={global.container}>
      <div className="main-container">
        <Header />
        <div className="page-container" css={global.pageContainer}>
          <div className="collection-list-header" css={collectionList.header}>
            <h1 className="collection-list-title" css={global.h1}>My Collections</h1>
            <button className="bulk-add" css={global.primaryButton}>
              <p className="bulk-add-title" css={global.primaryButtonTitle}>Create New Collection</p>
              <FolderAdd className="bulk-add-icon" css={global.primaryButtonIcon}/>
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
      </div>
      <Footer />
    </div>
  )
}
