import {
  inputPaddingY, inputPaddingX, inputLineHeight,
  inputColor, inputBg, inputBorderWidth, inputBorderColor,
  inputBorderRadius, inputBoxShadow, inputTransition,
  inputPlaceholderColor, inputDisabledBg,
  inputHeight, inputPaddingYSm, inputPaddingYLg, inputLineHeightLg, inputLineHeightSm,
  inputPlaintextColor,
  inputPaddingXSm, inputBorderRadiusSm,
  inputHeightSm, inputPaddingXLg, inputBorderRadiusLg, inputHeightLg,
  formGroupMarginBottom, formTextMarginTop, formCheckInputMarginY, formCheckInlineInputMarginX,
  formCheckInputGutter, formCheckInlineMarginX,
  formFeedbackValidColor, formFeedbackInvalidColor, formCheckInputMarginX
} from '../Variables/Forms'
import { enableRounded } from '../Variables/Options'
import { fontSizeBase, fontSizeLg, fontSizeSm, textMuted } from '../Variables/Fonts'
import { boxShadow } from '../Mixins/boxShadow'
import { transition } from '../Mixins/transition'
import { borderRadius } from '../Mixins/borderRadius'
import { mediaBreakpointUp } from '../Mixins/breakpoints'
import { formControlFocus, formValidationState } from '../Mixins'
import { size } from '../Functions/size'
import { customSelect, customControl, customControlLabel } from './CustomForms'

import {
  formControl,
  selectFormControl,
  formControlFileRange,
  colFormLabel, colFormLabelLg, colFormLabelSm,
  formControlSm, formControlLg,
  formControlPlaintext,
  formGroup, formText,
  formRow,
  formCheck, formCheckLabel, formCheckInput, formCheckInline,
  formValidation,
  formInline
} from './Form'

