import { tableCellPadding, tableCaptionColor } from '../Variables/Tables'

import {
  tables
} from './tables'

describe('Reboot', () => {
  it('tables', () => {
    expect(tables).toEqual({
      table: {
        borderCollapse: 'collapse' // Prevent double borders
      },
      caption: {
        paddingTop: tableCellPadding,
        paddingBottom: tableCellPadding,
        color: tableCaptionColor,
        textAlign: 'left',
        captionSide: 'bottom'
      },
      th: {
        // Matches default `<td>` alignment by inheriting from the `<body>`, or the
        // closest parent with a set `text-align`.
        textAlign: 'inherit'
      }
    })
  })
})
