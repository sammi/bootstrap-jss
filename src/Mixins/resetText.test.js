import { fontFamilyBase, fontWeightNormal, lineHeightBase } from '../Variables/Fonts'

import { resetText } from './resetText'

// We deliberately do NOT reset font-size or word-wrap.
// textalign: left;  Fallback for where `start` is not supported
// textalign: start;  stylelint-disable-line declaration-block-no-duplicate-properties

describe('reset text', () => {
  it('resetText', () => {
    expect(resetText).toEqual({
      fontfamily: fontFamilyBase,
      fontstyle: 'normal',
      fontweight: fontWeightNormal,
      lineheight: lineHeightBase,
      textalign: 'start',
      fallbacks: {
        textalign: 'left'
      },
      textdecoration: 'none',
      textshadow: 'none',
      texttransform: 'none',
      letterspacing: 'normal',
      wordbreak: 'normal',
      wordspacing: 'normal',
      whitespace: 'normal',
      linebreak: 'auto'
    })
  })
})