describe('Textual form controls', () => {
  it('formControl', () => {
    expect(formControl()).toEqual({
      display: 'block',
      width: '100%',
      padding: `${inputPaddingY} ${inputPaddingX}`,
      fontSize: fontSizeBase,
      lineHeight: inputLineHeight,
      color: inputColor,
      backgroundColor: inputBg,
      backgroundClip: 'padding-box',
      border: `${inputBorderWidth} solid ${inputBorderColor}`,
      borderRadius: enableRounded ? inputBorderRadius : 0,
      ...boxShadow(inputBoxShadow),
      ...transition(inputTransition),
      '&::-ms-expand': {
        backgroundColor: 'transparent',
        border: 0
      },
      ...formControlFocus(),
      '&::placeholder': {
        color: inputPlaceholderColor,
        opacity: 1
      },
      '&:disabled,&[readonly]': {
        backgroundColor: inputDisabledBg,
        opacity: 1
      }
    })

    expect(formControl(true)).toEqual({
      display: 'block',
      width: '100%',
      padding: `${inputPaddingY} ${inputPaddingX}`,
      fontSize: fontSizeBase,
      lineHeight: inputLineHeight,
      color: inputColor,
      backgroundColor: inputBg,
      backgroundClip: 'padding-box',
      border: `${inputBorderWidth} solid ${inputBorderColor}`,
      borderRadius: inputBorderRadius,
      ...boxShadow(inputBoxShadow),
      ...transition(inputTransition),
      '&::-ms-expand': {
        backgroundColor: 'transparent',
        border: 0
      },
      ...formControlFocus(),
      '&::placeholder': {
        color: inputPlaceholderColor,
        opacity: 1
      },
      '&:disabled,&[readonly]': {
        backgroundColor: inputDisabledBg,
        opacity: 1
      }
    })

    expect(formControl(false)).toEqual({
      display: 'block',
      width: '100%',
      padding: `${inputPaddingY} ${inputPaddingX}`,
      fontSize: fontSizeBase,
      lineHeight: inputLineHeight,
      color: inputColor,
      backgroundColor: inputBg,
      backgroundClip: 'padding-box',
      border: `${inputBorderWidth} solid ${inputBorderColor}`,
      borderRadius: 0,
      ...boxShadow(inputBoxShadow),
      ...transition(inputTransition),
      '&::-ms-expand': {
        backgroundColor: 'transparent',
        border: 0
      },
      ...formControlFocus(),
      '&::placeholder': {
        color: inputPlaceholderColor,
        opacity: 1
      },
      '&:disabled,&[readonly]': {
        backgroundColor: inputDisabledBg,
        opacity: 1
      }
    })
  })

  it('selectFormControl', () => {
    expect(selectFormControl).toEqual({
      '&:not([size]):not([multiple])': {
        height: inputHeight
      },
      '&:focus::-ms-value': {
        color: inputColor,
        backgroundColor: inputBg
      }
    })
  })

  it('formControlFileRange', () => {
    expect(formControlFileRange).toEqual({
      display: 'block',
      width: '100%'
    })
  })

  it('formLabels', () => {
    const inputPaddingYSize = size(inputPaddingY)
    const inputBorderWidthSize = size(inputBorderWidth)
    const inputPaddingYLgSize = size(inputPaddingYLg)
    const inputPaddingYSmSize = size(inputPaddingYSm)
    expect(colFormLabel).toEqual({
      paddingTop: `calc(${inputPaddingYSize.value + inputBorderWidthSize.value}${inputPaddingYSize.unit})`,
      paddingBottom: `calc(${inputPaddingYSize.value + inputBorderWidthSize.value}${inputPaddingYSize.unit})`,
      marginBottom: 0,
      fontSize: 'inherit',
      lineHeight: inputLineHeight
    })
    expect(colFormLabelLg).toEqual({
      paddingTop: `calc(${inputPaddingYLgSize.value + inputBorderWidthSize.value}${inputPaddingYLgSize.unit})`,
      paddingBottom: `calc(${inputPaddingYLgSize.value + inputBorderWidthSize.value}${inputPaddingYLgSize.unit})`,
      fontSize: fontSizeLg,
      lineHeight: inputLineHeightLg
    })
    expect(colFormLabelSm).toEqual({
      paddingTop: `calc(${inputPaddingYSmSize.value + inputBorderWidthSize.value}${inputPaddingYSmSize.unit})`,
      paddingBottom: `calc(${inputPaddingYSmSize.value + inputBorderWidthSize.value}${inputPaddingYSmSize.unit})`,
      fontSize: fontSizeSm,
      lineHeight: inputLineHeightSm
    })
  })

  it('formControlPlaintext', () => {
    expect(formControlPlaintext).toEqual({
      formControlSm,
      formControlLg,
      display: 'block',
      width: '100%',
      paddingTop: inputPaddingY,
      paddingBottom: inputPaddingY,
      marginBottom: 0,
      lineHeight: inputLineHeight,
      color: inputPlaintextColor,
      backgroundColor: 'transparent',
      border: 'solid transparent',
      borderWidth: `${inputBorderWidth} 0`,
      '&.$formControlSm,&.$formControlLg': {
        paddingRight: 0,
        paddingLeft: 0
      }
    })
  })

  it('form control sizing', () => {
    expect(formControlSm).toEqual({
      padding: `${inputPaddingYSm} ${inputPaddingXSm}`,
      fontSize: fontSizeSm,
      lineHeight: inputLineHeightSm,
      ...borderRadius(inputBorderRadiusSm),
      'select.&': {
        '&:not([size]):not([multiple])': {
          height: inputHeightSm
        }
      }
    })

    expect(formControlLg).toEqual({
      padding: `${inputPaddingYLg} ${inputPaddingXLg}`,
      fontSize: fontSizeLg,
      lineHeight: inputLineHeightLg,
      ...borderRadius(inputBorderRadiusLg),
      'select.&': {
        '&:not([size]):not([multiple])': {
          height: inputHeightLg
        }
      }
    })
  })

  it('form groups', () => {
    expect(formGroup).toEqual({
      marginBottom: formGroupMarginBottom
    })
    expect(formText).toEqual({
      display: 'block',
      marginTop: formTextMarginTop
    })
  })

  it('form row', () => {
    expect(formRow).toEqual({
      display: 'flex',
      flexWrap: 'wrap',
      marginRight: '-5px',
      marginLeft: '-5px',
      '> .col, > [class*="col-"]': {
        paddingRight: '5px',
        paddingLeft: '5px'
      }
    })
  })

  it('form checks', () => {
    expect(formCheck).toEqual({
      position: 'relative',
      display: 'block',
      paddingLeft: formCheckInputGutter
    })

    expect(formCheckLabel).toEqual({
      marginBottom: 0
    })

    expect(formCheckInput).toEqual({
      formCheckLabel,
      position: 'absolute',
      marginTop: formCheckInputMarginY,
      marginLeft: `-${formCheckInputGutter}`,
      '&:disabled ~ $formCheckLabel': {
        color: textMuted
      }
    })

    expect(formCheckInline).toEqual({
      formCheckInput,
      display: 'inline-flex',
      alignItems: 'center',
      paddingLeft: 0,
      marginRight: formCheckInlineMarginX,
      '$formCheckInput': {
        position: 'static',
        marginTop: 0,
        marginRight: formCheckInlineInputMarginX,
        marginLeft: 0
      }
    })
  })

  it('form validation', () => {
    expect(formValidation).toEqual({
      ...formValidationState('valid', formFeedbackValidColor),
      ...formValidationState('invalid', formFeedbackInvalidColor)
    })
  })

  it('inline forms', () => {
    expect(formInline).toEqual({
      formCheck,
      display: 'flex',
      flexFlow: 'row wrap',
      alignItems: 'center',
      '$formCheck': {
        width: '100%'
      },
      ...mediaBreakpointUp('sm', {
        formGroup,
        formControl,
        formControlPlaintext,
        customSelect,
        formCheck,
        formCheckInput,
        customControl,
        customControlLabel,
        label: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 0
        },
        '$formGroup': {
          display: 'flex',
          flex: '0 0 auto',
          flexFlow: 'row wrap',
          alignItems: 'center',
          marginBottom: 0
        },
        '$formControl': {
          display: 'inline-block',
          width: 'auto',
          verticalAlign: 'middle'
        },
        '$formControlPlaintext': {
          display: 'inline-block'
        },
        '$inputGroup, $customSelect': {
          width: 'auto'
        },
        '$formCheck': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 'auto',
          paddingLeft: 0
        },
        '$formCheckInput': {
          position: 'relative',
          marginTop: 0,
          marginRight: formCheckInputMarginX,
          marginLeft: 0
        },
        '$customControl': {
          alignItems: 'center',
          justifyContent: 'center'
        },
        '$customControlLabel': {
          marginBottom: 0
        }
      })
    })
  })
})
