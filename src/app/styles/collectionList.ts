/** @jsxRuntime classic */
/** @jsx jsx */
import { createStyles } from './createStyles'
import { colours } from './colours'
import { mq } from './mediaqueries'

export const collectionList = createStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gridGap: '30px',
    marginTop: '24px',
    [mq[0]]: {
      gridGap: '38px',
    },
    [mq[2]]: {
      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
      marginTop: '40px',
      gridGap: '60px',
    },
    [mq[3]]: {
      gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
      gridGap: '60px',
      marginTop: '40px',
    },
    [mq[4]]: {
      gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
      gridGap: '90px',
      marginTop: '40px',
    },
    [mq[5]]: {
      gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
    },
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    width: '100%',
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
    cursor: 'pointer',
    border: '1px solid',
    borderColor: colours.black[20],
    backgroundColor: colours.black[50],
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  cardEdit: {
    position: 'relative',
    width: '100%',
    height: '210px',
    borderRadius: '10px',
    cursor: 'pointer',
    border: '1px solid',
    borderColor: colours.black[20],
    backgroundColor: colours.black[50],
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    [mq[0]]: {
      height: '190px',
    },
    [mq[2]]: {
      height: '270px',
    },
    [mq[3]]: {
      height: '310px',
    },
    [mq[4]]: {
      height: '350px',
    },
    [mq[5]]: {
      height: '430px',
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
    width: '100px',
    height: '100px',
    borderRadius: '10px 10px 0px 0px',
    objectFit: 'cover',
    [mq[0]]: {
      width: '100px',
      height: '100px',
    },
    [mq[2]]: {
      width: '160px',
      height: '160px',
    },
    [mq[4]]: {
      width: '200px',
      height: '200px',
    },
    [mq[5]]: {
      width: '240px',
      height: '240px',
    },
  },
  cardLabel: {
    maxWidth: 'calc(100% - 24px)',
    height: '50px',
    padding: '24px 8px 0px',
    bottom: 0,
    [mq[2]]: {
      maxWidth: 'calc(100% - 32px)',
      height: '70px',
      padding: '24px 12px 0px',
    },
    [mq[3]]: {
      maxWidth: 'calc(100% - 36px)',
      height: '70px',
      padding: '24px 14px 0px',
    },
    [mq[5]]: {
      maxWidth: 'calc(100% - 40px)',
      height: '80px',
      padding: '24px 16px 0px',
    },
  },
  title: {
    fontSize: '12px',
    fontWeight: '800',
    color: colours.white[0],
    margin: 0,
    textAlign: 'center',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    wordBreak: 'break-word',
    maxWidth: '100%',
    [mq[0]]: {
      WebkitLineClamp: 2,
    },
    [mq[2]]: {
      fontSize: '16px',
    },
    [mq[5]]: {
      fontSize: '24px',
    },
  },
})