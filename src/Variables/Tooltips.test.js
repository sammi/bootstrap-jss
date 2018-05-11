import {fontSizeSm} from './Fonts'
import {white, black} from './Colors'
import {borderRadius} from './Components'

import {
  tooltipFontSize,
  tooltipMaxWidth,
  tooltipColor,
  tooltipBg,
  tooltipBorderRadius,
  tooltipOpacity,
  tooltipPaddingY,
  tooltipPaddingX,
  tooltipMargin,
  tooltipArrowWidth,
  tooltipArrowHeight,
  tooltipArrowColor
} from './Tooltips'

describe('Tooltips', () => {
  it('Tooltips', () => {
    expect(tooltipFontSize).toEqual(fontSizeSm)
    expect(tooltipMaxWidth).toEqual('200px')
    expect(tooltipColor).toEqual(white)
    expect(tooltipBg).toEqual(black)
    expect(tooltipBorderRadius).toEqual(borderRadius)
    expect(tooltipOpacity).toEqual(0.9)
    expect(tooltipPaddingY).toEqual('.25rem')
    expect(tooltipPaddingX).toEqual('.5rem')
    expect(tooltipMargin).toEqual('0')
    expect(tooltipArrowWidth).toEqual('.8rem')
    expect(tooltipArrowHeight).toEqual('.4rem')
    expect(tooltipArrowColor).toEqual(tooltipBg)
  })
})
