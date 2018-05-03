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

export const inputHeightBorder = format('{}{} !default', size(inputBorderWidth).value * 2, size(inputBorderWidth).unit)

export const inputHeightInner = format('{}{} + {}{} !default', 
    size(fontSizeBase).value * size(inputBtnLineHeight).value, size(fontSizeBase).unit,
    size(inputBtnPaddingY).value * 2, size(fontSizeBase).unit
)

export const inputHeight = format('calc({}{} + {}{}) !default', 
    size(inputHeightInner).value, size(inputHeightInner).unit, 
    size(inputHeightBorder).value, size(inputHeightBorder).unit
)

export const inputHeightInnerSm = format('{}{} !default',
    size(fontSizeSm).value * size(inputBtnLineHeightSm).value + size(inputBtnPaddingYSm).value * 2, 
    size(fontSizeSm).unit
)

export const inputHeightSm = format('calc({} + {}) !default',
    size(inputHeightInnerSm).value, size(inputHeightInnerSm).unit, 
    size(inputHeightBorder).value, size(inputHeightBorder).unit
)

export const inputHeightInnerLg = format('{}{} !default',
    size(fontSizeLg).value * size(inputBtnLineHeightLg).value + size(inputBtnPaddingYLg).value * 2, 
    size(fontSizeLg).unit
)

export const inputHeightLg =  format('calc({}{} + {}{}) !default',
    size(inputHeightInnerLg).value, size(inputHeightInnerLg).unit,
    size(inputHeightBorder).value, size(inputHeightBorder).unit
)

export const inputTransition = format('{} .15s easeIn - out, {} .15s easeIn - out!default', borderColor, boxShadow)

export const formTextMarginTop = '.25rem !default'

export const formCheckInputGutter = '1.25rem !default'
export const formCheckInputMarginY = '.3rem !default'
export const formCheckInputMarginX = '.25rem !default'

export const formCheckInlineMarginX = '.75rem !default'
export const formCheckInlineInputMarginX = '.3125rem !default'

export const formGroupMarginBottom = '1rem !default'

export const inputGroupAddonColor = inputColor
export const inputGroupAddonBg = grays._200
export const inputGroupAddonBorderColor = inputBorderColor

export const customControlGutter = '1.5rem !default'
export const customControlSpacerX = '1rem !default'

export const customControlIndicatorSize = '1rem !default'
export const customControlIndicatorBg = grays._300
export const customControlIndicatorBgSize = '50% 50% !default'
export const customControlIndicatorBoxShadow = format('inset 0 .25rem .25rem {} !default', rgba(black, .1))

export const customControlIndicatorDisabledBg = grays._200
export const customControlLabelDisabledColor = grays._600

export const customControlIndicatorCheckedColor = componentActiveColor
export const customControlIndicatorCheckedBg = componentActiveBg
export const customControlIndicatorCheckedDisabledBg = format('{} !default', rgba(themeColors.primary, .5))
export const customControlIndicatorCheckedBoxShadow = 'none !default'

export const customControlIndicatorFocusBoxShadow = format(
    '0 0 0 1px {}, {} !default',
    bodyBg,
    inputBtnFocusBoxShadow
)

export const customControlIndicatorActiveColor = componentActiveColor
export const customControlIndicatorActiveBg = format('{} !default', lighten(componentActiveBg, '35%'))
export const customControlIndicatorActiveBoxShadow = 'none !default'

export const customCheckboxIndicatorBorderRadius = borderRadius

export const customCheckboxIndicatorIconChecked = format(
    '{} !default', 
    format(
        "data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='{}' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E",
        _.replace(customControlIndicatorCheckedColor, '!default', '').trim()
    )
)

export const customCheckboxIndicatorIndeterminateBg = componentActiveBg
export const customCheckboxIndicatorIndeterminateColor = customControlIndicatorCheckedColor
export const customCheckboxIndicatorIconIndeterminate = format(
    '{} !default', 
    format(
        "data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='{}' d='M0 2h4'/%3E%3C/svg%3E",
        _.replace(customCheckboxIndicatorIndeterminateColor, '!default', '').trim()
    )
)

export const customCheckboxIndicatorIndeterminateBoxShadow  = 'none !default'

export const customRadioIndicatorBorderRadius = '50% !default'
export const customRadioIndicatorIconChecked = format(
    '{} !default', 
    format(
        "data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='{}' /%3E%3C/svg%3E",
        _.replace(customControlIndicatorCheckedColor, '!default', '').trim()
    )
)

export const customSelectPaddingY = '.375rem !default'
export const customSelectPaddingX = '.75rem !default'
export const customSelectHeight = inputHeight
export const customSelectIndicatorPadding = '1rem !default' // Extra padding to account for the presence of the backgroundImage based indicator
export const customSelectLineHeight = inputBtnLineHeight
export const customSelectColor = inputColor
export const customSelectDisabledColor = grays._600
export const customSelectBg = inputBg
export const customSelectDisabledBg = grays._200
export const customSelectBgSize = '8px 10px !default' // In pixels because image dimensions
export const customSelectIndicatorColor = grays._800

export const customSelectIndicator = format(
    '{} !default', 
    format(
        "data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='{}' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E",
        _.replace(customSelectIndicatorColor, '!default', '').trim()
    )
)

export const customSelectBorderWidth = inputBtnBorderWidth
export const customSelectBorderColor = inputBorderColor
export const customSelectBorderRadius = borderRadius

export const customSelectFocusBorderColor = inputFocusBorderColor
export const customSelectFocusBoxShadow = format(
    'inset 0 1px 2px {}, 0 0 5px {} !default',
    rgba(black, .075),
    rgba(customSelectFocusBorderColor, .5)
)

export const customSelectFontSizeSm = '75% !default'
export const customSelectHeightSm = inputHeightSm

export const customSelectFontSizeLg = '125% !default'
export const customSelectHeightLg = inputHeightLg

export const customRangeTrackWidth = '100% !default'
export const customRangeTrackHeight = '.5rem !default'
export const customRangeTrackCursor = 'pointer !default'
export const customRangeTrackBg = grays._300
export const customRangeTrackBorderRadius = '1rem !default'
export const customRangeTrackBoxShadow = format('inset 0 .25rem .25rem {} !default', rgba(black, .1))

export const customRangeThumbWidth = '1rem !default'
export const customRangeThumbHeight = customRangeThumbWidth
export const customRangeThumbBg = componentActiveBg
export const customRangeThumbBorder = '0 !default'
export const customRangeThumbBorderRadius = '1rem !default'
export const customRangeThumbBoxShadow = format('0 .1rem .25rem {} !default', rgba(black, .1))
export const customRangeThumbFocusBoxShadow = format('0 0 0 1px {}, {} !default', bodyBg, inputBtnFocusBoxShadow)
export const customRangeThumbActiveBg = format('{} !default', lighten(componentActiveBg, '35%'))

export const customFileHeight = inputHeight
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

export const customFileText = { en: "Browse" }

// Form validation
export const formFeedbackMarginTop = formTextMarginTop
export const formFeedbackFontSize = smallFontSize
export const formFeedbackValidColor = themeColors.success
export const formFeedbackInvalidColor = themeColors.danger
