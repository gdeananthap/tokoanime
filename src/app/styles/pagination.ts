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
    fontSize: '12px',
    fontWeight: '600',
    color: colours.white[0],
    width: '18px',
    height: '18px',
    '&:hover': {
      color: colours.primary,
    },
    '&:focus': {
      color: colours.primary,
    },
    [mq[2]]: {
      fontSize: '16px',
      width: '22px',
      height: '22px',
    }
  },
  pageActive: {
    position: 'relative',
    display: 'inline-flex',
    alignItem: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    textDecoration: 'none',
    fontSize: '12px',
    fontWeight: '600',
    color: colours.white[0],
    width: '18px',
    height: '18px',
    backgroundColor: colours.primary,
    borderRadius: '4px',
    [mq[2]]: {
      fontSize: '16px',
      width: '22px',
      height: '22px',
    }
  },
  pageDisabled: {
    position: 'relative',
    display: 'inline-flex',
    cursor: 'default',
    textDecoration: 'none',
    fontSize: '12px',
    fontWeight: '600',
    color: colours.black[0],
    width: '18px',
    height: '18px',
    [mq[2]]: {
      fontSize: '16px',
      width: '22px',
      height: '22px',
    }
  }
})