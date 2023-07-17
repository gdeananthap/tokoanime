/** @jsxRuntime classic */
/** @jsx jsx */
import { createStyles } from './createStyles'
import { colours} from './colours'

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
  },
})