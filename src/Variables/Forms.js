import {white, grays, black} from './Colors'
import {rgba} from '../Functions/rgba'
import {lighten} from '../Functions/lighten'
import format from 'string-format'
import {componentActiveBg} from './Components'
import {bodyColor} from './Body'

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

import {borderRadius, borderRadiusLg, borderRadiusSm} from './Buttons'
 
export const labelMarginBottom = '.5rem !default'

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
export const inputBoxShadow = format('inset 0 1px 1px {} !default', rgba(black, .075))

export const inputBorderRadius = borderRadius
export const inputBorderRadiusLg = borderRadiusLg
export const inputBorderRadiusSm = borderRadiusSm

export const inputFocusBg = inputBg
export const inputFocusBorderColor = format('{} !default', lighten(componentActiveBg, '25%'))
export const inputFocusColor = inputColor
export const inputFocusWidth = inputBtnFocusWidth
export const inputFocusBoxShadow = inputBtnFocusBoxShadow

export const inputPlaceholderColor = grays._600
export const inputPlaintextColor = bodyColor

// export const inputHeightBorder = inputBorderWidth * 2 !default ;

// export const inputHeightInner = (fontSizeBase * inputBtnLineHeight) + (inputBtnPaddingY * 2)!default ;
// export const inputHeight = calc(#{ inputHeightInner } + #{ inputHeightBorder })!default ;

// export const inputHeightInnerSm = (fontSizeSm * inputBtnLineHeightSm) + (inputBtnPaddingYSm * 2)!default ;
// export const inputHeightSm = calc(#{ inputHeightInnerSm } + #{ inputHeightBorder })!default ;

// export const inputHeightInnerLg = (fontSizeLg * inputBtnLineHeightLg) + (inputBtnPaddingYLg * 2)!default ;
// export const inputHeightLg = calc(#{ inputHeightInnerLg } + #{ inputHeightBorder })!default ;

// export const inputTransition = borderColor .15s easeIn - out, boxShadow .15s easeIn - out!default ;

// export const formTextMarginTop = .25rem !default ;

// export const formCheckInputGutter = 1.25rem !default ;
// export const formCheckInputMarginY = .3rem !default ;
// export const formCheckInputMarginX = .25rem !default ;

// export const formCheckInlineMarginX = .75rem !default ;
// export const formCheckInlineInputMarginX = .3125rem !default ;

// export const formGroupMarginBottom = 1rem !default ;

// export const inputGroupAddonColor = inputColor
// export const inputGroupAddonBg = gray - 200!default ;
// export const inputGroupAddonBorderColor = inputBorderColor!default ;

// export const customControlGutter = 1.5rem !default ;
// export const customControlSpacerX = 1rem !default ;

// export const customControlIndicatorSize = 1rem !default ;
// export const customControlIndicatorBg = gray - 300
// export const customControlIndicatorBgSize = 50 % 50 % !default ;
// export const customControlIndicatorBoxShadow: inset 0 .25rem .25rem rgba(black, .1)!default ;

// export const customControlIndicatorDisabledBg = gray - 200
// export const customControlLabelDisabledColor = gray - 600

// export const customControlIndicatorCheckedColor = componentActiveColor
// export const customControlIndicatorCheckedBg = componentActiveBg
// export const customControlIndicatorCheckedDisabledBg: rgba(themeColor("primary"), .5)!default ;
// export const customControlIndicatorCheckedBoxShadow: none !default ;

// export const customControlIndicatorFocusBoxShadow = 0 0 0 1px bodyBg, inputBtnFocusBoxShadow!default ;

// export const customControlIndicatorActiveColor = componentActiveColor
// export const customControlIndicatorActiveBg = lighten(componentActiveBg, 35 %)!default ;
// export const customControlIndicatorActiveBoxShadow = none!default ;

// export const customCheckboxIndicatorBorderRadius = borderRadius
// export const customCheckboxIndicatorIconChecked = strReplace(url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='#{customControlIndicatorCheckedColor}' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E"), "#", "%23")!default ;

