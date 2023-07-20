/** @jsxRuntime classic */
/** @jsx jsx */
"use client";
import { jsx } from '@emotion/react'
import React, { useState, useEffect } from 'react'
import { modal } from '../styles/modal'
import { Close } from 'emotion-icons/evaicons-solid'
import { createCollection, editCollection, isCollectionNameHasSpecialChar, isCollectionNameUnique } from '../utils/collection';

type Props = {
  open: boolean;
  toggleOpen: () => void;
  refresh: () => void;
  collectionId: number;
  collectionName?: string;
};

export default function ModalName({ 
  open, 
  toggleOpen,
  refresh,
  collectionId,
  collectionName 
} : Props) {

  const [name, setName] = useState(collectionName || '')
  const [error, setError] = useState('')

  const create = () => {
    createCollection(name)
    refresh()
    setName('')
    toggleOpen()
  }

  const edit = () => {
    editCollection(collectionId, name)
    refresh()
    setName('')
    toggleOpen()
  }

  const closeModal = () => {
    setName('')
    setError('')
    toggleOpen()
  }

  const setNameValue = (name : string) => {
    setName(name)
    if (isCollectionNameUnique(name)) {
      if (isCollectionNameHasSpecialChar(name)) {
        setError('Collection name should not have special character')
      } else {
        setError('')
      }
    } else {
      if (collectionName && name === collectionName) {
        setError('')
      } else {
        setError('Collection name must unique')
      }
    }
  }

  useEffect(() => {
    setName(collectionName || '')
  }, [collectionName]);

  return (
    <div>
      { open &&
        <div className="modal-name">
          <div className="modal-name-background" css={modal.background} onClick={closeModal}/>
          <div className="modal-name-container" css={modal.modalContainer}>
            <div className="modal-name-header" css={modal.header}>
              <h2 className="modal-name-title" css={modal.title}>{collectionName ? 'Edit Collection Name' : 'Create New Collection'}</h2>
              <div className='modal-name-icon' css={modal.iconContainer} onClick={closeModal}>
                <Close css={modal.icon}/>
              </div>
            </div>
            <div className="modal-name-body" css={modal.body}>
              <input type="text" name="name" placeholder="Enter a collection name..." css={modal.input} value={name} onChange={(e) => setNameValue(e.target.value)}/>
              { Boolean(error) && <p className="modal-error" css={modal.errorMessage}>{error}</p>}
            </div>
            <div className="modal-name-footer" css={modal.footer}>
              <button disabled={Boolean(error)} className="create-button" css={modal.primaryButton} onClick={collectionName ? edit : create}>
                <p className="create-button-title" css={modal.buttonTitle}>{collectionName ? 'Save' : 'Create'}</p>
              </button>
              <button className="cancel" css={modal.secondaryButton} onClick={closeModal}>
                <p className="create-button-title" css={modal.buttonTitle}>Cancel</p>
              </button>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
