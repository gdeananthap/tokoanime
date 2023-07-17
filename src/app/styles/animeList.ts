/** @jsxRuntime classic */
/** @jsx jsx */
import { createStyles } from './createStyles'
import { colours } from './colours'
import { mq } from './mediaqueries'

export const animeList = createStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    gridGap: '30px',
    marginTop: '24px',
    [mq[0]]: {
      gridTemplateColumns: 'auto auto auto',
    },
    [mq[2]]: {
      gridTemplateColumns: 'auto auto auto auto',
      marginTop: '32px',
    },
    [mq[3]]: {
      gridTemplateColumns: 'auto auto auto auto auto',
      gridGap: '48px',
      marginTop: '40px',
    },
    [mq[5]]: {
      gridTemplateColumns: 'auto auto auto auto auto auto',
    },
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card: {
    position: 'relative',
    width: '100%',
    height: '180px',
    borderRadius: '10px',
    [mq[0]]: {
      height: '160px',
    },
    [mq[2]]: {
      height: '240px',
    },
    [mq[3]]: {
      height: '280px',
    },
    [mq[4]]: {
      height: '320px',
    },
    [mq[5]]: {
      height: '400px',
    },
  },
  cardButton: {
    position: 'absolute',
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: '0px 10px 0px 0px',
    top: 0,
    right: 0,
    [mq[2]]: {
      height: '24px',
      width: '24px',
    },
    [mq[4]]: {
      height: '32px',
      width: '32px',
    },
  },
  buttonIcon: {
    height: '12px',
    width: '12px',
    color: colours.white[0],
    [mq[2]]: {
      height: '16px',
      width: '16px',
    },
    [mq[4]]: {
      height: '20px',
      width: '20px',
    }
  },
  coverImage: {
    width: '100%',
    height: '180px',
    borderRadius: '10px',
    objectFit: 'cover',
    [mq[0]]: {
      height: '160px',
    },
    [mq[2]]: {
      height: '240px',
    },
    [mq[3]]: {
      height: '280px',
    },
    [mq[4]]: {
      height: '320px',
    },
    [mq[5]]: {
      height: '400px',
    },
  },
  cardLabel: {
    position: 'absolute',
    width: 'calc(100% - 8px)',
    height: '42px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: '4px',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: '0px 0px 10px 10px',
    padding: '0px 4px',
    bottom: 0,
    [mq[2]]: {
      height: '64px',
      padding: '0px 8px',
      width: 'calc(100% - 16px)',
    },
    [mq[5]]: {
      height: '72px',
      padding: '0px 12px',
      width: 'calc(100% - 24px)',
    },
  },
  title: {
    fontSize: '12px',
    fontWeight: '800',
    color: colours.white[0],
    margin: 0,
    textAlign: 'left',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    [mq[2]]: {
      fontSize: '16px',
    },
    [mq[5]]: {
      fontSize: '20px',
    },
  },
  description: {
    fontSize: '10px',
    fontWeight: '400',
    color: colours.white[0],
    margin: 0,
    textAlign: 'left',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    [mq[2]]: {
      fontSize: '12px',
    },
    [mq[5]]: {
      fontSize: '16px',
    },
  }
})