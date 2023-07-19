/** @jsxRuntime classic */
/** @jsx jsx */
"use client";
import { jsx } from '@emotion/react'
import React, { useState, useEffect } from 'react'
import { global } from '../styles/global'
import { modal } from '../styles/modal'
import { Close } from 'emotion-icons/evaicons-solid'
import { FolderAdd } from 'emotion-icons/fluentui-system-filled'
import { Collection, addAnimeToCollection, createCollection, getAllCollection, } from '../utils/collection';
import { Anime } from '../utils/anime';

type Props = {
  open: boolean;
  toggleOpen: () => void;
  refresh: () => void;
  anime: Anime,
};

export default function ModalAddAnime({ 
  open, 
  toggleOpen,
  refresh,
  anime
} : Props) {

  const [collections, setCollections] = useState<Collection[]>([])

  const addAnime = (collectionId: number) => {
    addAnimeToCollection(collectionId, anime)
    refresh()
  }

  const generateCollection = () => {
    createCollection('')
    const collectionList = getAllCollection()
    setCollections(collectionList)
  }

  useEffect(() => {
    const collectionList = getAllCollection()
    setCollections(collectionList)
  }, [])

  return (
    <div>
      { open &&
        <div className="modal-add-anime">
          <div className="modal-add-anime-background" css={modal.background} onClick={toggleOpen}/>
          <div className="modal-add-anime-container-add-anime" css={modal.modalContainerAddAnime}>
            <div className="modal-add-anime-header" css={modal.header}>
              <h2 className="modal-add-anime-title" css={modal.title}>Add to Collection</h2>
              <div className='modal-add-anime-icon' css={modal.iconContainer} onClick={toggleOpen}>
                <Close css={modal.icon}/>
              </div>
            </div>
            <div className="modal-add-anime-body-add-anime" css={modal.bodyAddAnime}>
              <button className="bulk-add" css={modal.buttonNewCollection} onClick={generateCollection}>
                <p className="bulk-add-title" css={modal.buttonNewCollectionTitle}>Create New Collection</p>
                <FolderAdd className="bulk-add-icon" css={modal.buttonNewIcon}/>
              </button>
              <div className="modal-divider" css={modal.divider} />
              <div className="modal-available-collection-container" css={modal.availableCollectionContainer}>
                <div className="available-collection-title" css={modal.availableTitle}>Available Collection</div>
                { collections.length > 0 &&
                  <div className="available-collection-container" css={modal.collectionButtonContainer}>
                    { collections.map((collection, index) => (
                      <button key={index} className="collection-button" css={modal.collectionButton} onClick={() => addAnime(collection.id)}>
                        <h1 className="bulk-add-title" css={modal.buttonNewCollectionTitle}>{collection.title}</h1>
                      </button>
                    ))}
                  </div>
                }
                { collections.length === 0 &&
                  <div className="no-available-collection-container" css={global.errorContainer}>
                    <p className="errorTitle" css={global.errorTitleSmall}>Sorry, you don’t have any collections</p>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
