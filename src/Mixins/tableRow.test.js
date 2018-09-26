import { darken } from '../Functions/darken'
import { hover } from './hover'

import { tableRowVariant } from './tableRow'


describe('Tables', () => {
  const state = 'valid'
  const background = '#FFF'

  // Exact selectors below required to override .table-striped and prevent inheritance to nested tables
  it('table-row-variant', () => {
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
    expectValue[`table-${state}`] = {
      '&, > th, > td': {
        backgroundColor: background
      },
      tableHover
    }
    expect(tableRowVariant(state, background)).toEqual(expectValue)
  })
})