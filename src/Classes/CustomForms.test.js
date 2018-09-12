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
  customRangeThumbDisabledBg
} from '../Variables/Forms'
import { gradientBg } from '../Mixins/gradients'
import { borderRadius } from '../Mixins/borderRadius'
import { boxShadow } from '../Mixins/boxShadow'

import { customFormsOverride, customRange } from './CustomForms'

describe('custom forms', () => {
  it('custom-control', () => {
  })

  it('custom-control-inline', () => {
  })

  it('custom-control-input', () => {
  })

  it('custom-control-label', () => {
  })

  it('custom-checkbox', () => {
  })

  it('custom-radio', () => {
  })

  it('custom-select', () => {
  })

  it('custom-select-sm', () => {
  })

  it('custom-select-lg', () => {
  })

  it('custom-file', () => {
  })

  it('custom-file-input', () => {
  })

  it('custom-file-label', () => {
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
