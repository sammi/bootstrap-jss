import { closeFontSize, closeFontWeight, closeColor, closeTextShadow } from '../Variables/Close'
import {hoverFocus} from '../Mixins/hover'

export const close = {
  float: 'right',
  fontSize: closeFontSize,
  fontWeight: closeFontWeight,
  lineHeight: 1,
  color: closeColor,
  textShadow: closeTextShadow,
  opacity: 0.5,
  ...hoverFocus({
    color: closeColor,
    textDecroation: 'none',
    opacity: 0.75
  }),
  '&:not(:disabled):not(.disabled)': {
    cursor: 'pointer'
  }
}
