/** @jsxRuntime classic */
/** @jsx jsx */
"use client";
import { jsx } from '@emotion/react'
import React, { useState } from 'react'
import { header } from '../styles/header';
import { Menu, Close } from 'emotion-icons/evaicons-solid'
import Image from 'next/image'

export default function Header() {
  const [open, setOpen] = useState(false)
  
  const toggleOpenMenu = () => {
    setOpen(!open)
  }

  return (
    <div className="header">
      <div className='header-container' css={header.container}>
        <div className="left-container" css={header.left}>
          <Image src="logo.svg" alt="tokoanime logo" className="logo" width={114} height={16} css={header.logo}/>
          <div className="item-container" css={header.itemContainer}>
            <a href="/" className="header-item" css={header.item}>Anime</a>
            <a href="/collections" className="header-item" css={header.item}>Collections</a>
          </div>
        </div>
        <div className="right-container" css={header.right}>
          <input type="text" name="search" placeholder="Find anime.." css={header.searchbar}/>
          <div className='menu' css={header.iconContainer} onClick={toggleOpenMenu}>
            { open ? 
              <Close css={header.icon}/>  :
              <Menu css={header.icon}/>
            }
          </div>
        </div>
      </div>
      {open &&
      <div className="menu">
        <div className="menu-background" css={header.menuBackground} onClick={toggleOpenMenu}/>
        <div className="menu-container" css={header.menuContainer}>
          <a href="/" className="menu-item" css={header.menuItem}>Anime</a>
          <a href="/collections" className="menu-item" css={header.menuItem}>Collections</a>
        </div>
      </div>
      }
    </div>
  )
}
