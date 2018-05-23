import { closeFontSize, closeFontWeight, closeColor, closeTextShadow } from '../Variables/Close'
import {hoverFocus} from '../Mixins/hover'

import { close, buttonClose } from './Close'

describe('Close classe', () => {
  it('close', () => {
    expect(close).toEqual({
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
    })
  })

  it('buttonClose class', () => {
    expect(buttonClose).toEqual({
      padding: 0,
      backgroundColor: 'transparent',
      border: 0,
      '-webkit-appearance': 'none'
    })
  })
})
