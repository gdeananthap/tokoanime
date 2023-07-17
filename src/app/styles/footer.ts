/** @jsxRuntime classic */
/** @jsx jsx */
import { createStyles } from './createStyles'
import { colours } from './colours'
import { mq } from './mediaqueries'

export const footer = createStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px 16px',
    width: 'calc(100% - 32px)',
    borderTop: '2px solid',
    borderTopColor: colours.black[50],
    position: 'relative',
    bottom: 0,
    [mq[2]]: {
      padding: '8px 20px',
      width: 'calc(100% - 40px)',
    },
    [mq[3]]: {
      padding: '8px 24px',
      width: 'calc(100% - 48px)',
    }
  },
  text: {
    color: colours.white[0],
    fontSize: '10px',
    fontWeight: '500',
    textAlign: 'center',
    [mq[2]]: {
      fontSize: '16px',
    },
    margin: 0,
  },
  textGreen: {
    color: colours.primary,
  }
})