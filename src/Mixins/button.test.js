import { darken } from '../Functions/darken'
import { rgba } from '../Functions/rgba'
import { colorYiq } from '../Functions/colorYiq'
import { gradientBg } from './gradients'
import { boxShadow } from './boxShadow'

import { btnBoxShadow, btnFocusWidth, btnActiveBoxShadow } from '../Variables/Buttons'

import { hover } from './hover'
import format from 'string-format'
import {enableShadows} from '../Variables/Options'

import { buttonVariant, buttonOutlineVariant, buttonSize } from './button'

// Button variants
//
// Easily pump out default styles, as well as :hover, :focus, :active,
// and disabled options for all buttons
describe('buttonVariants', () => {
  it('buttonVariant', () => {
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
        boxShadow: format('0 0 0 {} {}', btnFocusWidth, rgba(borderColor, 0.5))
      },
      '&.disabled, &:disabled': {
        color: colorYiq(backgroundColor),
        backgroundColor: backgroundColor,
        borderColor: borderColor
      },
      '&:not(:disabled):not(.disabled):active, &:not(:disabled):not(.disabled).active, .show > &.dropdown-toggle': {
        color: colorYiq(activeBackgroundColor),
        backgroundColor: activeBackgroundColor,
        borderColor: activeBorderColor
      },
      '&:focus': {
        boxShadow: format('0 0 0 {} {}', btnFocusWidth, rgba(borderColor, 0.5))
      }
    })
  })

  it('buttonVariant, enable shadows, enable gradients', () => {
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
        boxShadow: format('{}, 0 0 0 {} {}', btnBoxShadow, btnFocusWidth, rgba(borderColor, 0.5))
      },
      '&.disabled, &:disabled': {
        color: colorYiq(backgroundColor),
        backgroundColor: backgroundColor,
        borderColor: borderColor
      },
      '&:not(:disabled):not(.disabled):active, &:not(:disabled):not(.disabled).active, .show > &.dropdown-toggle': {
        color: colorYiq(activeBackgroundColor),
        backgroundColor: activeBackgroundColor,
        backgrounImage: 'none',
        borderColor: activeBorderColor
      },
      '&:focus': {
        boxShadow: format('{}, 0 0 0 {} {}', myBtnActiveBoxShadow, myBtnFocusWidth, rgba(borderColor, 0.5))
      }
    })
  })

  it('buttonVariant, disable shadows, disable gradients', () => {
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
        boxShadow: format('0 0 0 {} {}', myBtnFocusWidth, rgba(borderColor, 0.5))
      },
      '&.disabled, &:disabled': {
        color: colorYiq(backgroundColor),
        backgroundColor: backgroundColor,
        borderColor: borderColor
      },
      '&:not(:disabled):not(.disabled):active, &:not(:disabled):not(.disabled).active, .show > &.dropdown-toggle': {
        color: colorYiq(activeBackgroundColor),
        backgroundColor: activeBackgroundColor,
        borderColor: activeBorderColor
      },
      '&:focus': {
        boxShadow: format('0 0 0 {} {}', btnFocusWidth, rgba(borderColor, 0.5))
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
        boxShadow: format('0 0 0 {} {}', mybtnFocusWidth, rgba(color, 0.5))
      },
      '&.disabled, &:disabled': {
        color: color,
        backgroundColor: 'tranparent'
      },
      '&:not(:disabled):not(.disabled):active, &:not(:disabled):not(.disabled).active, .show > &.dropdown-toggle': {
        color: colorYiq(ativeBackgroundColor),
        backgroundColor: ativeBackgroundColor,
        borderColor: activeBorderColor,
        '&:focus': {
          boxShadow: format('0 0 0 {} {}', mybtnFocusWidth, rgba(color, 0.5))
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
        boxShadow: format('0 0 0 {} {}', myBtnFocusWidth, rgba(color, 0.5))
      },
      '&.disabled, &:disabled': {
        color: color,
        backgroundColor: 'tranparent'
      },
      '&:not(:disabled):not(.disabled):active, &:not(:disabled):not(.disabled).active, .show > &.dropdown-toggle': {
        color: colorYiq(ativeBackgroundColor),
        backgroundColor: ativeBackgroundColor,
        borderColor: activeBorderColor,
        '&:focus': {
          boxShadow: format('{}, 0 0 0 {} {}', btnActiveBoxShadow, myBtnFocusWidth, rgba(color, 0.5))
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
      padding: format('{} {}', paddingY, paddingX),
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
      padding: format('{} {}', paddingY, paddingX),
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
      padding: format('{} {}', paddingY, paddingX),
      fontSize: fontSize,
      lineHeight: lineHeight,
      borderRadius: borderRadius
    })
  })


})
