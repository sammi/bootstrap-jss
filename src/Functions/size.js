import _ from 'lodash'

const unitSet = new Set([
  'px',
  'cm',
  'mm',
  '%',
  'ch',
  'in',
  'em',
  'rem',
  'pt',
  'pc',
  'ex',
  'vw',
  'vh',
  'vmin',
  'vmax',
  'deg',
  'turn',
  'rad',
  'grad',
  's',
  'ms',
  'Hz',
  'kHz',
  'dppx',
  'dpcm',
  'dpi'
])

export const size = (rawSize) => {
  const sizeString = _.replace(rawSize, '!default', '').trim()

  let unit = 'rem'
  let value = 0
  unitSet.forEach(unitName => {
    if (sizeString.indexOf(unitName) !== -1) {
      unit = unitName
      value = parseFloat(_.replace(sizeString, unitName, ''))
    }
  })
  return { value, unit }
}
