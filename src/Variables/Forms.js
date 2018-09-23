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

export const labelMarginBottom = '.5rem'

export const inputPaddingY = inputBtnPaddingY
export const inputPaddingX = inputBtnPaddingX
export const inputLineHeight = inputBtnLineHeight

export const inputPaddingYSm = inputBtnPaddingYSm
export const inputPaddingXSm = inputBtnPaddingXSm
export const inputLineHeightSm = inputBtnLineHeightSm

export const inputPaddingYLg = inputBtnPaddingYLg
export const inputPaddingXLg = inputBtnPaddingXLg
export const inputLineHeightLg = inputBtnLineHeightLg

export const inputBg = white
export const inputDisabledBg = grays._200

export const inputColor = grays._700
export const inputBorderColor = grays._400
export const inputBorderWidth = inputBtnBorderWidth
export const inputBoxShadow = `inset 0 1px 1px ${rgba(black, 0.075)}`

export const inputBorderRadius = borderRadius
export const inputBorderRadiusLg = borderRadiusLg
export const inputBorderRadiusSm = borderRadiusSm

export const inputFocusBg = inputBg
export const inputFocusBorderColor = lighten(componentActiveBg, '25%')
export const inputFocusColor = inputColor
export const inputFocusWidth = inputBtnFocusWidth
export const inputFocusBoxShadow = inputBtnFocusBoxShadow

export const inputPlaceholderColor = grays._600
export const inputPlaintextColor = bodyColor

export const inputHeightBorder = `${size(inputBorderWidth).value * 2}${size(inputBorderWidth).unit}`

export const inputHeightInner = `${size(fontSizeBase).value * size(inputBtnLineHeight).value}${size(fontSizeBase).unit} + ${size(inputBtnPaddingY).value * 2}${size(fontSizeBase).unit}`

export const inputHeight = `calc(${inputHeightInner} + ${inputHeightBorder})`

export const inputHeightInnerSm = `${size(fontSizeSm).value * size(inputBtnLineHeightSm).value + size(inputBtnPaddingYSm).value * 2}${size(fontSizeSm).unit}`

export const inputHeightSm = `calc(${inputHeightInnerSm} + ${inputHeightBorder})`

export const inputHeightInnerLg = `${size(fontSizeLg).value * size(inputBtnLineHeightLg).value + size(inputBtnPaddingYLg).value * 2}${size(fontSizeLg).unit}`

export const inputHeightLg = `calc(${inputHeightInnerLg} + ${inputHeightBorder})`

export const inputTransition = `${borderColor} .15s easeIn - out, ${boxShadow} .15s easeIn - out`

export const formTextMarginTop = '.25rem'

export const formCheckInputGutter = '1.25rem'
export const formCheckInputMarginY = '.3rem'
export const formCheckInputMarginX = '.25rem'

export const formCheckInlineMarginX = '.75rem'
export const formCheckInlineInputMarginX = '.3125rem'

export const formGroupMarginBottom = '1rem'

export const inputGroupAddonColor = inputColor
export const inputGroupAddonBg = grays._200
export const inputGroupAddonBorderColor = inputBorderColor

export const customFormsTransition = 'background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out'

export const customControlGutter = '1.5rem'
export const customControlSpacerX = '1rem'

export const customControlIndicatorSize = '1rem'
export const customControlIndicatorBg = grays._300
export const customControlIndicatorBgSize = '50% 50%'
export const customControlIndicatorBoxShadow = `inset 0 .25rem .25rem ${rgba(black, 0.1)}`

export const customControlIndicatorDisabledBg = grays._200
export const customControlLabelDisabledColor = grays._600

export const customControlIndicatorCheckedColor = componentActiveColor
export const customControlIndicatorCheckedBg = componentActiveBg
export const customControlIndicatorCheckedDisabledBg = rgba(themeColors.primary, 0.5)
export const customControlIndicatorCheckedBoxShadow = 'none'

export const customControlIndicatorFocusBoxShadow = `0 0 0 1px ${bodyBg}, ${inputBtnFocusBoxShadow}`

export const customControlIndicatorActiveColor = componentActiveColor
export const customControlIndicatorActiveBg = lighten(componentActiveBg, '35%')
export const customControlIndicatorActiveBoxShadow = 'none'

export const customCheckboxIndicatorBorderRadius = borderRadius

