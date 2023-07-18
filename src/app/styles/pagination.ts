/** @jsxRuntime classic */
/** @jsx jsx */
import { createStyles } from './createStyles'
import { colours } from './colours'
import { mq } from './mediaqueries'

export const pagination = createStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '12px',
    marginTop: '24px',
    marginBottom: '16px',
    [mq[2]]: {
      marginTop: '40px',
    }
  },
  page: {
    position: 'relative',
    display: 'inline-flex',
    alignItem: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    textDecoration: 'none',
    fontWeight: '600',
    color: colours.white[0],
    fontSize: '10px',
    width: '20px',
    height: '20px',
    lineHeight: '20px',
    textAlign: 'center',
    '&:hover': {
      color: colours.primary,
    },
    '&:focus': {
      color: colours.primary,
    },
    [mq[0]]: {
      fontSize: '12px',
      width: '24px',
      height: '24px',
      lineHeight: '24px',
    },
    [mq[2]]: {
      fontSize: '16px',
      width: '36px',
      height: '36px',
      lineHeight: '36px',
    }
  },
  pageActive: {
    position: 'relative',
    display: 'inline-flex',
    alignItem: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    textDecoration: 'none',
    fontWeight: '600',
    color: colours.white[0],
    fontSize: '10px',
    width: '20px',
    height: '20px',
    lineHeight: '20px',
    textAlign: 'center',
    backgroundColor: colours.primary,
    borderRadius: '4px',
    [mq[0]]: {
      fontSize: '12px',
      width: '24px',
      height: '24px',
      lineHeight: '24px',
    },
    [mq[2]]: {
      fontSize: '16px',
      width: '36px',
      height: '36px',
      lineHeight: '36px',
    }
  },
  pageDisabled: {
    position: 'relative',
    display: 'inline-flex',
    cursor: 'default',
    textDecoration: 'none',
    fontWeight: '600',
    color: colours.black[0],
    fontSize: '10px',
    width: '20px',
    height: '20px',
    lineHeight: '20px',
    textAlign: 'center',
    [mq[0]]: {
      fontSize: '12px',
      width: '24px',
      height: '24px',
      lineHeight: '24px',
    },
    [mq[2]]: {
      fontSize: '16px',
      width: '36px',
      height: '36px',
      lineHeight: '36px',
    }
  }
})