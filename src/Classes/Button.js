import { fontSizeBase } from '../Variables/Fonts'
import { btnFontWeight, btnBorderWidth, btnPaddingY, btnPaddingX, btnLineHeight, btnBorderRadius, btnTransition, btnFocusBoxShadow, btnDisabledOpacity, btnActiveBoxShadow } from '../Variables/Buttons'
import { buttonSize, buttonVariant, buttonOutlineVariant } from '../Mixins/button'
import { transition } from '../Mixins/transition'
import { hoverFocus } from '../Mixins/hover'
import { boxShadow } from '../Mixins/boxShadow'
import { enableShadows } from '../Variables/Options'
import { themeColors } from '../Variables/Colors'

export const btn = {
  display: 'inline-block',
  fontWeight: btnFontWeight,
  textAlign: 'center',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  userSelect: 'none',
  border: `${btnBorderWidth} solid transparent`,
  ...buttonSize(btnPaddingY, btnPaddingX, fontSizeBase, btnLineHeight, btnBorderRadius),
  ...transition(btnTransition),
  ...hoverFocus({
    textDecoration: 'none'
  }),
  '&:focus, &.focus': {
    outline: 0,
    boxShadow: btnFocusBoxShadow
  },
  '&.disabled, &:disabled': {
    opacity: btnDisabledOpacity,
    ...boxShadow(enableShadows, 'none')
  },
  '&:not(:disabled):not(.disabled)': {
    cursor: 'pointer'
  },
  '&:not(:disabled):not(.disabled):active, &:not(:disabled):not(.disabled).active': {
    backgroundImage: 'none',
    ...boxShadow(enableShadows, btnActiveBoxShadow),
    '&:focus': {
      ...boxShadow(enableShadows, btnFocusBoxShadow, btnActiveBoxShadow)
    }
  }
}

export const btnLink = {}

export const btnLg = {}

export const btnSm = {}

export const btnBlock = {}

export const btnThemeColors = () => {
  let btnColors = {}
  Object.keys(themeColors).forEach(themeColorName => {
    btnColors['btn' + _.upperFirst(themeColorName)] = buttonVariant(themeColors[themeColorName])
  })
  return btnColors
}

export const btnOutlineThemeColors = () => {
  let btnOutlineColors = {}
  Object.keys(themeColors).forEach(themeColorName => {
    btnOutlineColors['btnOutline' + _.upperFirst(themeColorName)] = buttonOutlineVariant(themeColors[themeColorName])
  })
  return btnOutlineColors
}
