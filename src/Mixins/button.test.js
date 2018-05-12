import {darken} from '../Functions/darken'
import {rgba} from '../Functions/rgba'
import {colorYiq} from '../Functions/colorYiq'
import {gradientBg} from './gradients'
import {boxShadow} from './boxShadow'

import {btnBoxShadow, btnFocusWidth, btnActiveBoxShadow} from '../Variables/Buttons'

import {hover} from './hover'
import format from 'string-format'

import {buttonVariant} from './button'

describe('Button Variants', () => {
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
      ...boxShadow(btnBoxShadow),
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
      ...boxShadow(myBtnBoxShadow),
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
})
