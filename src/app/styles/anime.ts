/** @jsxRuntime classic */
/** @jsx jsx */
import { createStyles } from './createStyles'
import { colours } from './colours'
import { mq } from './mediaqueries'

export const anime = createStyles({
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
    width: 'calc(100% - 16px)',
    padding: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '8px',
    marginTop: '16px',
    background: colours.black[50],
    border: '1px solid',
    borderColor: colours.black[20],
    borderRadius: '10px',
    [mq[2]]: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'center',
      gap: '40px',
      width: 'calc(100% - 32px)',
      padding: '16px',
    },
  },
  banner: {
    width: '100%',
    height: '160px',
    borderRadius: '5px',
    objectFit: 'cover',
    marginTop: '24px',
    [mq[0]]: {
      height: '180px',
    },
    [mq[2]]: {
      height: '260px',
    },
    [mq[3]]: {
      height: '320px',
    },
    [mq[4]]: {
      height: '400px',
    },
    [mq[5]]: {
      height: '480px',
    },
  },
  cover: {
    width: '120px',
    height: '160px',
    borderRadius: '5px',
    objectFit: 'cover',
    [mq[2]]: {
      width: '210px',
      height: '280px',
    },
    [mq[3]]: {
      width: '225px',
      height: '300px',
    },
    [mq[4]]: {
      width: '240px',
      height: '320px',
    },
    [mq[5]]: {
      width: '270px',
      height: '360px',
    },
  },
  detailContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    [mq[2]]: {
      alignItems: 'flex-start',
      gap: '16px',
    },
  },
  detailText: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: '16px',
  },
  desc: {
    fontSize: '10px',
    fontWeight: '400',
    color: colours.white[0],
    margin: 0,
    textAlign: 'justify',
    [mq[2]]: {
      fontSize: '12px',
    },
    [mq[4]]: {
      fontSize: '14px', 
    },
    [mq[5]]: {
      fontSize: '16px',
    },
  },
  detailMore: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
    gridGap: '8px',
    [mq[3]]: {
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      gridGap: '16px',
    },
  },
  detailLeft: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: '8px',
    [mq[2]]: {
      gap: '16px',
    },
  },
  detailRight: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: '8px',
    [mq[2]]: {
      gap: '16px',
    },
  },
  detailTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: '8px',
  },
  detailLabel: {
    fontSize: '10px',
    fontWeight: '800',
    color: colours.white[0],
    margin: 0,
    [mq[2]]: {
      fontSize: '14px',
    },
    [mq[5]]: {
      fontSize: '18px',
    },
  },
  detailValue: {
    fontSize: '10px',
    fontWeight: '800',
    color: colours.primary,
    margin: 0,
    [mq[2]]: {
      fontSize: '14px',
    },
    [mq[5]]: {
      fontSize: '18px',
    },
  },
})