// export const customCheckboxIndicatorIndeterminateBg = componentActiveBg
// export const customCheckboxIndicatorIndeterminateColor = customControlIndicatorCheckedColor
// export const customCheckboxIndicatorIconIndeterminate = strReplace(url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='#{customCheckboxIndicatorIndeterminateColor}' d='M0 2h4'/%3E%3C/svg%3E"), "#", "%23")!default ;
// export const customCheckboxIndicatorIndeterminateBoxShadow: none !default ;

// export const customRadioIndicatorBorderRadius = 50 % !default ;
// export const customRadioIndicatorIconChecked = strReplace(url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='#{customControlIndicatorCheckedColor}'/%3E%3C/svg%3E"), "#", "%23")!default ;

// export const customSelectPaddingY = .375rem !default ;
// export const customSelectPaddingX = .75rem !default ;
// export const customSelectHeight = inputHeight
// export const customSelectIndicatorPadding: 1rem !default ; // Extra padding to account for the presence of the backgroundImage based indicator
// export const customSelectLineHeight = inputBtnLineHeight
// export const customSelectColor = inputColor
// export const customSelectDisabledColor = gray - 600
// export const customSelectBg = inputBg
// export const customSelectDisabledBg = gray - 200
// export const customSelectBgSize = 8px 10px!default ; // In pixels because image dimensions
// export const customSelectIndicatorColor = gray - 800
// export const customSelectIndicator = strReplace(url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='#{customSelectIndicatorColor}' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E"), "#", "%23")!default ;
// export const customSelectBorderWidth = inputBtnBorderWidth
// export const customSelectBorderColor = inputBorderColor
// export const customSelectBorderRadius = borderRadius

// export const customSelectFocusBorderColor: inputFocusBorderColor
// export const customSelectFocusBoxShadow = inset 0 1px 2px rgba(black, .075), 0 0 5px rgba(customSelectFocusBorderColor, .5)!default ;

// export const customSelectFontSizeSm = 75 % !default ;
// export const customSelectHeightSm = inputHeightSm

// export const customSelectFontSizeLg = 125 % !default ;
// export const customSelectHeightLg = inputHeightLg

// export const customRangeTrackWidth = 100 % !default ;
// export const customRangeTrackHeight = .5rem !default ;
// export const customRangeTrackCursor = pointer!default ;
// export const customRangeTrackBg = gray - 300
// export const customRangeTrackBorderRadius: 1rem !default ;
// export const customRangeTrackBoxShadow = inset 0 .25rem .25rem rgba(black, .1)!default ;

// export const customRangeThumbWidth = 1rem !default ;
// export const customRangeThumbHeight = customRangeThumbWidth
// export const customRangeThumbBg = componentActiveBg
// export const customRangeThumbBorder = 0!default ;
// export const customRangeThumbBorderRadius = 1rem !default ;
// export const customRangeThumbBoxShadow = 0 .1rem .25rem rgba(black, .1)!default ;
// export const customRangeThumbFocusBoxShadow: 0 0 0 1px bodyBg, inputBtnFocusBoxShadow!default ;
// export const customRangeThumbActiveBg = lighten(componentActiveBg, 35 %)!default ;

// export const customFileHeight = inputHeight
// export const customFileFocusBorderColor = inputFocusBorderColor
// export const customFileFocusBoxShadow = inputBtnFocusBoxShadow

// export const customFilePaddingY = inputBtnPaddingY
// export const customFilePaddingX = inputBtnPaddingX
// export const customFileLineHeight = inputBtnLineHeight
// export const customFileColor = inputColor
// export const customFileBg = inputBg
// export const customFileBorderWidth = inputBtnBorderWidth
// export const customFileBorderColor = inputBorderColor
// export const customFileBorderRadius = inputBorderRadius
// export const customFileBoxShadow = inputBoxShadow
// export const customFileButtonColor = customFileColor
// export const customFileButtonBg = inputGroupAddonBg

// export const customFileText = { en: "Browse" }


// // Form validation
// export const formFeedbackMarginTop = formTextMarginTop
// export const formFeedbackFontSize = smallFontSize
// export const formFeedbackValidColor = themeColor("success")!default ;
// export const formFeedbackInvalidColor = themeColor("danger")!default ;
