import format from 'string-format'

import { colorYiq } from '../Functions/colorYiq'
import { gradientBg } from './gradients'
import { hover } from './hover'
import { boxShadow } from './boxShadow'
import { rgba } from '../Functions/rgba'
import { darken } from '../Functions/darken'

import { btnBoxShadow, btnFocusWidth, btnActiveBoxShadow } from '../Variables/Buttons'
import { enableShadows, enableGradients } from '../Variables/Options'

export const buttonVariant = (
  backgroundColor,
  borderColor,
  hoverBackgroundColor,
  hoverBorderColor,
  activeBackgroundColor,
  activeBorderColor,
  myEnableShadows = enableShadows,
  myEnableGradients = enableGradients,
  myBtnBoxShadow = btnBoxShadow,
  myBtnFocusWidth = btnFocusWidth,
  myBtnActiveBoxShadow = btnActiveBoxShadow
) => {
  hoverBackgroundColor = hoverBackgroundColor || darken(backgroundColor, '7.5%')
  hoverBorderColor = hoverBorderColor || darken(borderColor, '10%')
  activeBackgroundColor = activeBackgroundColor || darken(backgroundColor, '10%')
  activeBorderColor = activeBorderColor || darken(borderColor, '12.5%')

  return {
    color: colorYiq(backgroundColor),
    ...gradientBg(backgroundColor),
    borderColor: borderColor,
    ...boxShadow(myEnableShadows, myBtnBoxShadow),
    ...hover({
      color: colorYiq(hoverBackgroundColor),
      ...gradientBg(hoverBackgroundColor),
      borderColor: hoverBorderColor
    }),
    '&:focus, &.focus': {
      boxShadow: myEnableShadows
        ? format('{}, 0 0 0 {} {}', myBtnBoxShadow, myBtnFocusWidth, rgba(borderColor, 0.5))
        : format('0 0 0 {} {}', myBtnFocusWidth, rgba(borderColor, 0.5))
    },
    '&.disabled, &:disabled': {
      color: colorYiq(backgroundColor),
      backgroundColor: backgroundColor,
      borderColor: borderColor
    },
    '&:not(:disabled):not(.disabled):active, &:not(:disabled):not(.disabled).active, .show > &.dropdown-toggle':
  myEnableGradients
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
      boxShadow: myEnableShadows
        ? format('{}, 0 0 0 {} {}', myBtnActiveBoxShadow, myBtnFocusWidth, rgba(borderColor, 0.5))
        : format('0 0 0 {} {}', myBtnFocusWidth, rgba(borderColor, 0.5))
    }
  }
}
