import { tableCellPadding, tableCaptionColor } from '../Variables/Tables'

import { tables } from './tables'

describe('Reboot', () => {
  it('tables', () => {
    expect(tables).toEqual({
      '@global': {
        table: {
          borderCollapse: 'collapse'
        },
        caption: {
          paddingTop: tableCellPadding,
          paddingBottom: tableCellPadding,
          color: tableCaptionColor,
          textAlign: 'left',
          captionSide: 'bottom'
        },
        th: {
          textAlign: 'inherit'
        }
      }
    })
  })
})
