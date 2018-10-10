import { darken } from '../Functions/darken'
import { gradientBg } from './gradients'
import { enableGradients } from '../Variables/Options'

export const alertVariant = (background, border, color, ifEnableGraidents = enableGradients) => ({
  color: color,
  ...gradientBg(background, ifEnableGraidents),
  borderColor: border,
  '& hr': {
    borderTopColor: darken(border, '5%')
  },
  '&$alertLink': {
    color: darken(color, '10%')
  }
})
