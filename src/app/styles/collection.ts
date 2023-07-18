/** @jsxRuntime classic */
/** @jsx jsx */
import { createStyles } from './createStyles'
import { colours } from './colours'
import { mq } from './mediaqueries'

export const collection = createStyles({
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
})