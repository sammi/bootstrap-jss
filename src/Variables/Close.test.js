import { fontWeightBold, fontSizeBase } from './Fonts'
import { black, white } from './Colors'
import { size } from '../Functions/size'

import {
  closeFontSize,
  closeFontWeight,
  closeColor,
  closeTextShadow
} from './Close'

describe('Close', () => {
  it('Close', () => {
    expect(closeFontSize).toEqual(`${size(fontSizeBase).value * 1.5}${size(fontSizeBase).unit}`)
    expect(closeFontWeight).toEqual(fontWeightBold)
    expect(closeColor).toEqual(black)
    expect(closeTextShadow).toEqual(`0 1px 0 ${white}`)
  })
})
