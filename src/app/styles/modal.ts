/** @jsxRuntime classic */
/** @jsx jsx */
import { createStyles } from './createStyles'
import { colours } from './colours'
import { mq } from './mediaqueries'
import { nunito_sans } from '../layout'

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
  modalContainerAddAnime: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '24px',
    padding: '24px 16px',
    margin: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    height: '300px',
    width: 'calc(100% - 64px)',
    position: 'absolute',
    zIndex: 2,
    background: colours.black[70],
    border: '1px solid',
    borderColor: colours.black[50],
    borderRadius: '10px',
    maxWidth: '500px',
    alignSelf: 'center',
    [mq[0]]: {
      height: '400px',
    },
    [mq[2]]: {
      height: '500px',
      maxWidth: '600px',
      gap: '40px',
    },
    [mq[5]]: {
      height: '600px',
    }
  },
  modalContainerBulkAddAnime: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '24px',
    padding: '24px 16px',
    margin: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    height: '500px',
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
      height: '700px',
      maxWidth: '600px',
      gap: '40px',
    },
  },
  availableCollectionContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: '8px',
    height: '200px',
    width: '100%',
    [mq[0]]: {
      height: '300px',
    },
    [mq[2]]: {
      height: '400px',
      gap: '16px',
    },
    [mq[5]]: {
      height: '400px',
    },
  },
  availableCollectionContainerSmall: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: '8px',
    minHeight: '150px',
    maxHeight: '200px',
    width: '100%',
    [mq[2]]: {
      minHeight: '200px',
      maxHeight: '280px',
      gap: '16px',
    },
  },
  collectionButtonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '8px',
    height: 'calc(100% - 48px)',
    width: '100%',
    [mq[2]]: {
      gap: '16px',
    },
    overflowY: 'scroll',
  },
  animeListContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '8px',
    height: 'calc(100% - 48px)',
    width: '100%',
    [mq[2]]: {
      gap: '16px',
    },
    overflowY: 'scroll',
  },
  animeContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '8px',
    width: '100%',

  },
  animeTitleContainer: {
    minHeight: '32px',
    height: '32px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colours.black[50],
    padding: '0px 16px',
    border: '1px solid',
    borderColor: colours.black[20],
    borderRadius: '5px',
    cursor: 'pointer',
    width: 'calc(100% - 40px)',
    [mq[2]]: {
      width: 'calc(100% - 44px)',
      minHeight: '36px',
      height: '36px',
    },
    [mq[5]]: {
      minHeight: '40px',
      height: '40px',
      width: 'calc(100% - 48px)',
    }
  },
  background: {
    background: colours.black[90],
    opacity: '20%',
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 1,
    top: 0,
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
  animeTitle: {
    fontFamily: `${nunito_sans.style.fontFamily}`,
    fontSize: '12px',
    fontWeight: '800',
    color: colours.white[0],
    margin: 0,
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
    }
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
  bodyAddAnime: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
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
  availableTitle: {
    fontSize: '12px',
    fontWeight: '700',
    color: colours.white[0],
    margin: 0,
    textAlign: 'left',
    [mq[2]]: {
      fontSize: '16px',
    },
    [mq[5]]: {
      fontSize: '14px',
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
    fontFamily: `${nunito_sans.style.fontFamily}`,
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
  },
  buttonNewCollection: {
    width: '100%',
    height: '32px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colours.primary,
    padding: '0px 16px',
    border: '1px solid',
    borderColor: colours.primary,
    borderRadius: '5px',
    cursor: 'pointer',
    [mq[2]]: {
      height: '36px',
    },
    [mq[5]]: {
      height: '40px',
    }
  },
  buttonNewCollectionTitle: {
    fontFamily: `${nunito_sans.style.fontFamily}`,
    fontSize: '12px',
    fontWeight: '800',
    color: colours.white[0],
    margin: 0,
    [mq[2]]: {
      fontSize: '16px',
    },
    [mq[5]]: {
      fontSize: '20px',
    }
  },
  buttonNewIcon: {
    height: '20px',
    width: '20px',
    color: colours.white[0],
    [mq[2]]: {
      height: '24px',
      width: '24px',
    },
    [mq[5]]: {
      height: '28px',
      width: '28px',
    }
  },
  deleteAnimeButton: {
    width: '32px',
    height: '32px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colours.error,
    border: '1px solid',
    borderColor: colours.error,
    borderRadius: '5px',
    cursor: 'pointer',
    [mq[2]]: {
      width: '36px',
      height: '36px',
    },
    [mq[5]]: {
      width: '40px',
      height: '40px',
    }
  },
  deleteAnimeIcon: {
    height: '20px',
    width: '20px',
    color: colours.white[0],
    [mq[2]]: {
      height: '24px',
      width: '24px',
    },
    [mq[5]]: {
      height: '28px',
      width: '28px',
    }
  },
  collectionButton: {
    width: '100%',
    minHeight: '32px',
    height: '32px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colours.black[50],
    padding: '0px 16px',
    border: '1px solid',
    borderColor: colours.black[20],
    borderRadius: '5px',
    cursor: 'pointer',
    [mq[2]]: {
      minHeight: '36px',
      height: '36px',
    },
    [mq[5]]: {
      minHeight: '40px',
      height: '40px',
    }
  },
  collectionButtonTitle: {
    fontFamily: `${nunito_sans.style.fontFamily}`,
    textAlign: 'left',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    fontSize: '12px',
    fontWeight: '800',
    color: colours.white[0],
    margin: 0,
    [mq[2]]: {
      fontSize: '16px',
    },
    [mq[5]]: {
      fontSize: '20px',
    }
  },
  divider: {
    width: '100%',
    height: '2px',
    backgroundColor: colours.black[20],
  }
})