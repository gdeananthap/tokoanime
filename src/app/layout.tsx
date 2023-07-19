/** @jsxRuntime classic */
/** @jsx jsx */
"use client";
import { jsx } from '@emotion/react'
import { global } from './styles/global';
import { Nunito_Sans } from 'next/font/google'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const nunito_sans = Nunito_Sans({ subsets: ['latin'] })

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache(),
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={nunito_sans.className} css={global.body}>
        <ApolloProvider client={client}>
          {children}
        </ApolloProvider>
      </body>
    </html>
  )
}
