/** @jsxRuntime classic */
/** @jsx jsx */
import { createStyles } from './createStyles'
import { colours } from './colours'
import { mq } from './mediaqueries'

export const collection = createStyles({
  container: {
    display: 'grid',
     gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gridGap: '30px',
    marginTop: '24px',
    [mq[0]]: {
       gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    },
    [mq[2]]: {
       gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
      marginTop: '32px',
    },
    [mq[3]]: {
       gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
      gridGap: '48px',
      marginTop: '40px',
    },
    [mq[5]]: {
       gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
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