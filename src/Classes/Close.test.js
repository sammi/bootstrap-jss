import { closeFontSize, closeFontWeight, closeColor, closeTextShadow } from '../Variables/Close'

import { close } from './Close'

describe('Close classe', () => {
  it('close', () => {
    expect(close).toEqual({
      float: 'right',
      fontSize: closeFontSize,
      fontWeight: closeFontWeight,
      lineHeight: 1,
      color: closeColor,
      textShadow: closeTextShadow,
      opacity: 0.5
    })
  })
})
