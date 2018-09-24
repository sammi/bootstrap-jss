import { sizes } from '../Variables/Spacing'

const sizing = {}
for (const [prop, abbrev] of Object.entries({ width: 'w', height: 'h' })) {
  for (const [size, length] of Object.entries(sizes)) {
    const propValue = {}
    propValue[`${prop}`] = `${length} !important`
    sizing[`${abbrev}-${size.replace('_', '')}`] = { ...propValue }
  }
}
const mw100 = {
  maxWidth: '100% !important'
}

const mh100 = {
  maxHeight: '100% !important'
}

export {
  sizing,
  mw100,
  mh100
}