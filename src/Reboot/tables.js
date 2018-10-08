import { tableCellPadding, tableCaptionColor } from '../Variables/Tables'

export const tables = {
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
