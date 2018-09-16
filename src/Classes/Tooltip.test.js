import { zindexTooltip } from '../Variables/Zindex'
import { size } from '../Functions/size'
import {
  tooltipMargin, tooltipFontSize, tooltipOpacity, tooltipArrowWidth, tooltipArrowHeight,
  tooltipArrowColor, tooltipMaxWidth, tooltipPaddingY, tooltipPaddingX, tooltipColor, tooltipBg,
  tooltipBorderRadius
} from '../Variables/Tooltips'
import { resetText } from '../Mixins/resetText'
import { borderRadius } from '../Mixins/borderRadius'

import { tooltip, bsTooltipTop, bsTooltipRight, bsTooltipBottom, bsTooltipLeft, bsTooltipAuto, tooltipInner } from './Tooltip'

describe('tooltip', () => {
  it('tooltip', () => {
    expect(tooltip).toEqual({
      position: 'absolute',
      zIndex: zindexTooltip,
      display: 'block',
      margin: tooltipMargin,
      ...resetText,
      fontSize: tooltipFontSize,
      wordWrap: 'break-word',
      opacity: 0,
      '&.show': {
        opacity: tooltipOpacity
      },
      arrow: {
        position: 'absolute',
        display: 'block',
        width: tooltipArrowWidth,
        height: tooltipArrowHeight,
        '&::before': {
          position: 'absolute',
          content: '',
          borderColor: 'transparent',
          borderStyle: 'solid'
        }
      }
    })
  })

  it('tooltip-top', () => {
    expect(bsTooltipTop).toEqual({
      padding: `${tooltipArrowHeight} 0`,
      arrow: {
        bottom: 0,
        '&::before': {
          top: 0,
          borderWidth: `${tooltipArrowHeight} ${size(tooltipArrowWidth).value / 2}${size(tooltipArrowWidth).unit} 0`,
          borderTopColor: tooltipArrowColor
        }
      }
    })
  })

  it('bs-tooltip-right', () => {
    const tooltipArrowWidthValue = `${size(tooltipArrowWidth).value / 2}${size(tooltipArrowWidth).unit}`
    expect(bsTooltipRight).toEqual({
      padding: `0 ${tooltipArrowHeight}`,
      arrow: {
        left: 0,
        width: tooltipArrowHeight,
        height: tooltipArrowWidth,
        '&::before': {
          right: 0,
          borderWidth: `${tooltipArrowWidthValue} ${tooltipArrowHeight} ${tooltipArrowWidthValue} ${tooltipArrowHeight} 0`,
          borderRightColor: tooltipArrowColor
        }
      }
    })
  })

  const tooltipArrowWidthValue = `${size(tooltipArrowWidth).value / 2}${size(tooltipArrowWidth).unit}`

  it('bs-tooltip-bottom', () => {
    expect(bsTooltipBottom).toEqual({
      padding: `${tooltipArrowHeight} 0`,
      arrow: {
        top: 0,
        '&::before': {
          bottom: 0,
          borderWidth: `0 ${tooltipArrowWidthValue} ${tooltipArrowHeight}`,
          borderBottomColor: tooltipArrowColor
        }
      }
    })
  })

  it('bs-tooltip-left', () => {
    expect(bsTooltipLeft).toEqual({
      padding: `0 ${tooltipArrowHeight}`,
      arrow: {
        right: 0,
        width: tooltipArrowHeight,
        height: tooltipArrowWidth,
        '&::before': {
          left: 0,
          borderWidth: `${tooltipArrowWidthValue} 0 ${tooltipArrowWidthValue} ${tooltipArrowHeight}`,
          borderLeftColor: tooltipArrowColor
        }
      }
    })
  })

  it('bs-tooltip-auto', () => {
    expect(bsTooltipAuto).toEqual({
      '&[x-placement^="top"]': {
        ...bsTooltipTop
      },
      '&[x-placement^="right"]': {
        ...bsTooltipRight
      },
      '&[x-placement^="bottom"]': {
        ...bsTooltipBottom
      },
      '&[x-placement^="left"]': {
        ...bsTooltipLeft
      }
    })
  })

  it('tooltip-inner', () => {
    expect(tooltipInner).toEqual({
      maxWidth: tooltipMaxWidth,
      padding: `${tooltipPaddingY} ${tooltipPaddingX}`,
      color: tooltipColor,
      textAlign: 'center',
      backgroundColor: tooltipBg,
      ...borderRadius(tooltipBorderRadius)
    })
  })
})
