import { lineHeightBase } from './Fonts'
import { borderWidth, borderRadiusLg } from './Components'
import { rgba } from '../Functions/rgba'
import { grays, black, white } from './Colors'

import {
  modalInnerPadding,
  modalDialogMargin,
  modalDialogMarginYSmUp,
  modalTitleLineHeight,
  modalContentBg,
  modalContentBorderColor,
  modalContentBorderWidth,
  modalContentBorderRadius,
  modalContentBoxShadowXs,
  modalContentBoxShadowSmUp,
  modalBackdropBg,
  modalBackdropOpacity,
  modalHeaderBorderColor,
  modalFooterBorderColor,
  modalHeaderBorderWidth,
  modalFooterBorderWidth,
  modalHeaderPadding,
  modalLg,
  modalMd,
  modalSm,
  modalTransition
} from './Modals'
describe('Modals', () => {
  it('Padding applied to the modal body', () => {
    expect(modalInnerPadding).toEqual('1rem')

    expect(modalDialogMargin).toEqual('.5rem')
    expect(modalDialogMarginYSmUp).toEqual('1.75rem')

    expect(modalTitleLineHeight).toEqual(lineHeightBase)

    expect(modalContentBg).toEqual(white)
    expect(modalContentBorderColor).toEqual(rgba(black, 0.2))
    expect(modalContentBorderWidth).toEqual(borderWidth)
    expect(modalContentBorderRadius).toEqual(borderRadiusLg)
    expect(modalContentBoxShadowXs).toEqual(`0 .25rem .5rem ${rgba(black, 0.5)}`)
    expect(modalContentBoxShadowSmUp).toEqual(`0 .5rem 1rem ${rgba(black, 0.5)}`)

    expect(modalBackdropBg).toEqual(black)
    expect(modalBackdropOpacity).toEqual(0.5)
    expect(modalHeaderBorderColor).toEqual(grays._200)
    expect(modalFooterBorderColor).toEqual(modalHeaderBorderColor)
    expect(modalHeaderBorderWidth).toEqual(modalContentBorderWidth)
    expect(modalFooterBorderWidth).toEqual(modalHeaderBorderWidth)
    expect(modalHeaderPadding).toEqual('1rem')

    expect(modalLg).toEqual('800px')
    expect(modalMd).toEqual('500px')
    expect(modalSm).toEqual('300px')

    expect(modalTransition).toEqual('transform .3s easeOut')
  })
})
