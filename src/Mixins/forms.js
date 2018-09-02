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

export const formControlFocus = () => ({
    '&:focus': {
        color: inputFocusColor,
        backgroundColor: inputFocusBg,
        borderColor: inputFocusBorderColor,
        outline: 0,
        boxShadow: enableShadows ? `${inputBoxShadow}, ${inputFocusBoxShadow}` : inputFocusBoxShadow
    }
})

export const formValidationState = (state, color) => {
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
    stateFeedbackTooltip[`~ ${state}-feedback, ~ ${state}-tooltip`] = { display: 'block' }

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

    return expectValue
}
