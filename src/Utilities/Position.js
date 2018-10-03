import { zindexFixed, zindexSticky } from '../Variables/Zindex'

const postitions = {}
const allPoistions = ['static', 'relative', 'absolute', 'fixed', 'sticky']
allPoistions.forEach(position => {
  postitions[`position-${position}`] = { position: `${position} !important` }
})

const fixedTop = {
  position: 'fixed',
  top: 0,
  right: 0,
  left: 0,
  zIndex: zindexFixed
}

const fixedBottom = {
  position: 'fixed',
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: zindexFixed
}

const stickyTop = {
  '@supports (position: sticky)': {
    position: 'sticky',
    top: 0,
    zIndex: zindexSticky
  }
}

export {
  postitions,
  fixedTop,
  fixedBottom,
  stickyTop
}
