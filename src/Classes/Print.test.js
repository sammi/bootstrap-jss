import { borderWidth } from '../Variables/Components'
import { grays, black, white } from '../Variables/Colors'
import { printPageSize, printBodyMinWidth } from '../Variables/Printing'
import { tableBorderColor } from '../Variables/Tables'
import { enablePrintStyles } from '../Variables/Options'

import { mediaPrint } from './Print'

describe('print', () => {
  it('media print', () => {
    const mediaPrintValue = {
      '@media print': {
        '*,*::before,*::after': {
          textShadow: 'none !important',
          boxShadow: 'none !important'
        },
        a: {
          '&:not(.btn)': {
            textDecoration: 'underline'
          }
        },
        'abbr[title]::after': {
          content: ` (" attr(title) ")`
        },
        pre: {
          whiteSpace: 'pre-wrap !important'
        },
        'pre,blockquote': {
          border: `${borderWidth} solid ${grays._500}`,
          pageBreakInside: 'avoid'
        },
        thead: {
          display: 'table-header-group'
        },
        'tr,img': {
          pageBreakInside: 'avoid'
        },
        'p,h2,h3': {
          orphans: 3,
          widows: 3
        },
        'h2,h3': {
          pageBreakAfter: 'avoid'
        },
        '@page': {
          size: printPageSize
        },
        body: {
          minWidth: `${printBodyMinWidth} !important`
        },
        container: {
          minWidth: `${printBodyMinWidth} !important`
        },
        navbar: {
          display: 'none'
        },
        badge: {
          border: `${borderWidth} solid ${black}`
        },
        table: {
          borderCollapse: 'collapse !important',
          'td,th': {
            backgroundColor: `${white} !important`
          }
        },
        tableBordered: {
          'th,td': {
            border: `1px solid ${grays._300} !important`
          }
        },
        tableDark: {
          color: 'inherit',
          'th,td,thead th,tbody + tbody': {
            borderColor: tableBorderColor
          }
        },
        'table theadDark th': {
          color: 'inherit',
          borderColor: tableBorderColor
        }
      }
    }

    expect(mediaPrint()).toEqual(mediaPrintValue)
    expect(mediaPrint(enablePrintStyles)).toEqual(mediaPrintValue)
  })
})
