import { grays, blue, purple, red, white } from '../Variables/Colors'
import { rgba } from '../Functions/rgba'

import { enableGradients } from '../Variables/Options'
import { mix } from '../Functions/mix'
import { bodyBg } from '../Variables/Body'

const gradientBg = (color, enable = enableGradients) => enable
  ? { background: `${color} linear-gradient(180deg, ${mix(bodyBg, color, '15%')}, ${color}) repeat-x` }
  : { 'backgroundColor': color }

const gradientX = (startColor = grays._700, endColor = grays._800, startPercent = '0%', endPercent = '100%') => ({
  backgroundImage: `linearGradient(to right, ${startColor} ${startPercent}, ${endColor} ${endPercent})`,
  backgroundRepeat: 'repeat-x'
})

const gradientY = (startColor = grays._700, endColor = grays._800, startPercent = '0%', endPercent = '100%') => ({
  backgroundImage: `linearGradient(to bottom, ${startColor} ${startPercent}, ${endColor} ${endPercent})`,
  backgroundRepeat: 'repeat-x'
})

const gradientDirectional = (startColor = grays._700, endColor = grays._800, deg = '45deg') => ({
  backgroundImage: `linearGradient(${deg} ${startColor}, ${endColor})`,
  backgroundRepeat: 'repeat-x'
})

const gradientXThreeColors = (startColor = blue, midColor = purple, colorStop = '50%', endColor = red) => ({
  backgroundImage: `linear-gradient(to right, ${startColor}, ${midColor} ${colorStop}, ${endColor})`,
  backgroundRepeat: 'no-repeat'
})

const gradientYThreeColors = (startColor = blue, midColor = purple, colorStop = '50%', endColor = red) => ({
  backgroundImage: `linear-gradient(${startColor}, ${midColor} ${colorStop}, ${endColor})`,
  backgroundRepeat: 'no-repeat'
})

const gradientRadial = (innerColor = grays._700, outerColor = grays._800) => ({
  backgroundImage: `radial-gradient(circle, ${innerColor}, ${outerColor})`,
  backgroundRepeat: 'no-repeat'
})

const gradientStriped = (color = rgba(white, 0.15), angle = '45deg') => ({
  backgroundImage: `linear-gradient(${angle}, ${color} 25%, transparent 25%, transparent 50%, ${color} 50%, ${color} 75%, transparent 75%, transparent)`
})

export {
  gradientBg,
  gradientX,
  gradientY,
  gradientDirectional,
  gradientXThreeColors,
  gradientYThreeColors,
  gradientRadial,
  gradientStriped
}
