import { alertVariant } from './alert'
import { bgVariant, bgGradientVariant } from './backgroundVariant'
import { badgeVariant } from './badge'
import { gradientBg } from './gradients'
import { hover, hoverFocus, plainHoverFocus, hoverFocusActive } from './hover'
import { imgFluid, imgRetina } from './image'
import { resizable } from './resize'
import { srOnly, srOnlyFocusable } from './screenReader'
import { size } from './size'
import { resetText } from './resetText'
import { textEmphasisVariant } from './textEmphasis'
import { textTruncate } from './textTruncate'
import { invisible } from './visibility'
import {lists} from './lists'

import * as Mixins from './index'

describe('Mixins', () => {
  it('Mixins', () => {
    expect(Mixins).toEqual({
      alertVariant,
      bgVariant,
      bgGradientVariant,
      badgeVariant,
      gradientBg,
      hover,
      hoverFocus,
      plainHoverFocus,
      hoverFocusActive,
      imgFluid,
      imgRetina,
      resizable,
      srOnly,
      srOnlyFocusable,
      size,
      resetText,
      textEmphasisVariant,
      textTruncate,
      invisible,
      lists,
      checkExported: true
    })
  })
})
