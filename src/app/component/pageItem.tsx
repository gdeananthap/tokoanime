/** @jsxRuntime classic */
/** @jsx jsx */
"use client";
import { jsx } from '@emotion/react'
import { ReactNode } from 'react';
import { pagination } from '../styles/pagination';


export type Props = {
  active? : boolean;
  disabled?: boolean;
  children: ReactNode;
  onClick: (event: any) => void;
}

export default function PageItem({
  active,
  disabled,
  children,
  onClick,
  ...otherProps
}: Props) {
  const cssObj = active ? pagination.pageActive : disabled ? pagination.pageDisabled : pagination.page

  if (disabled) {
    return <span className='page-item' css={cssObj}>{children}</span>;
  }

  return (
    <a
      className='page-item'
      css={cssObj}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </a>
  );
}