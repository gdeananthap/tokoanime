/** @jsxRuntime classic */
/** @jsx jsx */
"use client";
import { jsx } from '@emotion/react'
import React, { useState, useEffect } from 'react'
import { global } from '../styles/global'
import { modal } from '../styles/modal'
import { Close } from 'emotion-icons/evaicons-solid'
import { FolderAdd } from 'emotion-icons/fluentui-system-filled'
import { Delete } from 'emotion-icons/material'
import { Collection, bulkAddAnimeToCollection, createCollection, getAllCollection, } from '../utils/collection';
import { Anime, getBulkAnimeList, removeAnimeFromList } from '../utils/anime';

type Props = {
  open: boolean;
  toggleOpen: () => void;
};

export default function ModalBulkAddAnime({ 
  open, 
  toggleOpen,
} : Props) {

  const [animeList, setAnimeList] = useState<Anime[]>([])
  const [collections, setCollections] = useState<Collection[]>([])

  const bulkAddAnime = (collectionId: number) => {
    bulkAddAnimeToCollection(collectionId, animeList)
    refresh()
    toggleOpen()
  }

  const generateCollection = () => {
    createCollection('')
    refresh()
  }

  const removeAnime = (animeId: number) => {
    removeAnimeFromList(animeId)
    refresh()
  }
  
  const refresh = () => {
    const collectionList = getAllCollection()
    setCollections(collectionList)
    const animeList = getBulkAnimeList()
    setAnimeList(animeList)
  }

  useEffect(() => {
    refresh()
  }, [open])

  return (
    <div>
      { open &&
        <div className="modal-add-anime">
          <div className="modal-add-anime-background" css={modal.background} onClick={toggleOpen}/>
          <div className="modal-add-anime-container-add-anime" css={modal.modalContainerBulkAddAnime}>
            <div className="modal-add-anime-header" css={modal.header}>
              <h2 className="modal-add-anime-title" css={modal.title}>Bulk Add to Collection</h2>
              <div className='modal-add-anime-icon' css={modal.iconContainer} onClick={toggleOpen}>
                <Close css={modal.icon}/>
              </div>
            </div>
            <div className="modal-add-anime-body-add-anime" css={modal.bodyAddAnime}>
              <div className="modal-anime-list-container" css={modal.availableCollectionContainerSmall}>
                <div className="anime-list-title" css={modal.availableTitle}>Anime List</div>
                { animeList.length > 0 &&
                  <div className="anime-list-container" css={modal.animeListContainer}>
                    { animeList.map((anime, index) => (
                      <div className="anime-container" key={index} css={modal.animeContainer}>
                        <div className="anime-title-container" css={modal.animeTitleContainer}>
                          <h1 className="anime-title" css={modal.animeTitle}>{anime.title.romaji}</h1>
                        </div>
                        <button className="collection-button" css={modal.deleteAnimeButton} onClick={() => removeAnime(anime.id)}>
                          <Delete className="delete-icon" css={modal.deleteAnimeIcon}/>
                        </button>
                      </div>

                    ))}
                  </div>
                }
                { animeList.length === 0 &&
                  <div className="no-available-collection-container" css={global.errorContainer}>
                    <p className="errorTitle" css={global.errorTitleSmall}>Sorry, you don’t have anime in your cart</p>
                  </div>
                }
              </div>
              <div className="modal-divider" css={modal.divider} />
              <button className="bulk-add" css={modal.buttonNewCollection} onClick={generateCollection}>
                <p className="bulk-add-title" css={modal.buttonNewCollectionTitle}>Create New Collection</p>
                <FolderAdd className="bulk-add-icon" css={modal.buttonNewIcon}/>
              </button>            
              <div className="modal-available-collection-container" css={modal.availableCollectionContainerSmall}>
                <div className="available-collection-title" css={modal.availableTitle}>Available Collection</div>
                { collections.length > 0 &&
                  <div className="available-collection-container" css={modal.collectionButtonContainer}>
                    { collections.map((collection, index) => (
                      <button key={index} className="collection-button" css={modal.collectionButton} onClick={() => bulkAddAnime(collection.id)}>
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
