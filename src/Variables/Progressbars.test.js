import {fontSizeBase} from './Fonts'
import {grays, white, black, themeColors} from './Colors'
import {borderRadius} from './Components'
import format from 'string-format'
import {size} from '../Functions/size'
import {rgba} from '../Functions/rgba'

import {
    progressHeight,
    progressFontSize,
    progressBg,
    progressBorderRadius,
    progressBoxShadow,
    progressBarColor,
    progressBarBg,
    progressBarAnimationTiming,
    progressBarTransition
    } from './Progressbars'

describe('Progressbars', () => {
    it('Progressbars', () => {
        expect(progressHeight).toEqual('1rem !default')
        expect(progressFontSize).toEqual(format('{}{} !default', size(fontSizeBase).value * .75, size(fontSizeBase).unit))
        expect(progressBg).toEqual(grays._200)
        expect(progressBorderRadius).toEqual(borderRadius)
        expect(progressBoxShadow).toEqual(format('inset 0 .1rem .1rem {} !default', rgba(black, .1)))
        expect(progressBarColor).toEqual(white)
        expect(progressBarBg).toEqual(themeColors.primary)
        expect(progressBarAnimationTiming).toEqual('1s linear infinite !default')
        expect(progressBarTransition).toEqual('width .6s ease !default')
    })
})
