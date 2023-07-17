/** @jsxRuntime classic */
/** @jsx jsx */
"use client";
import { jsx } from '@emotion/react'
import { global } from './styles/global'
import Header from './component/header'
import Footer from './component/footer'

export default function Home() {
  return (
    <div className='container' css={global.container}>
      <Header />
      <Footer />
    </div>
  )
}
