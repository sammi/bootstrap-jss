import _ from 'lodash'
import {rgba} from '../Functions/rgba'
import {lighten} from '../Functions/lighten'
import {size} from '../Functions/size'
import format from 'string-format'
import Color from 'color'


import {white, grays, black, themeColors} from './Colors'
import {bodyColor, bodyBg} from './Body'
import {componentActiveBg, componentActiveColor, borderColor, boxShadow} from './Components'
import {fontSizeBase, smallFontSize, fontSizeSm, fontSizeLg} from './Fonts'
import {borderRadius, borderRadiusLg, borderRadiusSm} from './Buttons'

import {
    inputBtnPaddingY, 
    inputBtnPaddingX, 
    inputBtnLineHeight, 
    inputBtnPaddingYSm,
    inputBtnPaddingXSm,
    inputBtnLineHeightSm,
    inputBtnPaddingYLg,
    inputBtnPaddingXLg,
    inputBtnLineHeightLg,
    inputBtnBorderWidth,
    inputBtnFocusWidth,
    inputBtnFocusBoxShadow
} from './InputButtons'

import {
    labelMarginBottom,
    inputPaddingY,
    inputPaddingX,
    inputLineHeight,
    inputPaddingYSm,
    inputPaddingXSm,
    inputLineHeightSm,
    inputPaddingYLg,
    inputPaddingXLg,
    inputLineHeightLg,
    inputBg,
    inputDisabledBg,
    inputColor,
    inputBorderColor,
    inputBorderWidth,
    inputBoxShadow,
    inputBorderRadius,
    inputBorderRadiusLg,
    inputBorderRadiusSm,
    inputFocusBg,
    inputFocusBorderColor,
    inputFocusColor,
    inputFocusWidth,
    inputFocusBoxShadow,
    inputPlaceholderColor,
    inputPlaintextColor,
    inputHeightBorder,
    inputHeightInner,
    inputHeight,
    inputHeightInnerSm,
    inputHeightSm,
    inputHeightInnerLg,
    inputHeightLg,
    inputTransition,
    formTextMarginTop,
    formCheckInputGutter,
    formCheckInputMarginY,
    formCheckInputMarginX,
    formCheckInlineMarginX,
    formCheckInlineInputMarginX,
    formGroupMarginBottom,
    inputGroupAddonColor,
    inputGroupAddonBg,
    inputGroupAddonBorderColor,
    customControlGutter,
    customControlSpacerX,
    customControlIndicatorSize,
    customControlIndicatorBg,
    customControlIndicatorBgSize,
    customControlIndicatorBoxShadow,
    customControlIndicatorDisabledBg,
    customControlLabelDisabledColor,
    customControlIndicatorCheckedColor,
    customControlIndicatorCheckedBg,
    customControlIndicatorCheckedDisabledBg,
    customControlIndicatorCheckedBoxShadow,
    customControlIndicatorFocusBoxShadow,
    customControlIndicatorActiveColor,
    customControlIndicatorActiveBg,
    customControlIndicatorActiveBoxShadow,
    customCheckboxIndicatorBorderRadius,
    customCheckboxIndicatorIconChecked,
    customCheckboxIndicatorIndeterminateBg,
    customCheckboxIndicatorIndeterminateColor,
    customCheckboxIndicatorIconIndeterminate,
    customCheckboxIndicatorIndeterminateBoxShadow,
    customRadioIndicatorBorderRadius,
    customRadioIndicatorIconChecked,
    customSelectPaddingY,
    customSelectPaddingX,
    customSelectHeight,
    customSelectIndicatorPadding,
    customSelectLineHeight,
    customSelectColor,
    customSelectDisabledColor,
    customSelectBg,
    customSelectDisabledBg,
    customSelectBgSize,
    customSelectIndicatorColor,
    customSelectIndicator,
    customSelectBorderWidth,
    customSelectBorderColor,
    customSelectBorderRadius,
    customSelectFocusBorderColor,
    customSelectFocusBoxShadow,
    customSelectFontSizeSm,
    customSelectHeightSm,
    customSelectFontSizeLg,
    customSelectHeightLg,
    customRangeTrackWidth,
    customRangeTrackHeight,
    customRangeTrackCursor,
    customRangeTrackBg,
    customRangeTrackBorderRadius,
    customRangeTrackBoxShadow,
    customRangeThumbWidth,
    customRangeThumbHeight,
    customRangeThumbBg,
    customRangeThumbBorder,
    customRangeThumbBorderRadius,
    customRangeThumbBoxShadow,
    customRangeThumbFocusBoxShadow,
    customRangeThumbActiveBg,
    customFileHeight,
    customFileFocusBorderColor,
    customFileFocusBoxShadow,
    customFilePaddingY,
    customFilePaddingX,
    customFileLineHeight,
    customFileColor,
    customFileBg,
    customFileBorderWidth,
    customFileBorderColor,
    customFileBorderRadius,
    customFileBoxShadow,
    customFileButtonColor,
    customFileButtonBg,
    customFileText,
    formFeedbackMarginTop,
    formFeedbackFontSize,
    formFeedbackValidColor,
    formFeedbackInvalidColor
} from './Forms'

