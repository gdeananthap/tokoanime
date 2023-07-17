/** @jsxRuntime classic */
/** @jsx jsx */
"use client";
import { jsx } from '@emotion/react'
import PageItem from './pageItem';
import { useRouter } from 'next/navigation'
import React, { MouseEvent } from 'react'
import { pagination } from '../styles/pagination';
import { createPaginationArray } from '../utils/createPaginationArray';

export type Props = {
  currentPage: number;
  lastPage: number;
  maxLength: number;
};

export default function Pagination({
  currentPage,
  lastPage,
  maxLength,
}: Props) {
  const router = useRouter()
  const pageNums = createPaginationArray(currentPage, lastPage, maxLength)

  const setCurrentPage = (page: number, event: MouseEvent) => {
    event.preventDefault()
    router.push(`/?page=${page}`)
  }

  return (
    <nav className="pagination" aria-label="Pagination" css={pagination.container}>
      <PageItem
        disabled={currentPage === 1}
        onClick={(event) => setCurrentPage(currentPage - 1, event)}
      >
        &lt;&lt;
      </PageItem>
      {pageNums.map((pageNum, index) => (
        <PageItem
          key={index}
          active={currentPage === pageNum}
          disabled={isNaN(pageNum)}
          onClick={(event) => setCurrentPage(pageNum, event)}
        >
          {!isNaN(pageNum) ? pageNum : '...'}
        </PageItem>
      ))}
      <PageItem
        disabled={currentPage === lastPage}
        onClick={(event) => setCurrentPage(currentPage + 1, event)}
      >
        &gt;&gt;
      </PageItem>
    </nav>
  );
}