import {lineHeightBase} from './Fonts'
import {borderWidth, borderRadiusLg} from './Components'
import format from 'string-format'
import {rgba} from '../Functions/rgba'
import {grays, black, white} from './Colors'

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
        expect(modalInnerPadding).toEqual('1rem !default')

        expect(modalDialogMargin).toEqual('.5rem !default')
        expect(modalDialogMarginYSmUp).toEqual('1.75rem !default')

        expect(modalTitleLineHeight).toEqual(lineHeightBase)

        expect(modalContentBg).toEqual(white)
        expect(modalContentBorderColor).toEqual(format('{} !default', rgba(black, .2)))
        expect(modalContentBorderWidth).toEqual(borderWidth)
        expect(modalContentBorderRadius).toEqual(borderRadiusLg)
        expect(modalContentBoxShadowXs).toEqual(format('0 .25rem .5rem {} !default', rgba(black, .5)))
        expect(modalContentBoxShadowSmUp).toEqual(format('0 .5rem 1rem {} !default', rgba(black, .5)))

        expect(modalBackdropBg).toEqual(black)
        expect(modalBackdropOpacity).toEqual('.5 !default')
        expect(modalHeaderBorderColor).toEqual(grays._200)
        expect(modalFooterBorderColor).toEqual(modalHeaderBorderColor)
        expect(modalHeaderBorderWidth).toEqual(modalContentBorderWidth)
        expect(modalFooterBorderWidth).toEqual(modalHeaderBorderWidth)
        expect(modalHeaderPadding).toEqual('1rem !default')

        expect(modalLg).toEqual('800px !default')
        expect(modalMd).toEqual('500px !default')
        expect(modalSm).toEqual('300px !default')

        expect(modalTransition).toEqual('transform .3s easeOut !default')
    })
})
