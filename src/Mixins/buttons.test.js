import { darken } from '../Functions/darken'
import { rgba } from '../Functions/rgba'
import { colorYiq } from '../Functions/colorYiq'
import { gradientBg } from './gradients'
import { boxShadow } from './boxShadow'
import { btnBoxShadow, btnFocusWidth, btnActiveBoxShadow } from '../Variables/Buttons'
import { hover } from './hover'
import { enableShadows } from '../Variables/Options'
import { caret } from './caret'

import { buttonVariant, buttonOutlineVariant, buttonSize } from './buttons'

describe('button-variants', () => {
  it('button-variant', () => {
    const backgroundColor = '#abc'
    const borderColor = '#def'
    const hoverBackgroundColor = darken(backgroundColor, '7.5%')
    const hoverBorderColor = darken(borderColor, '10%')
    const activeBackgroundColor = darken(backgroundColor, '10%')
    const activeBorderColor = darken(borderColor, '12.5%')
    expect(buttonVariant(
      backgroundColor,
      borderColor)
    ).toEqual({
      '$dropdownToggle': {
        ...caret()
      },
      color: colorYiq(backgroundColor),
      ...gradientBg(backgroundColor),
      borderColor: borderColor,
      ...boxShadow(enableShadows, btnBoxShadow),
      ...hover({
        color: colorYiq(hoverBackgroundColor),
        ...gradientBg(hoverBackgroundColor),
        borderColor: hoverBorderColor
      }),
      '&:focus, &.focus': {
        boxShadow: `0 0 0 ${btnFocusWidth} ${rgba(borderColor, 0.5)}`
      },
      '&.disabled, &:disabled': {
        color: colorYiq(backgroundColor),
        backgroundColor: backgroundColor,
        borderColor: borderColor
      },
      '&:not(:disabled):not(.disabled):active, &:not(:disabled):not(.disabled).active, &.show > &$dropdownToggle': {
        color: colorYiq(activeBackgroundColor),
        backgroundColor: activeBackgroundColor,
        borderColor: activeBorderColor
      },
      '&:focus': {
        boxShadow: `0 0 0 ${btnFocusWidth} ${rgba(borderColor, 0.5)}`
      }
    })
  })

  it('button-variant, enable shadows, enable gradients', () => {
    const backgroundColor = '#abc'
    const borderColor = '#def'
    const hoverBackgroundColor = darken(backgroundColor, '75%')
    const hoverBorderColor = darken(borderColor, '10%')
    const activeBackgroundColor = darken(backgroundColor, '10%')
    const activeBorderColor = darken(borderColor, '12.5%')
    const enableShadows = true
    const enableGradients = true
    const myBtnBoxShadow = btnBoxShadow
    const myBtnFocusWidth = btnFocusWidth
    const myBtnActiveBoxShadow = btnActiveBoxShadow
    expect(buttonVariant(
      backgroundColor,
      borderColor,
      hoverBackgroundColor,
      hoverBorderColor,
      activeBackgroundColor,
      activeBorderColor,
      enableShadows,
      enableGradients,
      myBtnBoxShadow,
      myBtnFocusWidth,
      myBtnActiveBoxShadow
    )).toEqual({
      '$dropdownToggle': {
        ...caret()
      },
      color: colorYiq(backgroundColor),
      ...gradientBg(backgroundColor),
      borderColor: borderColor,
      ...boxShadow(enableShadows, btnBoxShadow),
      ...hover({
        color: colorYiq(hoverBackgroundColor),
        ...gradientBg(hoverBackgroundColor),
        borderColor: hoverBorderColor
      }),
      '&:focus, &.focus': {
        boxShadow: `${btnBoxShadow}, 0 0 0 ${btnFocusWidth} ${rgba(borderColor, 0.5)}`
      },
      '&.disabled, &:disabled': {
        color: colorYiq(backgroundColor),
        backgroundColor: backgroundColor,
        borderColor: borderColor
      },
      '&:not(:disabled):not(.disabled):active, &:not(:disabled):not(.disabled).active, &.show > &$dropdownToggle': {
        color: colorYiq(activeBackgroundColor),
        backgroundColor: activeBackgroundColor,
        backgrounImage: 'none',
        borderColor: activeBorderColor
      },
      '&:focus': {
        boxShadow: `${myBtnActiveBoxShadow}, 0 0 0 ${myBtnFocusWidth} ${rgba(borderColor, 0.5)}`
      }
    })
  })

  it('button-variant, disable shadows, disable gradients', () => {
    const backgroundColor = '#abc'
    const borderColor = '#def'
    const hoverBackgroundColor = darken(backgroundColor, '75%')
    const hoverBorderColor = darken(borderColor, '10%')
    const activeBackgroundColor = darken(backgroundColor, '10%')
    const activeBorderColor = darken(borderColor, '12.5%')
    const enableShadows = false
    const enableGradients = false
    const myBtnBoxShadow = btnBoxShadow
    const myBtnFocusWidth = btnFocusWidth
    const myBtnActiveBoxShadow = btnActiveBoxShadow
    expect(buttonVariant(
      backgroundColor,
      borderColor,
      hoverBackgroundColor,
      hoverBorderColor,
      activeBackgroundColor,
      activeBorderColor,
      enableShadows,
      enableGradients,
      myBtnBoxShadow,
      myBtnFocusWidth,
      myBtnActiveBoxShadow
    )).toEqual({
      '$dropdownToggle': {
        ...caret()
      },
      color: colorYiq(backgroundColor),
      ...gradientBg(backgroundColor),
      borderColor: borderColor,
      ...boxShadow(enableShadows, myBtnBoxShadow),
      ...hover({
        color: colorYiq(hoverBackgroundColor),
        ...gradientBg(hoverBackgroundColor),
        borderColor: hoverBorderColor
      }),
      '&:focus, &.focus': {
        boxShadow: `0 0 0 ${myBtnFocusWidth} ${rgba(borderColor, 0.5)}`
      },
      '&.disabled, &:disabled': {
        color: colorYiq(backgroundColor),
        backgroundColor: backgroundColor,
        borderColor: borderColor
      },
      '&:not(:disabled):not(.disabled):active, &:not(:disabled):not(.disabled).active, &.show > &$dropdownToggle': {
        color: colorYiq(activeBackgroundColor),
        backgroundColor: activeBackgroundColor,
        borderColor: activeBorderColor
      },
      '&:focus': {
        boxShadow: `0 0 0 ${btnFocusWidth} ${rgba(borderColor, 0.5)}`
      }
    })
  })

  it('buttonOutlineVariant', () => {
    const color = '#abc'
    const colorHover = colorYiq(color)
    const ativeBackgroundColor = color
    const activeBorderColor = color
    const mybtnFocusWidth = btnFocusWidth

    expect(buttonOutlineVariant(color)).toEqual({
      dropdownToggle: {
        ...caret()
      },
      color: color,
      backgroundColor: 'transparent',
      backgroundImage: 'none',
      borderColor: color,
      '&:hover': {
        color: colorHover,
        backgroundColor: ativeBackgroundColor,
        borderColor: activeBorderColor
      },
      '&:focus, &.focus': {
        boxShadow: `0 0 0 ${mybtnFocusWidth} ${rgba(color, 0.5)}`
      },
      '&.disabled, &:disabled': {
        color: color,
        backgroundColor: 'tranparent'
      },
      '&:not(:disabled):not(.disabled):active, &:not(:disabled):not(.disabled).active, .show > &$dropdownToggle': {
        color: colorYiq(ativeBackgroundColor),
        backgroundColor: ativeBackgroundColor,
        borderColor: activeBorderColor,
        '&:focus': {
          boxShadow: `0 0 0 ${mybtnFocusWidth} ${rgba(color, 0.5)}`
        }
      }
    })
  })

  it('buttonOutlineVariant, enableShadows = true', () => {
    const color = '#abc'
    const colorHover = colorYiq(color)
    const ativeBackgroundColor = color
    const activeBorderColor = color
    const myBtnFocusWidth = btnFocusWidth

    expect(buttonOutlineVariant(color, colorHover, ativeBackgroundColor, activeBorderColor, myBtnFocusWidth, true)).toEqual({
      dropdownToggle: {
        ...caret()
      },
      color: color,
      backgroundColor: 'transparent',
      backgroundImage: 'none',
      borderColor: color,
      '&:hover': {
        color: colorHover,
        backgroundColor: ativeBackgroundColor,
        borderColor: activeBorderColor
      },
      '&:focus, &.focus': {
        boxShadow: `0 0 0 ${myBtnFocusWidth} ${rgba(color, 0.5)}`
      },
      '&.disabled, &:disabled': {
        color: color,
        backgroundColor: 'tranparent'
      },
      '&:not(:disabled):not(.disabled):active, &:not(:disabled):not(.disabled).active, .show > &$dropdownToggle': {
        color: colorYiq(ativeBackgroundColor),
        backgroundColor: ativeBackgroundColor,
        borderColor: activeBorderColor,
        '&:focus': {
          boxShadow: `${btnActiveBoxShadow}, 0 0 0 ${myBtnFocusWidth} ${rgba(color, 0.5)}`
        }
      }
    })
  })

  it('buttonSize, enable rounded corner', () => {
    const paddingY = '10px'
    const paddingX = '20px'
    const fontSize = '10px'
    const lineHeight = 2
    const borderRadius = '10px'
    expect(buttonSize(paddingY, paddingX, fontSize, lineHeight, borderRadius, true)).toEqual({
      padding: `${paddingY} ${paddingX}`,
      fontSize: fontSize,
      lineHeight: lineHeight,
      borderRadius: borderRadius
    })
  })

  it('buttonSize, disable rounded corner', () => {
    const paddingY = '10px'
    const paddingX = '20px'
    const fontSize = '10px'
    const lineHeight = 2
    const borderRadius = '10px'

    expect(buttonSize(paddingY, paddingX, fontSize, lineHeight, borderRadius, false)).toEqual({
      padding: `${paddingY} ${paddingX}`,
      fontSize: fontSize,
      lineHeight: lineHeight,
      borderRadius: 0
    })
  })

  it('buttonSize, default', () => {
    const paddingY = '10px'
    const paddingX = '20px'
    const fontSize = '10px'
    const lineHeight = 2
    const borderRadius = '10px'

    expect(buttonSize(paddingY, paddingX, fontSize, lineHeight, borderRadius)).toEqual({
      padding: `${paddingY} ${paddingX}`,
      fontSize: fontSize,
      lineHeight: lineHeight,
      borderRadius: borderRadius
    })
  })
})
