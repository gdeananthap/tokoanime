/** @jsxRuntime classic */
/** @jsx jsx */
import { createStyles } from './createStyles'
import { colours } from './colours'
import { mq } from './mediaqueries'

export const global = createStyles({
  body: {
    margin: 0,
    width: '100vw',
    height: '100vh'
  },
  container: {
    backgroundColor: colours.black[70],
    minWidth: '100%',
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  mainContainer: {
    backgroundColor: colours.black[70],
    minWidth: '100%',
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '24px 16px 40px',
    width: 'calc(100% - 32px)',
    [mq[2]]: {
      padding: '24px 20px 40px',
      width: 'calc(100% - 40px)',
    },
    [mq[3]]: {
      padding: '24px 24px 40px',
      width: 'calc(100% - 48px)',
    }
  },
  errorContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginTop: '24px',
  },
  h1: {
    fontSize: '20px',
    fontWeight: '800',
    color: colours.white[0],
    margin: 0,
    [mq[0]]: {
      fontSize: '24px',
    },
    [mq[2]]: {
      fontSize: '40px',
    }
  },
  h2: {

  },
  h3: {
    fontSize: '12px',
    fontWeight: '800',
    color: colours.white[0],
    margin: 0,
    [mq[2]]: {
      fontSize: '16px',
    }
  },
  h4: {
    fontSize: '10px',
    fontWeight: '400',
    color: colours.white[0],
    margin: 0,
    [mq[2]]: {
      fontSize: '12px',
    }
  },
  errorTitle: {
    fontSize: '20px',
    fontWeight: '800',
    color: colours.white[0],
    margin: 0,
    textAlign: 'center',
    [mq[2]]: {
      fontSize: '24px',
    },
    [mq[5]]: {
      fontSize: '28px',
    }
  },
  errorDesc: {
    fontSize: '16px',
    fontWeight: '600',
    color: colours.white[0],
    margin: 0,
    textAlign: 'center',
    [mq[2]]: {
      fontSize: '20px',
    },
    [mq[5]]: {
      fontSize: '24px',
    }
  },
  errorDescClick: {
    cursor: 'pointer',
    textDecoration: 'none',
    color: colours.primary,
  },
  primaryButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '12px',
    backgroundColor: colours.primary,
    padding: '4px',
    border: '1px solid',
    borderColor: colours.primary,
    borderRadius: '5px',
    cursor: 'pointer',
    [mq[0]]: {
      padding: '8px',
    },
    [mq[2]]: {
      padding: '8px 16px',
    },
  },
  primaryButtonTitle: {
    fontSize: '10px',
    fontWeight: '800',
    color: colours.white[0],
    margin: 0,
    [mq[0]]: {
      fontSize: '12px',
    },
    [mq[2]]: {
      fontSize: '16px',
    }
  },
  primaryButtonIcon: {
    height: '12px',
    width: '12px',
    color: colours.white[0],
    [mq[1]]: {
      height: '16px',
      width: '16px',
    },
    [mq[2]]: {
      height: '20px',
      width: '20px',
    }
  }
})