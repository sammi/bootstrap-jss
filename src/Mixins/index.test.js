import { alertVariant } from './alert'
import { bgVariant, bgGradientVariant } from './backgroundVariant'
import { badgeVariant } from './badge'
import { gradientBg } from './gradients'
import { hover, hoverFocus, plainHoverFocus, hoverFocusActive } from './hover'
import { imgFluid, imgRetina } from './image'
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
      lists,
      checkExported: true
    })
  })
})
