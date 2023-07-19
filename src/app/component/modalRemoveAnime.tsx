/** @jsxRuntime classic */
/** @jsx jsx */
"use client";
import { jsx } from '@emotion/react'
import React, { useState, useEffect } from 'react'
import { modal } from '../styles/modal'
import { Close } from 'emotion-icons/evaicons-solid'
import { Collection, removeAnimeInCollection } from '../utils/collection';
import { Anime } from '../utils/anime';

type Props = {
  open: boolean;
  toggleOpen: () => void;
  refresh: () => void;
  collection: Collection;
  anime: Anime;
};

export default function ModalRemoveAnime({ 
  open, 
  toggleOpen,
  refresh,
  collection,
  anime
} : Props) {

  const [collectionName, setCollectionName] = useState(collection.title)
  const [animeName, setAnimeName] = useState(anime.title.romaji)

  const remove = () => {
    removeAnimeInCollection(collection.id, anime.id)
    refresh()
    setCollectionName('')
    toggleOpen()
  }

  useEffect(() => {
    setCollectionName(collection.title)
    setAnimeName(anime.title.romaji)
  }, [anime.title.romaji, collection.title]);

  return (
    <div>
      { open &&
        <div className="modal-remove-anime">
          <div className="modal-remove-anime-background" css={modal.background} onClick={toggleOpen}/>
          <div className="modal-remove-anime-container" css={modal.modalContainer}>
            <div className="modal-remove-anime-header" css={modal.header}>
              <h2 className="modal-remove-anime-title" css={modal.title}>Remove Anime</h2>
              <div className='modal-remove-anime-icon' css={modal.iconContainer} onClick={toggleOpen}>
                <Close css={modal.icon}/>
              </div>
            </div>
            <div className="modal-remove-anime-body" css={modal.body}>
              <p className="modal-remove-anime-body-title" css={modal.bodyTitle}>Are you sure you want to remove <span className="body-title-green" css={modal.bodyTitleGreen}>{`“${animeName}”`}</span> collection from the {collectionName}?</p>
            </div>
            <div className="modal-remove-anime-footer" css={modal.footer}>
              <button className="create-button" css={modal.primaryButton} onClick={remove}>
                <p className="create-button-title" css={modal.buttonTitle}>Yes</p>
              </button>
              <button className="cancel" css={modal.secondaryButton} onClick={toggleOpen}>
                <p className="create-button-title" css={modal.buttonTitle}>Cancel</p>
              </button>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
