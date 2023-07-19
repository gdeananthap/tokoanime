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
  },
  iconContainer: {
    cursor: 'pointer',
  },
  icon: {
    width: '24px',
    height: '24px',
    color: colours.white[0],
  },
  body: {
    width: '100%',
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
  },
  buttonTitle: {
    fontSize: '12px',
    fontWeight: '800',
    color: colours.white[0],
    margin: 0,
  }
})