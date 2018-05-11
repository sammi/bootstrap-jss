import { grays, black, white, themeColors } from './Colors'
import {rgba} from '../Functions/rgba'
import format from 'string-format'

import {
  lineHeightLg,
  lineHeightSm,
  borderWidth,
  borderColor,
  borderRadius,
  borderRadiusLg,
  borderRadiusSm,
  boxShadowSm,
  boxShadow,
  boxShadowLg,
  componentActiveColor,
  componentActiveBg,
  caretWidth,
  transitionBase,
  transitionFade,
  transitionCollapse
} from './Components'

describe('Components', () => {
  it('Define common padding and border radius sizes and more.', () => {
    expect(lineHeightLg).toEqual(1.5)
    expect(lineHeightSm).toEqual(1.5)

    expect(borderWidth).toEqual('1px')
    expect(borderColor).toEqual(grays._300)
    expect(borderRadius).toEqual('.25rem')
    expect(borderRadiusLg).toEqual('.3rem')
    expect(borderRadiusSm).toEqual('.2rem')

    expect(boxShadowSm).toEqual(format('0 .125rem .25rem {}', rgba(black, 0.075)))
    expect(boxShadow).toEqual(format('0 .5rem 1rem {}', rgba(black, 0.15)))
    expect(boxShadowLg).toEqual(format('0 1rem 3rem {}', rgba(black, 0.175)))

    expect(componentActiveColor).toEqual(white)
    expect(componentActiveBg).toEqual(themeColors.primary)

    expect(caretWidth).toEqual('.3em')

    expect(transitionBase).toEqual('all .2s ease-in-out')
    expect(transitionFade).toEqual('opacity .15s linear')
    expect(transitionCollapse).toEqual('height .35s ease')
  })
})
