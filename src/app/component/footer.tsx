/** @jsxRuntime classic */
/** @jsx jsx */
"use client";
import { jsx } from '@emotion/react'
import { footer } from '../styles/footer';

export default function Footer() {
  return (
    <div className='footer-container' css={footer.container}>
      <p className="footer-text" css={footer.text}>Made by <span css={footer.textGreen}>Gde Anantha Priharsena</span> for [Technical Test] <span  css={footer.textGreen}>Software Engineer - Web Platform</span></p>
    </div>
  )
}
