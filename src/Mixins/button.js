import format from 'string-format'

import {colorYiq} from '../Functions/colorYiq'
import {gradientBg} from './gradients'
import {hover} from './hover'
import {boxShadow} from './boxShadow'
import {rgba} from '../Functions/rgba'

import {btnBoxShadow, btnFocusWidth, btnActiveBoxShadow} from '../Variables/Buttons'

export const buttonVariant = (
  backgroundColor,
  borderColor,
  hoverBackgroundColor,
  hoverBorderColor,
  activeBackgroundColor,
  activeBorderColor,
  enableShadows,
  enableGradients,
  myBtnBoxShadow = btnBoxShadow,
  myBtnFocusWidth = btnFocusWidth,
  myBtnActiveBoxShadow = btnActiveBoxShadow
) => ({
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
    boxShadow: enableShadows
      ? format('{}, 0 0 0 {} {}', myBtnBoxShadow, myBtnFocusWidth, rgba(borderColor, 0.5))
      : format('0 0 0 {} {}', myBtnFocusWidth, rgba(borderColor, 0.5))
  },
  '&.disabled, &:disabled': {
    color: colorYiq(backgroundColor),
    backgroundColor: backgroundColor,
    borderColor: borderColor
  },
  '&:not(:disabled):not(.disabled):active, &:not(:disabled):not(.disabled).active, .show > &.dropdown-toggle':
  enableGradients
    ? {
      color: colorYiq(activeBackgroundColor),
      backgroundColor: activeBackgroundColor,
      backgrounImage: 'none',
      borderColor: activeBorderColor
    }
    : {
      color: colorYiq(activeBackgroundColor),
      backgroundColor: activeBackgroundColor,
      borderColor: activeBorderColor
    },
  '&:focus': {
    boxShadow: enableShadows
      ? format('{}, 0 0 0 {} {}', myBtnActiveBoxShadow, myBtnFocusWidth, rgba(borderColor, 0.5))
      : format('0 0 0 {} {}', myBtnActiveBoxShadow, myBtnFocusWidth, rgba(borderColor, 0.5))
  }
})
