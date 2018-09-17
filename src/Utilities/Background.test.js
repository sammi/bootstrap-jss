import { themeColors, white } from '../Variables/Colors'
import { bgVariant, bgGradientVariant } from '../Mixins/backgroundVariant'
import { enableGradients } from '../Variables/Options'

import { backgroundThemeColors, backgroundGradients, bgWhite, bgTransparent } from './Background'

describe('background', () => {
  it('background theme colors', () => {
    let expectBackgroundThemeColors = {}
    for (const [color, value] of Object.entries(themeColors)) {
      expectBackgroundThemeColors = {
        ...expectBackgroundThemeColors,
        ...bgVariant(`bg${color}`, value)
      }
    }
    expect(backgroundThemeColors).toEqual(expectBackgroundThemeColors)
  })

  it('background gradients', () => {
    let expectBackgroundGradients = {}
    for (const [color, value] of Object.entries(themeColors)) {
      expectBackgroundGradients = {
        ...expectBackgroundGradients,
        ...bgGradientVariant(`bgGradient${color}`, value)
      }
    }

    expect(backgroundGradients(true)).toEqual(expectBackgroundGradients)
    expect(backgroundGradients(false)).toEqual(null)

    const expectValue = enableGradients ? expectBackgroundGradients : null
    expect(backgroundGradients()).toEqual(expectValue)
  })

  it('bg-white', () => {
    expect(bgWhite).toEqual({
      backgroundColor: `${white} !important`
    })
  })

  it('bg-transparent', () => {
    expect(bgTransparent).toEqual({
      backgroundColor: `transparent !important`
    })
  })
})
