import { zindexPopover } from '../Variables/Zindex'
import {
  popoverMaxWidth,
  popoverFontSize,
  popoverBg,
  popoverBorderWidth,
  popoverBorderColor,
  popoverBorderRadius,
  popoverBoxShadow,
  popoverArrowWidth,
  popoverArrowHeight,
  popoverArrowOuterColor,
  popoverArrowColor,
  popoverHeaderBg,
  popoverHeaderColor,
  popoverHeaderPaddingY,
  popoverHeaderPaddingX,
  popoverBodyPaddingY,
  popoverBodyPaddingX,
  popoverBodyColor
} from '../Variables/Popovers'
import { resetText } from '../Mixins/resetText'
import { borderRadius, borderTopRadius } from '../Mixins/borderRadius'
import { boxShadow } from '../Mixins/boxShadow'
import { borderRadiusLg } from '../Variables/Components'
import { size } from '../Functions/size'
import { fontSizeBase } from '../Variables/Fonts'
import {
  popover,
  popoverHeader,
  bsPopoverTop,
  bsPopoverRight,
  bsPopoverBottom,
  bsPopoverLeft,
  bsPopoverAuto,
  popoverBody
} from './Popover'
import jss from 'jss'
import preset from 'jss-preset-default'
jss.setup(preset())

