import { themeColors, white } from '../Variables/Colors'
import { bgVariant, bgGradientVariant } from '../Mixins/backgroundVariant'
import { enableGradients } from '../Variables/Options'

let expectBackgroundThemeColors = {}

for (const [color, value] of Object.entries(themeColors)) {
  expectBackgroundThemeColors = {
    ...expectBackgroundThemeColors,
    ...bgVariant(`bg${color}`, value)
  }
}

const backgroundThemeColors = expectBackgroundThemeColors

const backgroundGradients = (isEnableGradients = enableGradients) => {
  let expectBackgroundGradients = {}
  for (const [color, value] of Object.entries(themeColors)) {
    expectBackgroundGradients = {
      ...expectBackgroundGradients,
      ...bgGradientVariant(`bgGradient${color}`, value)
    }
  }
  return isEnableGradients ? expectBackgroundGradients : null
}

const bgWhite = {
  backgroundColor: `${white} !important`
}

const bgTransparent = {
  backgroundColor: 'transparent !important'
}

export {
  backgroundThemeColors,
  backgroundGradients,
  bgWhite,
  bgTransparent
}
