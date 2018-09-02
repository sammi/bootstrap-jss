// Form control focus state
//
// Generate a customized focus state and for any input with the specified color,
// which defaults to the `$input-focus-border-color` variable.
//
// We highly encourage you to not customize the default value, but instead use
// this to tweak colors on an as-needed basis. This aesthetic change is based on
// WebKit's default styles, but applicable to a wider range of browsers. Its
// usability and accessibility should be taken into account with any change.
//
// Example usage: change the default blue border and shadow to white for better
// contrast against a dark gray background.

import { enableShadows, enableValidationIcons } from '../Variables/Options'
import { lineHeightBase } from '../Variables/Fonts'
import { colorYiq } from '../Functions/colorYiq'
import { rgba } from '../Functions/rgba'
import { borderRadius } from './borderRadius'

import {
    inputFocusColor,
    inputFocusBg,
    inputFocusBorderColor,
    inputBoxShadow,
    inputFocusBoxShadow,
    formFeedbackMarginTop,
    formFeedbackFontSize,
    inputHeightInner,
    textAreaFormControl,
    customSelect,
    formControlFile,
    formCheckInput,
    customControlInput,
    customFileInput,
    formFeedbackIconValid,
    formFeedbackIconInvalid,
    inputFocusWidth
} from '../Variables/Forms'

import {
    tooltipPaddingY,
    tooltipPaddingX,
    tooltipFontSize,
    tooltipOpacity,
    tooltipBorderRadius
} from '../Variables/Tooltips'

import {
    formControlFocus,
    formValidationState
} from './forms'

describe('forms', () => {
    it('form control focus', () => {
        expect(formControlFocus()).toEqual({
            '&:focus': {
                color: inputFocusColor,
                backgroundColor: inputFocusBg,
                borderColor: inputFocusBorderColor,
                outline: 0,
                boxShadow: enableShadows ? `${inputBoxShadow}, ${inputFocusBoxShadow}` : inputFocusBoxShadow
            }
        })
    })

    it('form validation state', () => {
        const state = 'valid'
        const color = 'red'

        const expectValue = {}

        expectValue[`.#{state}-feedback`] = {
            display: 'none',
            width: '100%',
            marginTop: formFeedbackMarginTop,
            fontSize: formFeedbackFontSize,
            color: color
        }

        expectValue[`.#{state}-tooltip`] = {
            position: 'absolute',
            top: '100%',
            zIndex: 5,
            display: 'none',
            maxWidth: '100%',
            padding: `${tooltipPaddingY} ${tooltipPaddingX}`,
            marginTop: '.1rem',
            fontSize: tooltipFontSize,
            lineHeight: lineHeightBase,
            color: colorYiq(color),
            backgroundColor: rgba(color, tooltipOpacity),
            ...borderRadius(tooltipBorderRadius)
        }

        const enableValidationIconsStyle = enableValidationIcons ? {
            paddingRight: inputHeightInner,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: `center right calc(#{${inputHeightInner / 4})`,
            backgroundSize: `calc(${inputHeightInner / 2}) calc(${inputHeightInner / 2})`,
            backgroundImage: state === "valid" ? formFeedbackIconValid : formFeedbackIconInvalid
        } : {}


        let stateFeedbackTooltip = {}
        stateFeedbackTooltip[`~ ${state}-feedback, ~ ${state}-tooltip`] = {display: 'block'}

        let formControlWasValidated = {}
        formControlWasValidated[`was-validated &:${state}, &.is-${state}`] = {
            borderColor: color,
            ...enableValidationIcons,
            '&:focus': {
                borderColor: color,
                boxShadow: `0 0 0 ${inputFocusWidth} ${rgba(color, .25)}`
            },
            ...stateFeedbackTooltip
        }

        expectValue['formControl'] = formControlWasValidated

        expect(formValidationState(state, color)).toEqual(expectValue)
    })
})
