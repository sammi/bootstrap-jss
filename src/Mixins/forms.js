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

const formControlFocus = (isEnableShadows = enableShadows) => ({
  '&:focus': {
    color: inputFocusColor,
    backgroundColor: inputFocusBg,
    borderColor: inputFocusBorderColor,
    outline: 0,
    boxShadow: isEnableShadows ? `${inputBoxShadow}, ${inputFocusBoxShadow}` : inputFocusBoxShadow
  }
})

const formValidationState = (state, color) => {
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
  expectValue['$formControl'] = formControlCustomSelect
  expectValue['$customSelect'] = formControlCustomSelect

  const formControlFile = {}
  formControlFile[`wasValidated &:${state},&.is${state}`] = { ...formControlCustomSelectDisplay }
  expectValue['$formControlFile'] = formControlFile

  const formCheckInput = {}
  formCheckInput[`wasValidated &:${state},&.is${state}`] = {
    '~ $formCheckLabel': {
      color: color
    },
    ...formControlCustomSelectDisplay
  }
  expectValue['$formCheckInput'] = formCheckInput

  const customControlInput = {}
  customControlInput[`wasValidated &:${state},&.is${state}`] = {
    '~ $customControlLabel': {
      color: color
    },
    '&::before': {
      backgroundColor: lighten(color, '25%')
    },
    ...formControlCustomSelectDisplay,
    '&:checked': {
      '~ $customControlLabel::before': {
        ...gradientBg(lighten(color, '10%'))
      }
    },
    '&:focus': {
      '~ $customControlLabel::before': {
        boxShadow: `0 0 0 1px ${bodyBg}, 0 0 0 ${inputFocusWidth} ${rgba(color, 0.25)}`
      }
    }
  }
  expectValue['$customControlInput'] = customControlInput

  const cutomFileInput = {}
  customControlInput[`wasValidated &:${state},&.is${state}`] = {
    '~ $customFileLable': {
      borderColor: color,
      '&::before': {
        borderColor: 'inherit'
      }
    },
    ...formControlCustomSelectDisplay,
    '&:focus': {
      '~ $customFileLabel': {
        boxShadow: `0 0 0 ${inputFocusWidth} ${rgba(color, 0.25)}`
      }
    }
  }
  expectValue['$cutomFileInput'] = cutomFileInput
  return expectValue
}

export {
  formControlFocus,
  formValidationState
}
