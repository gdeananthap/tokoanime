/** @jsxRuntime classic */
/** @jsx jsx */
import { keyframes } from '@emotion/react'
import { createStyles } from './createStyles'
import { colours } from './colours'
import { mq } from './mediaqueries'
import { nunito_sans } from '../layout'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

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
  loading: {
    borderWidth: '8px',
    borderStyle: 'solid',
    borderColor: colours.black[0],
    borderTopColor: colours.primary,
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    animation: `${spin} 2s linear infinite`,
    marginTop: '24px',
    alignSelf: 'center',
    [mq[2]]: {
      borderWidth: '16px',
      width: '120px',
      height: '120px',
      marginTop: '40px',
    }
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
    fontSize: '16px',
    fontWeight: '800',
    color: colours.white[0],
    margin: '40px 0 0 0',
    [mq[0]]: {
      fontSize: '20px',
    },
    [mq[2]]: {
      fontSize: '32px',
    }
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
  errorTitleSmall: {
    fontSize: '12px',
    fontWeight: '600',
    color: colours.primary,
    margin: 0,
    textAlign: 'center',
    [mq[2]]: {
      fontSize: '16px',
    },
    [mq[5]]: {
      fontSize: '24px',
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
  primaryButtonSmall: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '4px',
    backgroundColor: colours.primary,
    padding: '4px',
    border: '1px solid',
    borderColor: colours.primary,
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '8px',
    [mq[2]]: {
      padding: '4px 8px',
    },
    [mq[5]]: {
      padding: '8px 16px',
    },
  },
  warningButtonSmall: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '4px',
    backgroundColor: colours.error,
    padding: '4px',
    border: '1px solid',
    borderColor: colours.error,
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '8px',
    [mq[2]]: {
      padding: '4px 8px',
    },
    [mq[5]]: {
      padding: '8px 16px',
    },
  },
  primaryButtonTitle: {
    fontFamily: `${nunito_sans.style.fontFamily}`,
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
  primaryButtonTitleSmall: {
    fontFamily: `${nunito_sans.style.fontFamily}`,
    fontSize: '6px',
    fontWeight: '800',
    color: colours.white[0],
    margin: 0,
    [mq[0]]: {
      fontSize: '8px',
    },
    [mq[2]]: {
      fontSize: '10px',
    },
    [mq[5]]: {
      fontSize: '14px',
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
  },
  primaryButtonIconSmall: {
    height: '8px',
    width: '8px',
    color: colours.white[0],
    [mq[2]]: {
      height: '10px',
      width: '10px',
    },
    [mq[5]]: {
      height: '14px',
      width: '14px',
    },
  }
})