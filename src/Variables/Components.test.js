import { grays, black, white, themeColors } from './Colors'
import {rgba} from '../Functions/rgba'
import format from 'string-format'

import {
    lineHeightLg,
    lineHeightSm,
    borderWidth,
    borderColor,
    borderRadius,
    borderRadiusLg,
    borderRadiusSm,
    boxShadowSm,
    boxShadow,
    boxShadowLg,
    componentActiveColor,
    componentActiveBg,
    caretWidth,
    transitionBase,
    transitionFade,
    transitionCollapse
} from './Components'

describe('Components', () => {

    it('Define common padding and border radius sizes and more.', () => {

        expect(lineHeightLg).toEqual('1.5 !default')
        expect(lineHeightSm).toEqual('1.5 !default')

        expect(borderWidth).toEqual('1px !default')
        expect(borderColor).toEqual(grays._300)
        expect(borderRadius).toEqual('.25rem !default')
        expect(borderRadiusLg).toEqual('.3rem !default')
        expect(borderRadiusSm).toEqual('.2rem !default')

        expect(boxShadowSm).toEqual(format('0 .125rem .25rem {} !default', rgba(black, .075)))
        expect(boxShadow).toEqual(format('0 .5rem 1rem {} !default', rgba(black, .15)))
        expect(boxShadowLg).toEqual(format('0 1rem 3rem {} !default', rgba(black, .175)))

        expect(componentActiveColor).toEqual(white)
        expect(componentActiveBg).toEqual(themeColors.primary)

        expect(caretWidth).toEqual('.3em !default')

        expect(transitionBase).toEqual('all .2s ease-in-out !default')
        expect(transitionFade).toEqual('opacity .15s linear !default')
        expect(transitionCollapse).toEqual('height .35s ease !default')
    })

})


