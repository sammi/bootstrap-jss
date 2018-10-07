import { fontSizeBase, fontWeightNormal, fontSizeLg, fontSizeSm } from '../Variables/Fonts'
import { linkColor, linkHoverColor, linkHoverDecoration } from '../Variables/Links'
import {
  btnFontWeight, btnBorderWidth, btnPaddingY, btnPaddingX, btnLineHeight,
  btnBorderRadius, btnTransition, btnFocusBoxShadow, btnDisabledOpacity,
  btnActiveBoxShadow, btnLinkDisabledColor,
  btnPaddingYLg, btnPaddingXLg, btnLineHeightLg, btnBorderRadiusLg,
  btnPaddingYSm, btnPaddingXSm, btnLineHeightSm, btnBorderRadiusSm,
  btnBlockSpacingY
} from '../Variables/Buttons'
import { buttonSize, buttonVariant, buttonOutlineVariant } from '../Mixins/buttons'
import { transition } from '../Mixins/transition'
import { hoverFocus, hover } from '../Mixins/hover'
import { boxShadow } from '../Mixins/boxShadow'
import { enableShadows } from '../Variables/Options'
import { themeColors } from '../Variables/Colors'
import _ from 'lodash'

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
  '&:not(:disabled):not(.disabled):active, &:not(:disabled):not(.disabled)$active': {
    backgroundImage: 'none',
    ...boxShadow(enableShadows, btnActiveBoxShadow),
    '&:focus': {
      ...boxShadow(enableShadows, btnFocusBoxShadow, btnActiveBoxShadow)
    }
  },
  '&a&.disabled, fieldset:disabled a&': {
    pointerEvents: 'none'
  }
}

export const btnLink = {
  fontWeight: fontWeightNormal,
  color: linkColor,
  backgroundColor: 'transparent',
  ...hover({
    color: linkHoverColor,
    textDecoration: linkHoverDecoration,
    backgroundColor: 'transparent',
    borderColor: 'transparent'
  }),
  '&:focus, &.focus': {
    textDecoration: linkHoverDecoration,
    borderColor: 'transparent',
    boxShadow: 'none'
  },
  '&:disabled,&.disabled': {
    color: btnLinkDisabledColor,
    pointerEvents: 'none'
  }
}

export const btnLg = {
  ...buttonSize(btnPaddingYLg, btnPaddingXLg, fontSizeLg, btnLineHeightLg, btnBorderRadiusLg)
}

export const btnSm = {
  ...buttonSize(btnPaddingYSm, btnPaddingXSm, fontSizeSm, btnLineHeightSm, btnBorderRadiusSm)
}

export const btnBlock = {
  display: 'block',
  width: '100%',
  '& + &': {
    marginTop: btnBlockSpacingY
  },
  'input[type="submit"],input[type="reset"],input[type="button"]': {
    '&.&': {
      width: '100%'
    }
  }
}

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
