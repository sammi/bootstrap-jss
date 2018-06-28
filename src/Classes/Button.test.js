import { fontSizeBase } from '../Variables/Fonts'
import { btnFontWeight, btnBorderWidth, btnPaddingY, btnPaddingX, btnLineHeight, btnBorderRadius, btnTransition, btnFocusBoxShadow, btnDisabledOpacity, btnActiveBoxShadow } from '../Variables/Buttons'
import { buttonSize } from '../Mixins/button'
import { transition } from '../Mixins/transition'
import { hoverFocus } from '../Mixins/hover'
import { boxShadow } from '../Mixins/boxShadow'
import { enableShadows } from '../Variables/Options'

import {
  btn,
  btnLink,
  btnLg,
  btnSm,
  btnBlock
} from './Button'

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
      '&:not(:disabled):not(.disabled):active, &:not(:disabled):not(.disabled).active': {
        backgroundImage: 'none',
        ...boxShadow(enableShadows, btnActiveBoxShadow),
        '&:focus': {
          ...boxShadow(enableShadows, btnFocusBoxShadow, btnActiveBoxShadow)
        }
      }
    })
  })

  it('btnLink', () => {
    expect(btnLink).toEqual({})
  })

  it('btnLg', () => {
    expect(btnLg).toEqual({})
  })

  it('btnSm', () => {
    expect(btnSm).toEqual({})
  })

  it('btnBlock', () => {
    expect(btnBlock).toEqual({})
  })
})
