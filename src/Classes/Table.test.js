import { size } from '../Functions/size'
import { spacer } from '../Variables/Spacing'
import {
  tableBg,
  tableCellPadding, tableBorderWidth, tableBorderColor, tableCellPaddingSm, tableStripedOrder, tableAccentBg, tableHoverBg, tableActiveBg,
  tableDarkColor, tableDarkBg, tableDarkBorderColor, tableHeadColor, tableHeadBg,
  tableDarkAccentBg, tableDarkHoverBg
} from '../Variables/Tables'
import { bodyBg } from '../Variables/Body'
import { hover } from '../Mixins/hover'
import { themeColors } from '../Variables/Colors'
import { tableRowVariant } from '../Mixins/tableRow'
import { themeColorLevel } from '../Functions/themeColorLevel'
import { gridBreakpoints } from '../Variables/Grid'
import { mediaBreakpointDown, breakpointNext, breakpointInfix } from '../Mixins/breakpoints'

import { table, tableSm, tableBordered, tableBorderLess, tableStriped, tableHover, tableBackgrounds, tableHeadDark, tableDark, tableResponsive } from './Table'

describe('Basic Bootstrap table', () => {
  const tableBorderWidthSize = size(tableBorderWidth)

  it('table', () => {
    expect(table).toEqual({
      width: '100%',
      marginBottom: spacer,
      backgroundColor: tableBg,
      'th,td': {
        padding: tableCellPadding,
        verticalAlign: 'top',
        borderTop: `${tableBorderWidth} solid ${tableBorderColor}`
      },
      'thead th': {
        verticalAlign: 'bottom',
        borderBottom: `${2 * tableBorderWidthSize.value}${tableBorderWidthSize.unit} solid ${tableBorderColor}`
      },
      'tbody + tbody': {
        borderTop: `${2 * tableBorderWidthSize.value}${tableBorderWidthSize.unit} solid ${tableBorderColor}`
      },
      'table': {
        backgroundColor: bodyBg
      }
    })
  })

  it('table-sm', () => {
    expect(tableSm).toEqual({
      'th,td': {
        padding: tableCellPaddingSm
      }
    })
  })

  it('table-bordered', () => {
    expect(tableBordered).toEqual({
      border: `${tableBorderWidth} solid ${tableBorderColor}`,
      'th,td': {
        border: `${tableBorderWidth} solid ${tableBorderColor}`
      },
      'thead': {
        'th,td': {
          borderBottomWidth: `${2 * tableBorderWidthSize.value}${tableBorderWidthSize.unit}`
        }
      }
    })
  })

  it('table-borderless', () => {
    expect(tableBorderLess).toEqual({
      'th,td,thead th,tbody + tbody': {
        border: 0
      }
    })
  })

  it('table-striped', () => {
    const expectValue = {}
    expectValue[`tbody tr:nth-of-type(${tableStripedOrder})`] = {
      backgroundColor: tableAccentBg
    }
    expect(tableStriped).toEqual(expectValue)
  })

  it('table-hover', () => {
    expect(tableHover).toEqual({
      'tbody tr': {
        ...hover({
          backgroundColor: tableHoverBg
        })
      }
    })
  })

  it('table backgrounds', () => {
    let expectValue = {}
    for (const [color] of Object.entries(themeColors)) {
      expectValue = {
        ...tableRowVariant(color, themeColorLevel(color, -9))
      }
    }
    expectValue = {
      ...expectValue,
      ...tableRowVariant('active', tableActiveBg)
    }
    expect(tableBackgrounds).toEqual(expectValue)
  })

  it('Dark table head styles', () => {
    expect(tableHeadDark).toEqual({
      'table': {
        'theadDark': {
          'th': {
            color: tableDarkColor,
            backgroundColor: tableDarkBg,
            borderColor: tableDarkBorderColor
          }
        },
        'theadLight': {
          'th': {
            color: tableHeadColor,
            backgroundColor: tableHeadBg,
            borderColor: tableBorderColor
          }
        }
      }
    })
  })

  it('table dark', () => {
    expect(tableDark).toEqual({
      tableBordered,
      tableStriped,
      tableHover,
      color: tableDarkColor,
      backgroundColor: tableDarkBg,
      'th,td,thead th': {
        borderColor: tableDarkBorderColor
      },
      '&$tableBordered': {
        border: 0
      },
      '&$tableStriped': {
        'tbody tr:nth-of-type(odd)': {
          backgroundColor: tableDarkAccentBg
        }
      },
      '&$tableHover': {
        'tbody tr': {
          ...hover({
            backgroundColor: tableDarkHoverBg
          })
        }
      }
    })
  })

  it('table-responsive', () => {
    const expectValue = {}
    for (const [breakpoint] of Object.entries(gridBreakpoints)) {
      const next = breakpointNext(breakpoint, gridBreakpoints)
      const infix = breakpointInfix(next, gridBreakpoints)
      expectValue[`&${infix}`] = {
        ...mediaBreakpointDown(breakpoint, {
          tableBordered,
          display: 'block',
          width: '100%',
          overflowX: 'auto',
          '-webkit-overflow-scrolling': 'touch',
          '-ms-overflow-style': '-ms-autohiding-scrollbar',
          '> $tableBordered': {
            border: 0
          }
        })
      }
    }

    expect(tableResponsive).toEqual(expectValue)
  })
})
