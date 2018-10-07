import { colorYiq } from '../Functions/colorYiq'
import { gradientBg } from './gradients'
import { hover } from './hover'
import { boxShadow } from './boxShadow'
import { rgba } from '../Functions/rgba'
import { darken } from '../Functions/darken'

import { btnBoxShadow, btnFocusWidth, btnActiveBoxShadow } from '../Variables/Buttons'
import { enableShadows, enableGradients, enableRounded } from '../Variables/Options'
import { caret } from './caret'

const buttonVariant = (
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
    dropdownToggle: {
      ...caret()
    },
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
        ? `${myBtnBoxShadow}, 0 0 0 ${myBtnFocusWidth} ${rgba(borderColor, 0.5)}`
        : `0 0 0 ${myBtnFocusWidth} ${rgba(borderColor, 0.5)}`
    },
    '&.disabled, &:disabled': {
      color: colorYiq(backgroundColor),
      backgroundColor: backgroundColor,
      borderColor: borderColor
    },
    '&:not(:disabled):not(.disabled):active, &:not(:disabled):not(.disabled).active, &.show > &$dropdownToggle':
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
        ? `${myBtnActiveBoxShadow}, 0 0 0 ${myBtnFocusWidth} ${rgba(borderColor, 0.5)}`
        : `0 0 0 ${myBtnFocusWidth} ${rgba(borderColor, 0.5)}`
    }
  }
}

const buttonOutlineVariant = (color, colorHover, ativeBackgroundColor, activeBorderColor, mybtnFocusWidth, myEnableShadows) => {
  colorHover = colorHover || colorYiq(color)
  ativeBackgroundColor = ativeBackgroundColor || color
  activeBorderColor = activeBorderColor || color
  mybtnFocusWidth = mybtnFocusWidth || btnFocusWidth
  myEnableShadows = myEnableShadows || enableShadows

  return {
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
        boxShadow: myEnableShadows
          ? `${btnActiveBoxShadow}, 0 0 0 ${mybtnFocusWidth} ${rgba(color, 0.5)}`
          : `0 0 0 ${mybtnFocusWidth} ${rgba(color, 0.5)}`
      }
    }
  }
}

const buttonSize = (paddingY, paddingX, fontSize, lineHeight, borderRadius, myEnableRounded) => {
  myEnableRounded = myEnableRounded === undefined ? enableRounded : myEnableRounded
  const myBorderRaduis = myEnableRounded ? borderRadius : 0
  return {
    padding: `${paddingY} ${paddingX}`,
    fontSize: fontSize,
    lineHeight: lineHeight,
    borderRadius: myBorderRaduis
  }
}

export {
  buttonVariant,
  buttonOutlineVariant,
  buttonSize
}
