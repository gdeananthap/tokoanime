/** @jsxRuntime classic */
/** @jsx jsx */
"use client";
import { jsx } from '@emotion/react'
import React, { useState } from 'react'
import { modal } from '../styles/modal'
import { Close } from 'emotion-icons/evaicons-solid'
import { createCollection } from '../utils/collection';

type Props = {
  open: boolean;
  toggleOpen: () => void;
  refresh: () => void;
  collectionName?: string;
};

export default function ModalName({ 
  open, 
  toggleOpen,
  refresh,
  collectionName 
} : Props) {

  const [name, setName] = useState(collectionName || '')

  const create = () => {
    createCollection(name)
    refresh()
    setName('')
    toggleOpen()
  }

  return (
    <div>
      { open &&
        <div className="modal-name">
          <div className="modal-name-background" css={modal.background} onClick={toggleOpen}/>
          <div className="modal-name-container" css={modal.modalContainer}>
            <div className="modal-name-header" css={modal.header}>
              <h2 className="modal-name-title" css={modal.title}>Create New Collection.</h2>
              <div className='modal-name-icon' css={modal.iconContainer} onClick={toggleOpen}>
                <Close css={modal.icon}/>
              </div>
            </div>
            <div className="modal-name-body" css={modal.body}>
              <input type="text" name="name" placeholder="Enter a collection name..." css={modal.input} value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="modal-name-footer" css={modal.footer}>
              <button className="create-button" css={modal.primaryButton} onClick={create}>
                <p className="create-button-title" css={modal.buttonTitle}>Create</p>
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