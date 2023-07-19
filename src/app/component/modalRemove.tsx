/** @jsxRuntime classic */
/** @jsx jsx */
"use client";
import { jsx } from '@emotion/react'
import React, { useState, useEffect } from 'react'
import { modal } from '../styles/modal'
import { Close } from 'emotion-icons/evaicons-solid'
import { removeCollection, Collection } from '../utils/collection';

type Props = {
  open: boolean;
  toggleOpen: () => void;
  refresh: () => void;
  collection: Collection;
};

export default function ModalRemove({ 
  open, 
  toggleOpen,
  refresh,
  collection 
} : Props) {

  const [name, setName] = useState(collection.title)

  const remove = () => {
    removeCollection(collection.id)
    refresh()
    setName('')
    toggleOpen()
  }

  useEffect(() => {
    setName(collection.title)
  }, [collection]);

  return (
    <div>
      { open &&
        <div className="modal-name">
          <div className="modal-name-background" css={modal.background} onClick={toggleOpen}/>
          <div className="modal-name-container" css={modal.modalContainer}>
            <div className="modal-name-header" css={modal.header}>
              <h2 className="modal-name-title" css={modal.title}>Remove Collection</h2>
              <div className='modal-name-icon' css={modal.iconContainer} onClick={toggleOpen}>
                <Close css={modal.icon}/>
              </div>
            </div>
            <div className="modal-name-body" css={modal.body}>
              <p className="modal-name-body-title" css={modal.bodyTitle}>Are you sure you want to remove <span className="body-title-green" css={modal.bodyTitleGreen}>{`“${name}”`}</span> collection from the collection list?</p>
            </div>
            <div className="modal-name-footer" css={modal.footer}>
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
