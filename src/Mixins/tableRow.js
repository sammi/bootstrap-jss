import { darken } from '../Functions/darken'
import { hover } from './hover'

export const tableRowVariant = (state, background) => {
  const tableHover = {}
  const hoverBackground = darken(background, '5%')

  tableHover[`table-${state}`] = {
    ...hover({
      backgroundColor: hoverBackground,
      '> td, > th': {
        backgroundColor: hoverBackground
      }
    })
  }

  const expectValue = {}
  expectValue[`.table-${state}`] = {
    '&, > th, > td': {
      backgroundColor: background
    },
    tableHover
  }

  return expectValue
}
