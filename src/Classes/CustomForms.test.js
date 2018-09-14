import { transition } from '../Mixins/transition'
import { size } from '../Functions/size'
import {
  customFormsTransition,
  customRangeThumbFocusBoxShadow,
  customRangeThumbWidth,
  customRangeThumbHeight,
  customRangeThumbFocusBoxShadowWidth,
  customRangeTrackHeight,
  customRangeThumbBg,
  customRangeThumbBorder,
  customRangeThumbBorderRadius,
  customRangeThumbBoxShadow,
  customRangeThumbActiveBg,
  customRangeTrackWidth,
  customRangeTrackCursor,
  customRangeTrackBg,
  customRangeTrackBorderRadius,
  customRangeTrackBoxShadow,
  customRangeThumbDisabledBg,
  customFileHeight,
  customFilePaddingY,
  customFilePaddingX,
  customFileLineHeight,
  customFileColor,
  customFileBg,
  customFileBorderWidth,
  customFileBorderColor,
  customFileBorderRadius,
  customFileBoxShadow,
  customFileHeightInner,
  customFileButtonColor,
  customFileButtonBg,
  customFileText,
  customFileFocusBorderColor,
  customFileFocusBoxShadow,
  customSelectHeightLg,
  customSelectPaddingY,
  customSelectFontSizeLg,
  customSelectHeight,
  customSelectPaddingX,
  customSelectIndicatorPadding,
  customSelectLineHeight,
  customSelectColor,
  customSelectIndicator,
  customSelectBgSize,
  customSelectBorderWidth,
  customSelectBorderColor,
  customSelectBorderRadius,
  customSelectFocusBorderColor,
  customSelectFocusBoxShadow,
  inputColor,
  inputBg,
  customSelectDisabledColor,
  customSelectDisabledBg,
  customSelectBg,
  customRadioIndicatorBorderRadius,
  customControlIndicatorCheckedBg,
  customRadioIndicatorIconChecked,
  customControlIndicatorCheckedDisabledBg,
  customCheckboxIndicatorBorderRadius,
  customCheckboxIndicatorIconChecked,
  customCheckboxIndicatorIndeterminateBg,
  customCheckboxIndicatorIndeterminateBoxShadow,
  customCheckboxIndicatorIconIndeterminate,
  customControlIndicatorSize,
  customControlGutter,
  customControlIndicatorBg,
  customControlIndicatorBoxShadow,
  customControlIndicatorBgSize,
  customControlIndicatorCheckedColor,
  customControlIndicatorCheckedBoxShadow,
  customControlIndicatorFocusBoxShadow,
  customControlIndicatorActiveColor,
  customControlIndicatorActiveBg,
  customControlIndicatorActiveBoxShadow,
  customControlLabelDisabledColor,
  customControlIndicatorDisabledBg,
  customControlSpacerX
} from '../Variables/Forms'
import { gradientBg } from '../Mixins/gradients'
import { borderRadius } from '../Mixins/borderRadius'
import { boxShadow } from '../Mixins/boxShadow'
import { enableRounded } from '../Variables/Options'
import { lineHeightBase } from '../Variables/Fonts'

import {
  customControl,
  customControlInline,
  customControlInput,
  customControlLabel,
  customCheckbox,
  customRadio,
  customSelect,
  customSelectSm,
  customSelectLg,
  customFile,
  customFileInput,
  customFileLable,
  customRange,
  customFormsOverride
} from './CustomForms'

