import { breakpointNext, breakpointMin, breakpointMax, breakpointInfix, mediaBreakpointUp, mediaBreakpointDown, mediaBreakpointsBetween, mediaBreakpointsOnly } from './breakpoints'
import { hover, hoverFocus, plainHoverFocus, hoverFocusActive } from './hover'
import { imgFluid, imgRetina } from './image'
import { badgeVariant } from './badge'
import { resizable } from './resize'
import { srOnly, srOnlyFocusable } from './screenReader'
import { size } from './size'
import { resetText } from './resetText'
import { textEmphasisVariant } from './textEmphasis'
import { textHide } from './textHide'
import { textTruncate } from './textTruncate'
import { invisible } from './visibility'

import { alertVariant } from './alert'
import { buttonVariant, buttonOutlineVariant, buttonSize } from './buttons'
import { caretDown, caretUp, caretRight, caretLeft, caret } from './caret'
import { paginationSize } from './pagination'
import { lists } from './lists'
import { listGroupItemVariant } from './listGroup'
import { navDivider } from './navDivider'
import { formControlFocus, formValidationState } from './forms'
import { tableRowVariant } from './tableRow'

import { bgVariant, bgGradientVariant } from './backgroundVariant'
import { borderRadius, borderTopRadius, borderRightRadius, borderBottomRadius, borderLeftRadius } from './borderRadius'
import { boxShadow } from './boxShadow'
import { gradientBg } from './gradients'
import { transition } from './transition'

import * as Mixins from './index'

describe('Mixins', () => {
  it('Mixins', () => {
    expect(Mixins).toEqual({
      breakpointNext,
      breakpointMin,
      breakpointMax,
      breakpointInfix,
      mediaBreakpointUp,
      mediaBreakpointDown,
      mediaBreakpointsBetween,
      mediaBreakpointsOnly,
      hover,
      hoverFocus,
      plainHoverFocus,
      hoverFocusActive,
      imgFluid,
      imgRetina,
      badgeVariant,
      resizable,
      srOnly,
      srOnlyFocusable,
      size,
      resetText,
      textEmphasisVariant,
      textHide,
      textTruncate,
      invisible,

      alertVariant,
      buttonVariant,
      buttonOutlineVariant,
      buttonSize,
      caretDown,
      caretUp,
      caretRight,
      caretLeft,
      caret,
      paginationSize,
      lists,
      listGroupItemVariant,
      navDivider,
      formControlFocus,
      formValidationState,
      tableRowVariant,

      bgVariant,
      bgGradientVariant,
      borderRadius,
      borderTopRadius,
      borderRightRadius,
      borderBottomRadius,
      borderLeftRadius,
      boxShadow,
      gradientBg,
      transition,
      checkExported: true
    })
  })
})