export const customCheckboxIndicatorIconChecked = `data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='${_.replace(customControlIndicatorCheckedColor, '', '').trim()}' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E`

export const customCheckboxIndicatorIndeterminateBg = componentActiveBg
export const customCheckboxIndicatorIndeterminateColor = customControlIndicatorCheckedColor
export const customCheckboxIndicatorIconIndeterminate = `data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='${_.replace(customCheckboxIndicatorIndeterminateColor, '', '').trim()}' d='M0 2h4'/%3E%3C/svg%3E`

export const customCheckboxIndicatorIndeterminateBoxShadow = 'none'

export const customRadioIndicatorBorderRadius = '50%'
export const customRadioIndicatorIconChecked = `data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='${_.replace(customControlIndicatorCheckedColor, '', '').trim()}' /%3E%3C/svg%3E`

export const customSelectPaddingY = '.375rem'
export const customSelectPaddingX = '.75rem'
export const customSelectHeight = inputHeight
export const customSelectIndicatorPadding = '1rem' // Extra padding to account for the presence of the backgroundImage based indicator
export const customSelectLineHeight = inputBtnLineHeight
export const customSelectColor = inputColor
export const customSelectDisabledColor = grays._600
export const customSelectBg = inputBg
export const customSelectDisabledBg = grays._200
export const customSelectBgSize = '8px 10px' // In pixels because image dimensions
export const customSelectIndicatorColor = grays._800

export const customSelectIndicator = `data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='${_.replace(customSelectIndicatorColor, '', '').trim()}' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E`

export const customSelectBorderWidth = inputBtnBorderWidth
export const customSelectBorderColor = inputBorderColor
export const customSelectBorderRadius = borderRadius

export const customSelectFocusBorderColor = inputFocusBorderColor
export const customSelectFocusBoxShadow = `inset 0 1px 2px ${rgba(black, 0.075)}, 0 0 5px ${rgba(customSelectFocusBorderColor, 0.5)}`

export const customSelectFontSizeSm = '75%'
export const customSelectHeightSm = inputHeightSm

export const customSelectFontSizeLg = '125%'
export const customSelectHeightLg = inputHeightLg

export const customRangeTrackWidth = '100%'
export const customRangeTrackHeight = '.5rem'
export const customRangeTrackCursor = 'pointer'
export const customRangeTrackBg = grays._300
export const customRangeTrackBorderRadius = '1rem'
export const customRangeTrackBoxShadow = `inset 0 .25rem .25rem ${rgba(black, 0.1)}`

export const customRangeThumbWidth = '1rem'
export const customRangeThumbHeight = customRangeThumbWidth
export const customRangeThumbBg = componentActiveBg
export const customRangeThumbBorder = '0'
export const customRangeThumbBorderRadius = '1rem'
export const customRangeThumbBoxShadow = `0 .1rem .25rem ${rgba(black, 0.1)}`
export const customRangeThumbFocusBoxShadowWidth = inputBtnFocusWidth
export const customRangeThumbFocusBoxShadow = `0 0 0 1px ${bodyBg}, ${inputBtnFocusBoxShadow}`
export const customRangeThumbActiveBg = lighten(componentActiveBg, '35%')
export const customRangeThumbDisabledBg = grays._500

export const customFileHeight = inputHeight
export const customFileHeightInner = inputHeightInner
export const customFileFocusBorderColor = inputFocusBorderColor
export const customFileFocusBoxShadow = inputBtnFocusBoxShadow

export const customFilePaddingY = inputBtnPaddingY
export const customFilePaddingX = inputBtnPaddingX
export const customFileLineHeight = inputBtnLineHeight
export const customFileColor = inputColor
export const customFileBg = inputBg
export const customFileBorderWidth = inputBtnBorderWidth
export const customFileBorderColor = inputBorderColor
export const customFileBorderRadius = inputBorderRadius
export const customFileBoxShadow = inputBoxShadow
export const customFileButtonColor = customFileColor
export const customFileButtonBg = inputGroupAddonBg

export const customFileText = { en: 'Browse' }

// Form validation
export const formFeedbackMarginTop = formTextMarginTop
export const formFeedbackFontSize = smallFontSize
export const formFeedbackValidColor = themeColors.success
export const formFeedbackInvalidColor = themeColors.danger