describe('custom forms', () => {
  it('custom-control', () => {
    expect(customControl).toEqual({
      position: 'relative',
      display: 'block',
      minHeight: `${lineHeightBase}rem`,
      paddingLeft: customControlGutter
    })
  })

  it('custom-control-inline', () => {
    expect(customControlInline).toEqual({
      display: 'inline-flex',
      marginRight: customControlSpacerX
    })
  })

  it('custom-control-input', () => {
    expect(customControlInput).toEqual({
      position: 'absolute',
      zIndex: -1,
      opacity: 0,
      '&:checked ~ customControlLabel::before': {
        color: customControlIndicatorCheckedColor,
        ...gradientBg(customControlIndicatorCheckedBg),
        ...boxShadow(customControlIndicatorCheckedBoxShadow)
      },
      '&:focus ~ customControlLabel::before': {
        boxShadow: customControlIndicatorFocusBoxShadow
      },
      '&:active ~ customControlLabel::before': {
        color: customControlIndicatorActiveColor,
        backgroundColor: customControlIndicatorActiveBg,
        ...boxShadow(customControlIndicatorActiveBoxShadow)
      },
      '&:disabled': {
        '~ customControlLabel': {
          color: customControlLabelDisabledColor,
          '&::before': {
            backgroundColor: customControlIndicatorDisabledBg
          }
        }
      }
    })
  })

  it('custom-control-label', () => {
    expect(customControlLabel).toEqual({
      position: 'relative',
      marginBottom: 0,
      '&::before': {
        position: 'absolute',
        top: `${(size(lineHeightBase).value - size(customControlIndicatorSize).value) / 2}${size(lineHeightBase).unit}`,
        left: `-${customControlGutter}`,
        display: 'block',
        width: customControlIndicatorSize,
        height: customControlIndicatorSize,
        pointerEvents: 'none',
        content: '',
        userSelect: 'none',
        backgroundColor: customControlIndicatorBg,
        ...boxShadow(customControlIndicatorBoxShadow)
      },
      '&::after': {
        position: 'absolute',
        top: `${(size(lineHeightBase).value - size(customControlIndicatorSize).value) / 2}${size(lineHeightBase).unit}`,
        left: `-${customControlGutter}`,
        display: 'block',
        width: customControlIndicatorSize,
        height: customControlIndicatorSize,
        content: '',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: customControlIndicatorBgSize
      }
    })
  })

  it('custom-checkbox', () => {
    expect(customCheckbox).toEqual({
      'customControlLabel::before': {
        ...borderRadius(customCheckboxIndicatorBorderRadius)
      },
      'customControlInput:checked ~ customControlLabel': {
        '&::before': {
          ...gradientBg(customControlIndicatorCheckedBg)
        },
        '&::after': {
          backgroundImage: customCheckboxIndicatorIconChecked
        }
      },
      'customControlInput:indeterminate ~ customControlLabel': {
        '&::before': {
          ...gradientBg(customCheckboxIndicatorIndeterminateBg),
          ...boxShadow(customCheckboxIndicatorIndeterminateBoxShadow)
        },
        '&::after': {
          backgroundImage: customCheckboxIndicatorIconIndeterminate
        }
      },
      'customControlInput:disabled': {
        '&:checked ~ .customControlLabel::before': {
          backgroundColor: customControlIndicatorCheckedDisabledBg
        },
        '&:indeterminate ~ customControlLabel::before': {
          backgroundColor: customControlIndicatorCheckedDisabledBg
        }
      }
    })
  })

  it('custom-radio', () => {
    expect(customRadio).toEqual({
      'customControlLabel::before': {
        borderRadius: customRadioIndicatorBorderRadius
      },
      'customControlInput:checked ~ customControlLabel': {
        '&::before': {
          ...gradientBg(customControlIndicatorCheckedBg)
        },
        '&::after': {
          backgroundImage: customRadioIndicatorIconChecked
        }
      },
      'customControlInput:disabled': {
        '&:checked ~ .custom-control-label::before': {
          backgroundColor: customControlIndicatorCheckedDisabledBg
        }
      }
    })
  })

  it('custom-select', () => {
    const isEnableRounded = enableRounded
    const expectValue = {
      display: 'inline-block',
      width: '100%',
      height: customSelectHeight,
      padding: `${customSelectPaddingY} ${size(customSelectPaddingX).value + size(customSelectIndicatorPadding).value}${size(customSelectPaddingX).unit} ${customSelectPaddingY} ${customSelectPaddingX}`,
      lineHeight: customSelectLineHeight,
      color: customSelectColor,
      verticalAlign: 'middle',
      background: `${customSelectBg} ${customSelectIndicator} no-repeat right ${customSelectPaddingX} center`,
      backgroundSize: customSelectBgSize,
      border: `${customSelectBorderWidth} solid ${customSelectBorderColor}`,
      borderRadius: isEnableRounded ? customSelectBorderRadius : 0,
      appearance: 'none',
      '&:focus': {
        borderColor: customSelectFocusBorderColor,
        outline: 0,
        boxShadow: customSelectFocusBoxShadow,
        '&::-ms-value': {
          color: inputColor,
          backgroundColor: inputBg
        }
      },
      '&[multiple],&[size]:not([size="1"])': {
        height: 'auto',
        paddingRight: customSelectPaddingX,
        backgroundImage: 'none'
      },
      '&:disabled': {
        color: customSelectDisabledColor,
        backgroundColor: customSelectDisabledBg
      },
      '&::-ms-expand': {
        opacity: 0
      }
    }
    expect(customSelect()).toEqual(expectValue)
    expect(customSelect(false)).toEqual({
      display: 'inline-block',
      width: '100%',
      height: customSelectHeight,
      padding: `${customSelectPaddingY} ${size(customSelectPaddingX).value + size(customSelectIndicatorPadding).value}${size(customSelectPaddingX).unit} ${customSelectPaddingY} ${customSelectPaddingX}`,
      lineHeight: customSelectLineHeight,
      color: customSelectColor,
      verticalAlign: 'middle',
      background: `${customSelectBg} ${customSelectIndicator} no-repeat right ${customSelectPaddingX} center`,
      backgroundSize: customSelectBgSize,
      border: `${customSelectBorderWidth} solid ${customSelectBorderColor}`,
      borderRadius: 0,
      appearance: 'none',
      '&:focus': {
        borderColor: customSelectFocusBorderColor,
        outline: 0,
        boxShadow: customSelectFocusBoxShadow,
        '&::-ms-value': {
          color: inputColor,
          backgroundColor: inputBg
        }
      },
      '&[multiple],&[size]:not([size="1"])': {
        height: 'auto',
        paddingRight: customSelectPaddingX,
        backgroundImage: 'none'
      },
      '&:disabled': {
        color: customSelectDisabledColor,
        backgroundColor: customSelectDisabledBg
      },
      '&::-ms-expand': {
        opacity: 0
      }
    })
  })

  it('custom-select-sm', () => {
    expect(customSelectSm).toEqual({
      height: customSelectHeightLg,
      paddingTop: customSelectPaddingY,
      paddingBottom: customSelectPaddingY,
      fontSize: customSelectFontSizeLg
    })
  })

  it('custom-select-lg', () => {
    expect(customSelectLg).toEqual({
      height: customSelectHeightLg,
      paddingTop: customSelectPaddingY,
      paddingBottom: customSelectPaddingY,
      fontSize: customSelectFontSizeLg
    })
  })

  it('custom-file', () => {
    expect(customFile).toEqual({
      position: 'relative',
      display: 'inline-block',
      width: '100%',
      height: customFileHeight,
      marginBottom: 0
    })
  })

  it('custom-file-input', () => {
    const customFileTextValue = {}
    for (const [lang, value] of Object.entries(customFileText)) {
      customFileTextValue[`&:lang(${lang}) ~ customFileLabel::after`] = {
        content: value
      }
    }
    expect(customFileInput).toEqual({
      position: 'relative',
      zIndex: 2,
      width: '100%',
      height: customFileHeight,
      margin: 0,
      opacity: 0,
      '&:focus ~ customFileLabel': {
        borderColor: customFileFocusBorderColor,
        boxShadow: customFileFocusBoxShadow,
        '&::after': {
          borderColor: customFileFocusBorderColor
        }
      },
      ...customFileTextValue
    })
  })

  it('custom-file-label', () => {
    expect(customFileLable).toEqual({
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      zIndex: 1,
      height: customFileHeight,
      padding: `${customFilePaddingY} ${customFilePaddingX}`,
      lineHeight: customFileLineHeight,
      color: customFileColor,
      backgroundColor: customFileBg,
      border: `${customFileBorderWidth} solid ${customFileBorderColor}`,
      ...borderRadius(customFileBorderRadius),
      ...boxShadow(customFileBoxShadow),
      '&::after': {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        zIndex: 3,
        display: 'block',
        height: customFileHeightInner,
        padding: `${customFilePaddingY} ${customFilePaddingX}`,
        lineHeight: customFileLineHeight,
        color: customFileButtonColor,
        content: 'Browse',
        ...gradientBg(customFileButtonBg),
        borderLeft: `${customFileBorderWidth} solid ${customFileBorderColor}`,
        ...borderRadius(`0 ${customFileBorderRadius} ${customFileBorderRadius} 0`)
      }
    })
  })

  it('custom-range', () => {
    expect(customRange).toEqual({
      width: '100%',
      height: `calc(${size(customRangeThumbHeight).value} + ${size(customRangeThumbFocusBoxShadowWidth).value} * 2}${size(customRangeThumbHeight).unit})`,
      padding: 0,
      backgroundColor: 'transparent',
      appearance: 'none',
      '&:focus': {
        outline: 'none',
        '&::-webkit-slider-thumb': {
          boxShadow: customRangeThumbFocusBoxShadow
        },
        '&::-moz-range-thumb': {
          boxShadow: customRangeThumbFocusBoxShadow
        },
        '&::-ms-thumb': {
          boxShadow: customRangeThumbFocusBoxShadow
        }
      },
      '&::-moz-focus-outer': {
        border: 0
      },
      '&::-webkit-slider-thumb': {
        width: customRangeThumbWidth,
        height: customRangeThumbHeight,
        marginTop: `${size(customRangeTrackHeight).value - size(customRangeThumbHeight).value / 2}${size(customRangeThumbHeight).unit}`,
        ...gradientBg(customRangeThumbBg),
        border: customRangeThumbBorder,
        ...borderRadius(customRangeThumbBorderRadius),
        ...boxShadow(customRangeThumbBoxShadow),
        ...transition(customFormsTransition),
        appearance: 'none',
        '&:active': {
          ...gradientBg(customRangeThumbActiveBg)
        }
      },
      '&::-webkit-slider-runnable-track': {
        width: customRangeTrackWidth,
        height: customRangeTrackHeight,
        color: 'transparent',
        cursor: customRangeTrackCursor,
        backgroundColor: customRangeTrackBg,
        borderColor: 'transparent',
        ...borderRadius(customRangeTrackBorderRadius),
        ...boxShadow(customRangeTrackBoxShadow)
      },
      '&::-moz-range-thumb': {
        width: customRangeTrackWidth,
        height: customRangeTrackHeight,
        ...gradientBg(customRangeThumbBg),
        border: customRangeThumbBorder,
        ...borderRadius(customRangeThumbBorderRadius),
        ...boxShadow(customRangeThumbBoxShadow),
        ...transition(customFormsTransition),
        appearance: 'none',
        '&:active': {
          ...gradientBg(customRangeThumbActiveBg)
        }
      },
      '&::-moz-range-track': {
        width: customRangeTrackWidth,
        height: customRangeTrackHeight,
        color: 'transparent',
        cursor: customRangeTrackCursor,
        backgroundColor: customRangeTrackBg,
        borderColor: 'transparent',
        ...borderRadius(customRangeTrackBorderRadius),
        ...boxShadow(customRangeTrackBoxShadow)
      },
      '&::-ms-thumb': {
        width: customRangeThumbWidth,
        height: customRangeThumbHeight,
        marginTop: 0,
        marginRight: customRangeThumbFocusBoxShadowWidth,
        marginLeft: customRangeThumbFocusBoxShadowWidth,
        ...gradientBg(customRangeThumbBg),
        border: customRangeThumbBorder,
        ...borderRadius(customRangeThumbBorderRadius),
        ...boxShadow(customRangeThumbBoxShadow),
        ...transition(customFormsTransition),
        appearance: 'none',
        '&:active': {
          ...gradientBg(customRangeThumbActiveBg)
        }
      },
      '&::-ms-track': {
        width: customRangeTrackWidth,
        height: customRangeTrackHeight,
        color: 'transparent',
        cursor: customRangeTrackCursor,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderWidth: `${size(customRangeThumbHeight).value * 0.5}${size(customRangeThumbHeight).unit}`,
        ...boxShadow(customRangeTrackBoxShadow)
      },
      '&::-ms-fill-lower': {
        backgroundColor: customRangeTrackBg,
        ...borderRadius(customRangeTrackBorderRadius)
      },
      '&::-ms-fill-upper': {
        marginRight: '15px',
        backgroundColor: customRangeTrackBg,
        ...borderRadius(customRangeTrackBorderRadius)
      },
      '&:disabled': {
        '&::-webkit-slider-thumb': {
          backgroundColor: customRangeThumbDisabledBg
        },
        '&::-webkit-slider-runnable-track': {
          cursor: 'default'
        },
        '&::-moz-range-thumb': {
          backgroundColor: customRangeThumbDisabledBg
        },
        '&::-moz-range-track': {
          cursor: 'default'
        },
        '&::-ms-thumb': {
          backgroundColor: customRangeThumbDisabledBg
        }
      }
    })
  })

  it('customer-forms-override', () => {
    expect(customFormsOverride).toEqual({
      '.custom-control-label::before,.custom-file-label,.custom-select': {
        ...transition(customFormsTransition)
      }
    })
  })
})
