/** @jsxRuntime classic */
/** @jsx jsx */
import { createStyles } from './createStyles'
import { colours } from './colours'
import { mq } from './mediaqueries'

export const modal = createStyles({
  modalContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px 16px',
    margin: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    height: '200px',
    width: 'calc(100% - 64px)',
    position: 'absolute',
    zIndex: 2,
    background: colours.black[70],
    border: '1px solid',
    borderColor: colours.black[50],
    borderRadius: '10px',
    maxWidth: '500px',
    alignSelf: 'center',
    [mq[2]]: {
      maxWidth: '600px',
    }
  },
  background: {
    background: colours.black[90],
    opacity: '20%',
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 1,
    top: '0',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  title: {
    fontSize: '16px',
    fontWeight: '800',
    margin: 0,
    color: colours.white[0],
    [mq[2]]: {
      fontSize: '20px',
    },
    [mq[5]]: {
      fontSize: '24px',
    },
  },
  iconContainer: {
    cursor: 'pointer',
  },
  icon: {
    width: '24px',
    height: '24px',
    color: colours.white[0],
    [mq[2]]: {
      width: '28px',
      height: '28px',
    },
    [mq[5]]: {
      width: '32px',
      height: '32px',
    },
  },
  body: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px',
  },
  bodyTitle: {
    fontSize: '14px',
    fontWeight: '400',
    color: colours.white[0],
    margin: 0,
    textAlign: 'center',
    [mq[2]]: {
      fontSize: '18px',
    },
    [mq[5]]: {
      fontSize: '22px',
    },
  },
  bodyTitleGreen: {
    color: colours.primary,
  },
  errorMessage: {
    fontSize: '10px',
    fontWeight: '400',
    color: colours.error,
    margin: 0,
    textAlign: 'left',
    [mq[2]]: {
      fontSize: '14px',
    },
    [mq[5]]: {
      fontSize: '18px',
    },
  },
  input: {
    width: '100%',
    height: '32px',
    boxSizing: 'border-box',
    border: '1px solid',
    borderColor: colours.black[20],
    color: colours.white[0],
    borderRadius: '5px',
    fontSize: '12px',
    backgroundColor: colours.black[50],
    padding:'8px 16px',
    '&:focus': {
      borderColor: colours.black[20],
      outline: 'none',
    },
    [mq[2]]: {
      fontSize: '16px',
      height: '36px',
    },
    [mq[5]]: {
      fontSize: '20px',
      height: '40px',
    },
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '24px',
  },
  primaryButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    backgroundColor: colours.primary,
    border: '1px solid',
    borderColor: colours.primary,
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100px',
    height: '24px',
    '&:disabled': {
      backgroundColor: colours.black[0],
      borderColor: colours.black[0],
      cursor: 'default',
    },
    [mq[2]]: {
      width: '120px',
      height: '28px',
    },
    [mq[5]]: {
      width: '140px',
      height: '32px',
    },
  },
  secondaryButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    backgroundColor: colours.black[0],
    border: '1px solid',
    borderColor: colours.black[0],
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100px',
    height: '24px',
    [mq[2]]: {
      width: '120px',
      height: '28px',
    },
    [mq[5]]: {
      width: '140px',
      height: '32px',
    },
  },
  buttonTitle: {
    fontSize: '12px',
    fontWeight: '800',
    color: colours.white[0],
    margin: 0,
    [mq[2]]: {
      fontSize: '16px',
    },
    [mq[5]]: {
      fontSize: '20px',
    },
  }
})