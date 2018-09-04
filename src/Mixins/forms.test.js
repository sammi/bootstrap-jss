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

import { enableShadows } from '../Variables/Options'
import { rgba } from '../Functions/rgba'
import { white } from '../Variables/Colors'
import { lighten } from '../Functions/lighten'
import { gradientBg } from './gradients'
import { bodyBg } from '../Variables/Body'

import {
  inputFocusColor,
  inputFocusBg,
  inputFocusBorderColor,
  inputBoxShadow,
  inputFocusBoxShadow,
  formFeedbackMarginTop,
  formFeedbackFontSize,
  inputFocusWidth
} from '../Variables/Forms'

import {
  formControlFocus,
  formValidationState
} from './forms'

describe('forms', () => {

  it('form control focus - default Value', () => {
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

  it('form control focus - disable shadows', () => {
    expect(formControlFocus(false)).toEqual({
      '&:focus': {
        color: inputFocusColor,
        backgroundColor: inputFocusBg,
        borderColor: inputFocusBorderColor,
        outline: 0,
        boxShadow: inputFocusBoxShadow
      }
    })
  })

  it('form control focus - show shadows', () => {
    expect(formControlFocus(true)).toEqual({
      '&:focus': {
        color: inputFocusColor,
        backgroundColor: inputFocusBg,
        borderColor: inputFocusBorderColor,
        outline: 0,
        boxShadow: `${inputBoxShadow}, ${inputFocusBoxShadow}`
      }
    })
  })

  it('form validation state', () => {
    const state = 'valid'
    const color = 'red'

    const expectValue = {}

    expectValue[`${state}Feedback`] = {
      display: 'none',
      width: '100%',
      marginTop: formFeedbackMarginTop,
      fontSize: formFeedbackFontSize,
      color: color
    }

    expectValue[`${state}Tooltip`] = {
      position: 'absolute',
      top: '100%',
      zIndex: 5,
      display: 'none',
      maxWidth: '100%',
      padding: '0.5rem',
      marginTop: '0.1rem',
      fontSize: '0.875rem',
      lineHeight: 1,
      color: white,
      backgroundColor: rgba(color, 0.8),
      borderRadius: '0.2rem'
    }

    const formControlCustomSelectDisplay = {}
    formControlCustomSelectDisplay[`~ .${state}Feedback, ~ .${state}Tooltip`] = { display: 'block' }

    const formControlCustomSelect = {}
    formControlCustomSelect[`wasValidated &:${state},&.is${state}`] = {
      borderColor: color,
      '&:focus': {
        borderColor: color,
        boxShadow: `0 0 0 ${inputFocusWidth} ${rgba(color, 0.25)}`
      },
      ...formControlCustomSelectDisplay
    }
    expectValue['formControl'] = formControlCustomSelect
    expectValue['customSelect'] = formControlCustomSelect

    const formControlFile = {}
    formControlFile[`wasValidated &:${state},&.is${state}`] = { ...formControlCustomSelectDisplay }
    expectValue['formControlFile'] = formControlFile

    const formCheckInput = {}
    formCheckInput[`wasValidated &:${state},&.is${state}`] = {
      '~ formCheckLabel': {
        color: color
      },
      ...formControlCustomSelectDisplay
    }
    expectValue['formCheckInput'] = formCheckInput

    const customControlInput = {}
    customControlInput[`wasValidated &:${state},&.is${state}`] = {
      '~ customControlLabel': {
        color: color
      },
      '&::before': {
        backgroundColor: lighten(color, '25%')
      },
      ...formControlCustomSelectDisplay,
      '&:checked': {
        '~ customControlLabel::before': {
          ...gradientBg(lighten(color, '10%'))
        }
      },
      '&:focus': {
        '~ customControlLabel::before': {
          boxShadow: `0 0 0 1px ${bodyBg}, 0 0 0 ${inputFocusWidth} ${rgba(color, 0.25)}`
        }
      }
    }
    expectValue['customControlInput'] = customControlInput

    const cutomFileInput = {}
    customControlInput[`wasValidated &:${state},&.is${state}`] = {
      '~ customFileLable': {
        borderColor: color,
        '&::before': {
          borderColor: 'inherit'
        }
      },
      ...formControlCustomSelectDisplay,
      '&:focus': {
        '~ customFileLabel': {
          boxShadow: `0 0 0 ${inputFocusWidth} ${rgba(color, 0.25)}`
        }
      }
    }
    expectValue['cutomFileInput'] = cutomFileInput

    expect(formValidationState(state, color)).toEqual(expectValue)
  })
})
