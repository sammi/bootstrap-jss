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

import {
  btn,
  btnLink,
  btnLg,
  btnSm,
  btnBlock,
  btnThemeColors,
  btnOutlineThemeColors
} from './Buttons'
import jss from 'jss'
import preset from 'jss-preset-default'
jss.setup(preset())

describe('Button classes', () => {
  it('btn', () => {
    expect(btn).toEqual({
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
    })
    expect(jss.createStyleSheet({ active: {}, btn }).toString()).toBeDefined()
  })
  it('btnThemeColors', () => {
    const btnColors = btnThemeColors()
    Object.keys(themeColors).forEach(themeColorName => {
      expect(btnColors['btn' + _.upperFirst(themeColorName)]).toEqual(
        buttonVariant(themeColors[themeColorName])
      )
    })
    expect(jss.createStyleSheet({ btnColors }).toString()).toBeDefined()
  })

  it('btnThemeColors', () => {
    const btnOutlineColors = btnOutlineThemeColors()
    Object.keys(themeColors).forEach(themeColorName => {
      expect(btnOutlineColors['btnOutline' + _.upperFirst(themeColorName)]).toEqual(
        buttonOutlineVariant(themeColors[themeColorName])
      )
    })
    expect(jss.createStyleSheet({ btnOutlineColors }).toString()).toBeDefined()
  })

  it('btnLink', () => {
    expect(btnLink).toEqual({
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
    })

    expect(jss.createStyleSheet({ btnLink }).toString()).toBeDefined()
  })

  it('btn-lg', () => {
    expect(btnLg).toEqual({
      ...buttonSize(btnPaddingYLg, btnPaddingXLg, fontSizeLg, btnLineHeightLg, btnBorderRadiusLg)
    })
    expect(jss.createStyleSheet({ btnLg }).toString()).toBeDefined()
  })

  it('btn-sm', () => {
    expect(btnSm).toEqual({
      ...buttonSize(btnPaddingYSm, btnPaddingXSm, fontSizeSm, btnLineHeightSm, btnBorderRadiusSm)
    })
    expect(jss.createStyleSheet({ btnLg }).toString()).toBeDefined()
  })

  it('btn-block', () => {
    expect(btnBlock).toEqual({
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
    })
    expect(jss.createStyleSheet({ btnBlock }).toString()).toBeDefined()
  })
})
