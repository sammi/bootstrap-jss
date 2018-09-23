import _ from 'lodash'
import { rgba } from '../Functions/rgba'
import { lighten } from '../Functions/lighten'
import { size } from '../Functions/size'

import { white, grays, black, themeColors } from './Colors'
import { bodyColor, bodyBg } from './Body'
import { componentActiveBg, componentActiveColor, borderColor, boxShadow, borderRadius, borderRadiusLg, borderRadiusSm } from './Components'
import { fontSizeBase, smallFontSize, fontSizeSm, fontSizeLg } from './Fonts'

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
    expect(labelMarginBottom).toEqual('.5rem')

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
    expect(inputBoxShadow).toEqual(`inset 0 1px 1px ${rgba(black, 0.075)}`)

    expect(inputBorderRadius).toEqual(borderRadius)
    expect(inputBorderRadiusLg).toEqual(borderRadiusLg)
    expect(inputBorderRadiusSm).toEqual(borderRadiusSm)

    expect(inputFocusBg).toEqual(inputBg)
    expect(inputFocusBorderColor).toEqual(lighten(componentActiveBg, '25%'))
    expect(inputFocusColor).toEqual(inputColor)
    expect(inputFocusWidth).toEqual(inputBtnFocusWidth)
    expect(inputFocusBoxShadow).toEqual(inputBtnFocusBoxShadow)

    expect(inputPlaceholderColor).toEqual(grays._600)
    expect(inputPlaintextColor).toEqual(bodyColor)

    expect(inputHeightBorder).toEqual(`${size(inputBorderWidth).value * 2}${size(inputBorderWidth).unit}`)

    expect(inputHeightInner).toEqual(
      `${size(fontSizeBase).value * size(inputBtnLineHeight).value}${size(fontSizeBase).unit} + ${size(inputBtnPaddingY).value * 2}${size(fontSizeBase).unit}`
    )

    expect(inputHeight).toEqual(`calc(${inputHeightInner} + ${inputHeightBorder})`)

    expect(inputHeightInnerSm).toEqual(`${size(fontSizeSm).value * size(inputBtnLineHeightSm).value + size(inputBtnPaddingYSm).value * 2}${size(fontSizeSm).unit}`)

    expect(inputHeightSm).toEqual(`calc(${inputHeightInnerSm} + ${inputHeightBorder})`)

    expect(inputHeightInnerLg).toEqual(`${size(fontSizeLg).value * size(inputBtnLineHeightLg).value + size(inputBtnPaddingYLg).value * 2}${size(fontSizeLg).unit}`)

    expect(inputHeightLg).toEqual(`calc(${inputHeightInnerLg} + ${inputHeightBorder})`)

    expect(inputTransition).toEqual(`${borderColor} .15s easeIn - out, ${boxShadow} .15s easeIn - out`)

    expect(formTextMarginTop).toEqual('.25rem')

    expect(formCheckInputGutter).toEqual('1.25rem')
    expect(formCheckInputMarginY).toEqual('.3rem')
    expect(formCheckInputMarginX).toEqual('.25rem')

    expect(formCheckInlineMarginX).toEqual('.75rem')
    expect(formCheckInlineInputMarginX).toEqual('.3125rem')

    expect(formGroupMarginBottom).toEqual('1rem')

    expect(inputGroupAddonColor).toEqual(inputColor)
    expect(inputGroupAddonBg).toEqual(grays._200)
    expect(inputGroupAddonBorderColor).toEqual(inputBorderColor)

    expect(customControlGutter).toEqual('1.5rem')
    expect(customControlSpacerX).toEqual('1rem')

    expect(customControlIndicatorSize).toEqual('1rem')
    expect(customControlIndicatorBg).toEqual(grays._300)
    expect(customControlIndicatorBgSize).toEqual('50% 50%')
    expect(customControlIndicatorBoxShadow).toEqual(`inset 0 .25rem .25rem ${rgba(black, 0.1)}`)

    expect(customControlIndicatorDisabledBg).toEqual(grays._200)
    expect(customControlLabelDisabledColor).toEqual(grays._600)

    expect(customControlIndicatorCheckedColor).toEqual(componentActiveColor)
    expect(customControlIndicatorCheckedBg).toEqual(componentActiveBg)
    expect(customControlIndicatorCheckedDisabledBg).toEqual(rgba(themeColors.primary, 0.5))
    expect(customControlIndicatorCheckedBoxShadow).toEqual('none')

    expect(customControlIndicatorFocusBoxShadow).toEqual(`0 0 0 1px ${bodyBg}, ${inputBtnFocusBoxShadow}`)

    expect(customControlIndicatorActiveColor).toEqual(componentActiveColor)
    expect(customControlIndicatorActiveBg).toEqual(lighten(componentActiveBg, '35%'))
    expect(customControlIndicatorActiveBoxShadow).toEqual('none')

    expect(customCheckboxIndicatorBorderRadius).toEqual(borderRadius)

    expect(customCheckboxIndicatorIconChecked).toEqual(`data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='${_.replace(customControlIndicatorCheckedColor, '', '').trim()}' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E`)

    expect(customCheckboxIndicatorIndeterminateBg).toEqual(componentActiveBg)

    expect(customCheckboxIndicatorIndeterminateColor).toEqual(customControlIndicatorCheckedColor)

    expect(customCheckboxIndicatorIconIndeterminate).toEqual(`data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='${_.replace(customCheckboxIndicatorIndeterminateColor, '', '').trim()}' d='M0 2h4'/%3E%3C/svg%3E`)

    expect(customCheckboxIndicatorIndeterminateBoxShadow).toEqual('none')
    expect(customRadioIndicatorBorderRadius).toEqual('50%')

    expect(customRadioIndicatorIconChecked).toEqual(`data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='${_.replace(customControlIndicatorCheckedColor, '', '').trim()}' /%3E%3C/svg%3E`)

    expect(customSelectPaddingY).toEqual('.375rem')
    expect(customSelectPaddingX).toEqual('.75rem')
    expect(customSelectHeight).toEqual(inputHeight)
    expect(customSelectIndicatorPadding).toEqual('1rem')
    expect(customSelectLineHeight).toEqual(inputBtnLineHeight)
    expect(customSelectColor).toEqual(inputColor)
    expect(customSelectDisabledColor).toEqual(grays._600)
    expect(customSelectBg).toEqual(inputBg)
    expect(customSelectDisabledBg).toEqual(grays._200)
    expect(customSelectBgSize).toEqual('8px 10px')

    expect(customSelectIndicatorColor).toEqual(grays._800)

    expect(customSelectIndicator).toEqual(`data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='${_.replace(customSelectIndicatorColor, '', '').trim()}' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E`)

    expect(customSelectBorderWidth).toEqual(inputBtnBorderWidth)
    expect(customSelectBorderColor).toEqual(inputBorderColor)

    expect(customSelectBorderRadius).toEqual(borderRadius)
    expect(customSelectFocusBorderColor).toEqual(inputFocusBorderColor)

    expect(customSelectFocusBoxShadow).toEqual(`inset 0 1px 2px ${rgba(black, 0.075)}, 0 0 5px ${rgba(customSelectFocusBorderColor, 0.5)}`)

    expect(customSelectFontSizeSm).toEqual('75%')
    expect(customSelectHeightSm).toEqual(inputHeightSm)

    expect(customSelectFontSizeLg).toEqual('125%')
    expect(customSelectHeightLg).toEqual(inputHeightLg)

    expect(customRangeTrackWidth).toEqual('100%')
    expect(customRangeTrackHeight).toEqual('.5rem')
    expect(customRangeTrackCursor).toEqual('pointer')
    expect(customRangeTrackBg).toEqual(grays._300)
    expect(customRangeTrackBorderRadius).toEqual('1rem')
    expect(customRangeTrackBoxShadow).toEqual(`inset 0 .25rem .25rem ${rgba(black, 0.1)}`)

    expect(customRangeThumbWidth).toEqual('1rem')
    expect(customRangeThumbHeight).toEqual(customRangeThumbWidth)
    expect(customRangeThumbBg).toEqual(componentActiveBg)
    expect(customRangeThumbBorder).toEqual('0')
    expect(customRangeThumbBorderRadius).toEqual('1rem')
    expect(customRangeThumbBoxShadow).toEqual(`0 .1rem .25rem ${rgba(black, 0.1)}`)
    expect(customRangeThumbFocusBoxShadow).toEqual(`0 0 0 1px ${bodyBg}, ${inputBtnFocusBoxShadow}`)
    expect(customRangeThumbActiveBg).toEqual(lighten(componentActiveBg, '35%'))

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

    expect(customFileText).toEqual({ en: 'Browse' })

    // Form validation
    expect(formFeedbackMarginTop).toEqual(formTextMarginTop)
    expect(formFeedbackFontSize).toEqual(smallFontSize)
    expect(formFeedbackValidColor).toEqual(themeColors.success)
    expect(formFeedbackInvalidColor).toEqual(themeColors.danger)
  })
})
