/** @jsxRuntime classic */
/** @jsx jsx */
import { createStyles } from './createStyles'
import { colours } from './colours'
import { mq } from './mediaqueries'

export const header = createStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px',
    width: 'calc(100% - 32px)',
    borderBottom: '2px solid',
    borderBottomColor: colours.black[50],
    [mq[2]]: {
      padding: '20px',
      width: 'calc(100% - 40px)',
    },
    [mq[3]]: {
      padding: '24px',
      width: 'calc(100% - 48px)',
    }
  },
  left: {
    display: 'flex',
    flexDirection: 'row',
    gap: '40px',
  },
  logo: {
    width: '114px',
    height: '16px',
    [mq[2]]: {
      width: '142px',
      height: '20px',
    },
    [mq[3]]: {
      width: '200px',
      height: '28px',
    }
  },
  itemContainer: {
    display: 'none',
    flexDirection: 'row',
    gap: '40px',
    [mq[2]]: {
      display: 'flex',
    }
  },
  item: {
    fontSize: '16px',
    fontWeight: '500',
    color: colours.white[0],
    textDecoration: 'none',
    '&:hover': {
      color: colours.primary,
    },
    [mq[3]]: {
      fontSize: '20px',
    },
  },
  right: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '8px',
  },
  searchbar: {
    width: '100px',
    height: '16px',
    boxSizing: 'border-box',
    border: '1px solid',
    borderColor: colours.black[20],
    color: colours.white[0],
    borderRadius: '5px',
    fontSize: '6px',
    backgroundColor: colours.black[50],
    backgroundImage: `url(/search-icon-small.png)`,
    backgroundPosition: '98% 50%',
    backgroundRepeat: 'no-repeat',
    padding:'4px 8px',
    '&:focus': {
      borderColor: colours.black[20],
      outline: 'none',
    },
    [mq[0]]: {
      width: '150px',
    },
    [mq[2]]: {
      width: '320px',
      height: '40px',
      fontSize: '16px',
      backgroundImage: `url(/search-icon.png)`,
    },
    [mq[3]]: {
      width: '480px',
    }
  },
  iconContainer: {
    cursor: 'pointer',
    [mq[2]]: {
      display: 'none',
    }
  },
  icon: {
    width: '16px',
    height: '16px',
    color: colours.white[0],
  },
  menuBackground: {
    background: colours.black[90],
    opacity: '20%',
    width: '100%',
    height: 'calc(100% - 56px)',
    position: 'absolute',
    zIndex: 1,
    top: '56px',
    [mq[2]]: {
      display: 'none',
    }
  },
  menuContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    position: 'absolute',
    width: 'calc(100% - 32px)',
    zIndex: 2,
    background: colours.black[70],
    padding: '8px 16px',
    top: '56px',
    [mq[2]]: {
      display: 'none',
    }
  },
  menuItem: {
    fontSize: '12px',
    fontWeight: '500',
    color: colours.white[0],
    textDecoration: 'none',
    '&:hover': {
      color: colours.primary,
    }
  },
})