describe('popover', () => {
  it('popover', () => {
    expect(popover).toEqual({
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: zindexPopover,
      display: 'block',
      maxWidth: popoverMaxWidth,
      ...resetText,
      fontSize: popoverFontSize,
      wordWrap: 'break-word',
      backgroundColor: popoverBg,
      backgroundClip: 'padding-box',
      border: `${popoverBorderWidth} solid ${popoverBorderColor}`,
      ...borderRadius(popoverBorderRadius),
      ...boxShadow(popoverBoxShadow),
      '&$arrow': {
        position: 'absolute',
        display: 'block',
        width: popoverArrowWidth,
        height: popoverArrowHeight,
        margin: `0 ${borderRadiusLg}`,
        '&::before,&::after': {
          position: 'absolute',
          display: 'block',
          content: '',
          borderColor: 'transparent',
          borderStyle: 'solid'
        }
      }
    })
    expect(jss.createStyleSheet({ arrow: {}, popover }).toString()).toBeDefined()
  })

  it('popover-header', () => {
    expect(popoverHeader).toEqual({
      padding: `${popoverHeaderPaddingY} ${popoverHeaderPaddingX}`,
      marginBottom: 0,
      fontSize: fontSizeBase,
      color: popoverHeaderColor,
      backgroundColor: popoverHeaderBg,
      borderBottom: `$popover-border-width solid darken($popover-header-bg, 5%)`,
      ...borderTopRadius(`calc(${size(borderRadiusLg).value - size(popoverBorderWidth).value}${borderRadiusLg.unit}`),
      '&:empty': {
        display: 'none'
      }
    })
    expect(jss.createStyleSheet({ popoverHeader }).toString()).toBeDefined()
  })

  const arrowHeightPlusWidthValue = `${size(popoverArrowHeight).value + size(popoverBorderWidth).value}${size(popoverArrowHeight).unit}`

  it('bs-popover-top', () => {
    expect(bsPopoverTop).toEqual({
      marginBottom: popoverArrowHeight,
      '&$arrow': {
        bottom: `calc(-${arrowHeightPlusWidthValue})`
      },
      '&$arrow::before,&$arrow::after': {
        borderWidth: `${popoverArrowHeight} ${size(popoverArrowWidth).value / 2}${size(popoverArrowWidth).unit} 0`
      },
      '&$arrow::before': {
        bottom: 0,
        borderTopColor: popoverArrowOuterColor
      },
      '&$arrow::after': {
        bottom: popoverBorderWidth,
        borderTopColor: popoverArrowColor
      }
    })
    expect(jss.createStyleSheet({ arrow: {}, bsPopoverTop }).toString()).toBeDefined()
  })

  const popoverArrowWidthValue = `{size(popoverArrowWidth).value / 2}${size(popoverArrowWidth.unit)}`

  it('bs-popover-right', () => {
    expect(bsPopoverRight).toEqual({
      marginLeft: popoverArrowHeight,
      '&$arrow': {
        left: `calc(-${size(popoverArrowHeight).value + size(popoverBorderWidth).value}${size(popoverArrowHeight).unit})`,
        width: popoverArrowHeight,
        height: popoverArrowWidth,
        margin: `${borderRadiusLg} 0`
      },
      '&$arrow::before,&$arrow::after': {
        borderWidth: `${popoverArrowWidthValue} ${popoverArrowHeight} ${popoverArrowWidthValue} 0`
      },
      '&$arrow::before': {
        left: 0,
        borderRightColor: popoverArrowOuterColor
      },
      '&$arrow::after': {
        left: popoverBorderWidth,
        borderRightColor: popoverArrowColor
      }
    })
    expect(jss.createStyleSheet({ arrow: {}, bsPopoverRight }).toString()).toBeDefined()
  })

  it('bs-popover-bottom', () => {
    expect(bsPopoverBottom).toEqual({
      marginTop: popoverArrowHeight,
      '&$arrow': {
        top: `calc(-${arrowHeightPlusWidthValue})`
      },
      '&$arrow::before,&$arrow::after': {
        borderWidth: `0 ${popoverArrowWidthValue} ${popoverArrowHeight} ${popoverArrowWidthValue}`
      },
      '&$arrow::before': {
        top: 0,
        borderBottomColor: popoverArrowOuterColor
      },
      '&$arrow::after': {
        top: popoverBorderWidth,
        borderBottomColor: popoverArrowColor
      },
      '&$popoverHeader::before': {
        position: 'absolute',
        top: 0,
        left: '50%',
        display: 'block',
        width: popoverArrowWidth,
        marginLeft: `${size(popoverArrowWidth).value / -2}${size(popoverArrowWidth).unit}`,
        content: '',
        borderBottom: `${popoverBorderWidth} solid ${popoverHeaderBg}`
      }
    })
    expect(jss.createStyleSheet({ arrow: {}, popoverHeader: {}, bsPopoverBottom }).toString()).toBeDefined()
  })

  it('bs-popover-left', () => {
    expect(bsPopoverLeft).toEqual({
      marginRight: popoverArrowHeight,
      '&$arrow': {
        right: `calc({arrowHeightPlusWidthValue})`,
        width: popoverArrowHeight,
        height: popoverArrowWidth,
        margin: `${borderRadiusLg} 0`
      },
      '&$arrow::before,&$arrow::after': {
        borderWidth: `${popoverArrowWidthValue} 0 ${popoverArrowWidthValue} ${popoverArrowHeight}`
      },
      '&$arrow::before': {
        right: 0,
        borderLeftColor: popoverArrowOuterColor
      },
      '&$arrow::after': {
        right: popoverBorderWidth,
        borderLeftColor: popoverArrowColor
      }
    })
    expect(jss.createStyleSheet({ arrow: {}, popoverHeader: {}, bsPopoverLeft }).toString()).toBeDefined()
  })

  it('bs-popover-auto', () => {
    expect(bsPopoverAuto).toEqual({
      '&[x-placement^="top"]': {
        ...bsPopoverTop
      },
      '&[x-placement^="right"]': {
        ...bsPopoverRight
      },
      '&[x-placement^="bottom"]': {
        ...bsPopoverBottom
      },
      '&[x-placement^="left"]': {
        ...bsPopoverLeft
      }
    })
    expect(jss.createStyleSheet({ arrow: {}, popoverHeader: {}, bsPopoverAuto }).toString()).toBeDefined()
  })
  it('popover-body', () => {
    expect(popoverBody).toEqual({
      padding: `${popoverBodyPaddingY} ${popoverBodyPaddingX}`,
      color: popoverBodyColor
    })
    expect(jss.createStyleSheet({ popoverBody }).toString()).toBeDefined()
  })
})
