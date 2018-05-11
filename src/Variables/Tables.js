import format from 'string-format'
import {rgba} from '../Functions/rgba'
import {black, grays, white} from './Colors'
import {borderWidth} from './Components'
import {bodyBg} from './Body'
import {textMuted} from './Fonts'
import {lighten} from '../Functions/lighten'

export const tableCellPadding = '.75rem'
export const tableCellPaddingSm = '.3rem'
export const tableBg = 'transparent'
export const tableAccentBg = format('{}', rgba(black, 0.05))
export const tableHoverBg = format('{}', rgba(black, 0.075))
export const tableActiveBg = tableHoverBg

export const tableBorderWidth = borderWidth
export const tableBorderColor = grays._300

export const tableHeadBg = grays._200
export const tableHeadColor = grays._700

export const tableDarkBg = grays._900
export const tableDarkAccentBg = format('{}', rgba(white, 0.05))
export const tableDarkHoverBg = format('{}', rgba(white, 0.075))
export const tableDarkBorderColor = format('{}', lighten(grays._900, '7.5%'))
export const tableDarkColor = bodyBg

export const tableStripedOrder = 'odd'

export const tableCaptionColor = textMuted