describe('Forms', () => {
    it('Forms', () => {
        expect(labelMarginBottom).toEqual('.5rem !default')

        expect(inputPaddingY).toEqual(inputBtnPaddingY)
        expect(inputPaddingX).toEqual(inputBtnPaddingX)
        expect(inputLineHeight).toEqual(inputBtnLineHeight)

        expect(inputPaddingYSm).toEqual(inputBtnPaddingYSm)
        expect(inputPaddingXSm).toEqual(inputBtnPaddingXSm)
        expect(inputLineHeightSm).toEqual(inputBtnLineHeightSm)

        expect(inputPaddingYLg).toEqual(inputBtnPaddingYLg)
        expect(inputPaddingXLg).toEqual(inputBtnPaddingXLg)
        expect(inputLineHeightLg).toEqual(inputBtnLineHeightLg)

        expect(inputBg).toEqual(white)
        expect(inputDisabledBg).toEqual(grays._200)

        expect(inputColor).toEqual(grays._700)
        expect(inputBorderColor).toEqual(grays._400)
        expect(inputBorderWidth).toEqual(inputBtnBorderWidth)
        expect(inputBoxShadow).toEqual(format('inset 0 1px 1px {} !default', rgba(black, .075)))

        expect(inputBorderRadius).toEqual(borderRadius)
        expect(inputBorderRadiusLg).toEqual(borderRadiusLg)
        expect(inputBorderRadiusSm).toEqual(borderRadiusSm)

        expect(inputFocusBg).toEqual(inputBg)
        expect(inputFocusBorderColor).toEqual(format('{} !default', lighten(componentActiveBg, '25%')))
        expect(inputFocusColor).toEqual(inputColor)
        expect(inputFocusWidth).toEqual(inputBtnFocusWidth)
        expect(inputFocusBoxShadow).toEqual(inputBtnFocusBoxShadow)

        expect(inputPlaceholderColor).toEqual(grays._600)
        expect(inputPlaintextColor).toEqual(bodyColor)

        expect(inputHeightBorder).toEqual(format('{}{} !default', size(inputBorderWidth).value * 2, size(inputBorderWidth).unit))

        expect(inputHeightInner).toEqual(format('{}{} + {}{} !default', 
            size(fontSizeBase).value * size(inputBtnLineHeight).value, size(fontSizeBase).unit,
            size(inputBtnPaddingY).value * 2, size(fontSizeBase).unit
        ))

        expect(inputHeight).toEqual(format('calc({}{} + {}{}) !default', 
            size(inputHeightInner).value, size(inputHeightInner).unit, 
            size(inputHeightBorder).value, size(inputHeightBorder).unit
        ))

        expect(inputHeightInnerSm).toEqual(format('{}{} !default',
            size(fontSizeSm).value * size(inputBtnLineHeightSm).value + size(inputBtnPaddingYSm).value * 2, 
            size(fontSizeSm).unit
        ))

        expect(inputHeightSm).toEqual(format('calc({} + {}) !default',
            size(inputHeightInnerSm).value, size(inputHeightInnerSm).unit, 
            size(inputHeightBorder).value, size(inputHeightBorder).unit
        ))

        expect(inputHeightInnerLg).toEqual(format('{}{} !default',
            size(fontSizeLg).value * size(inputBtnLineHeightLg).value + size(inputBtnPaddingYLg).value * 2, 
            size(fontSizeLg).unit
        ))

        expect(inputHeightLg).toEqual(format('calc({}{} + {}{}) !default',
            size(inputHeightInnerLg).value, size(inputHeightInnerLg).unit,
            size(inputHeightBorder).value, size(inputHeightBorder).unit
        ))

        expect(inputTransition).toEqual(format('{} .15s easeIn - out, {} .15s easeIn - out!default', borderColor, boxShadow))

        expect(formTextMarginTop).toEqual('.25rem !default')

        expect(formCheckInputGutter).toEqual('1.25rem !default')
        expect(formCheckInputMarginY).toEqual('.3rem !default')
        expect(formCheckInputMarginX).toEqual('.25rem !default')

        expect(formCheckInlineMarginX).toEqual('.75rem !default')
        expect(formCheckInlineInputMarginX).toEqual('.3125rem !default')

        expect(formGroupMarginBottom).toEqual('1rem !default')

        expect(inputGroupAddonColor).toEqual(inputColor)
        expect(inputGroupAddonBg).toEqual(grays._200)
        expect(inputGroupAddonBorderColor).toEqual(inputBorderColor)

        expect(customControlGutter).toEqual('1.5rem !default')
        expect(customControlSpacerX).toEqual('1rem !default')

        expect(customControlIndicatorSize).toEqual('1rem !default')
        expect(customControlIndicatorBg).toEqual(grays._300)
        expect(customControlIndicatorBgSize).toEqual('50% 50% !default')
        expect(customControlIndicatorBoxShadow).toEqual(format('inset 0 .25rem .25rem {} !default', rgba(black, .1)))

        expect(customControlIndicatorDisabledBg).toEqual(grays._200)
        expect(customControlLabelDisabledColor).toEqual(grays._600)

        expect(customControlIndicatorCheckedColor).toEqual(componentActiveColor)
        expect(customControlIndicatorCheckedBg).toEqual(componentActiveBg)
        expect(customControlIndicatorCheckedDisabledBg).toEqual(format('{} !default', rgba(themeColors.primary, .5)))
        expect(customControlIndicatorCheckedBoxShadow).toEqual('none !default')

        expect(customControlIndicatorFocusBoxShadow).toEqual(format(
            '0 0 0 1px {}, {} !default',
            bodyBg,
            inputBtnFocusBoxShadow
        ))

        expect(customControlIndicatorActiveColor).toEqual(componentActiveColor)
        expect(customControlIndicatorActiveBg).toEqual(format('{} !default', lighten(componentActiveBg, '35%')))
        expect(customControlIndicatorActiveBoxShadow).toEqual('none !default')

        expect(customCheckboxIndicatorBorderRadius).toEqual(borderRadius)

        expect(customCheckboxIndicatorIconChecked).toEqual(format(
            '{} !default', 
            format(
                "data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='{}' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E",
                _.replace(customControlIndicatorCheckedColor, '!default', '').trim()
            )
        ))

        expect(customCheckboxIndicatorIndeterminateBg).toEqual(componentActiveBg)
        
        expect(customCheckboxIndicatorIndeterminateColor).toEqual(customControlIndicatorCheckedColor)

        expect(customCheckboxIndicatorIconIndeterminate).toEqual(format(
            '{} !default', 
            format(
                "data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='{}' d='M0 2h4'/%3E%3C/svg%3E",
                _.replace(customCheckboxIndicatorIndeterminateColor, '!default', '').trim()
            )
        ))

        expect(customCheckboxIndicatorIndeterminateBoxShadow).toEqual('none !default')
        expect(customRadioIndicatorBorderRadius).toEqual('50% !default')

        expect(customRadioIndicatorIconChecked).toEqual(format(
            '{} !default', 
            format(
                "data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='{}' /%3E%3C/svg%3E",
                _.replace(customControlIndicatorCheckedColor, '!default', '').trim()
            )
        ))

        expect(customSelectPaddingY).toEqual('.375rem !default')
        expect(customSelectPaddingX).toEqual('.75rem !default')
        expect(customSelectHeight).toEqual(inputHeight)
        expect(customSelectIndicatorPadding).toEqual('1rem !default')
        expect(customSelectLineHeight).toEqual(inputBtnLineHeight)
        expect(customSelectColor).toEqual(inputColor)
        expect(customSelectDisabledColor).toEqual(grays._600)
        expect(customSelectBg).toEqual(inputBg)
        expect(customSelectDisabledBg).toEqual(grays._200)
        expect(customSelectBgSize).toEqual('8px 10px !default')

        expect(customSelectIndicatorColor).toEqual(grays._800)

        expect(customSelectIndicator).toEqual(format(
            '{} !default', 
            format(
                "data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='{}' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E",
                _.replace(customSelectIndicatorColor, '!default', '').trim()
            )
        ))

        expect(customSelectBorderWidth).toEqual(inputBtnBorderWidth)
        expect(customSelectBorderColor).toEqual(inputBorderColor)

        expect(customSelectBorderRadius).toEqual(borderRadius)
        expect(customSelectFocusBorderColor).toEqual(inputFocusBorderColor)

        expect(customSelectFocusBoxShadow).toEqual(format(
            'inset 0 1px 2px {}, 0 0 5px {} !default',
            rgba(black, .075),
            rgba(customSelectFocusBorderColor, .5)
        ))

        expect(customSelectFontSizeSm).toEqual('75% !default')
        expect(customSelectHeightSm).toEqual(inputHeightSm)

        expect(customSelectFontSizeLg).toEqual('125% !default')
        expect(customSelectHeightLg).toEqual(inputHeightLg)

        expect(customRangeTrackWidth).toEqual('100% !default')
        expect(customRangeTrackHeight).toEqual('.5rem !default')
        expect(customRangeTrackCursor).toEqual('pointer !default')
        expect(customRangeTrackBg).toEqual(grays._300)
        expect(customRangeTrackBorderRadius).toEqual('1rem !default')
        expect(customRangeTrackBoxShadow).toEqual(format('inset 0 .25rem .25rem {} !default', rgba(black, .1)))

        expect(customRangeThumbWidth).toEqual('1rem !default')
        expect(customRangeThumbHeight).toEqual(customRangeThumbWidth)
        expect(customRangeThumbBg).toEqual(componentActiveBg)
        expect(customRangeThumbBorder).toEqual('0 !default')
        expect(customRangeThumbBorderRadius).toEqual('1rem !default')
        expect(customRangeThumbBoxShadow).toEqual(format('0 .1rem .25rem {} !default', rgba(black, .1)))
        expect(customRangeThumbFocusBoxShadow).toEqual(format('0 0 0 1px {}, {} !default', bodyBg, inputBtnFocusBoxShadow))
        expect(customRangeThumbActiveBg).toEqual(format('{} !default', lighten(componentActiveBg, '35%')))

        expect(customFileHeight).toEqual(inputHeight)
        expect(customFileFocusBorderColor).toEqual(inputFocusBorderColor)
        expect(customFileFocusBoxShadow).toEqual(inputBtnFocusBoxShadow)

        expect(customFilePaddingY).toEqual(inputBtnPaddingY)
        expect(customFilePaddingX).toEqual(inputBtnPaddingX)
        expect(customFileLineHeight).toEqual(inputBtnLineHeight)
        expect(customFileColor).toEqual(inputColor)
        expect(customFileBg).toEqual(inputBg)
        expect(customFileBorderWidth).toEqual(inputBtnBorderWidth)
        expect(customFileBorderColor).toEqual(inputBorderColor)
        expect(customFileBorderRadius).toEqual(inputBorderRadius)
        expect(customFileBoxShadow).toEqual(inputBoxShadow)
        expect(customFileButtonColor).toEqual(customFileColor)
        expect(customFileButtonBg).toEqual(inputGroupAddonBg)


        expect(customFileText).toEqual({ en: "Browse" })

        // Form validation
        expect(formFeedbackMarginTop).toEqual(formTextMarginTop)
        expect(formFeedbackFontSize).toEqual(smallFontSize)
        expect(formFeedbackValidColor).toEqual(themeColors.success)
        expect(formFeedbackInvalidColor).toEqual(themeColors.danger)
    })
})
