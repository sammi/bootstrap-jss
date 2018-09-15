import { grays, blue, purple, red, white } from '../Variables/Colors'
import { rgba } from '../Functions/rgba'

import { gradientBg, gradientX, gradientY, gradientDirectional, gradientXThreeColors, gradientYThreeColors, gradientRadial, gradientStriped } from './gradients'

describe('Gradients', () => {
  it('gradient-bg', () => {
    expect(gradientBg('#000')).toEqual({ 'backgroundColor': '#000' })
    expect(gradientBg('#000', true)).toEqual({ 'background': '#000 linear-gradient(180deg, #262626, #000) repeat-x' })
  })

  it('gradient-x', () => {
    const startColor = grays._700
    const endColor = grays._800
    const startPercent = '0%'
    const endPercent = '100%'

    const expectValue = {
      backgroundImage: `linearGradient(to right, ${startColor} ${startPercent}, ${endColor} ${endPercent})`,
      backgroundRepeat: 'repeat-x'
    }

    expect(gradientX()).toEqual(expectValue)
    expect(gradientX(startColor, endColor, startPercent, endPercent)).toEqual(expectValue)
  })

  it('gradient-y', () => {
    const startColor = grays._700
    const endColor = grays._800
    const startPercent = '0%'
    const endPercent = '100%'

    const expectValue = {
      backgroundImage: `linearGradient(to bottom, ${startColor} ${startPercent}, ${endColor} ${endPercent})`,
      backgroundRepeat: 'repeat-x'
    }

    expect(gradientY()).toEqual(expectValue)
    expect(gradientY(startColor, endColor, startPercent, endPercent)).toEqual(expectValue)
  })

  it('gradient-directional', () => {
    const startColor = grays._700
    const endColor = grays._800
    const deg = '45deg'

    const expectValue = {
      backgroundImage: `linearGradient(${deg} ${startColor}, ${endColor})`,
      backgroundRepeat: 'repeat-x'
    }

    expect(gradientDirectional()).toEqual(expectValue)
    expect(gradientDirectional(startColor, endColor, deg)).toEqual(expectValue)
  })

  it('gradient-x-three-colors', () => {
    const startColor = blue
    const midColor = purple
    const colorStop = '50%'
    const endColor = red
    const expectValue = {
      backgroundImage: `linear-gradient(to right, ${startColor}, ${midColor} ${colorStop}, ${endColor})`,
      backgroundRepeat: 'no-repeat'
    }
    expect(gradientXThreeColors()).toEqual(expectValue)
    expect(gradientXThreeColors(startColor, midColor, colorStop, endColor)).toEqual(expectValue)
  })

  it('gradient-y-three-colors', () => {
    const startColor = blue
    const midColor = purple
    const colorStop = '50%'
    const endColor = red
    const expectValue = {
      backgroundImage: `linear-gradient(${startColor}, ${midColor} ${colorStop}, ${endColor})`,
      backgroundRepeat: 'no-repeat'
    }
    expect(gradientYThreeColors()).toEqual(expectValue)
    expect(gradientYThreeColors(startColor, midColor, colorStop, endColor)).toEqual(expectValue)
  })

  it('gradient-radial', () => {
    const innerColor = grays._700
    const outerColor = grays._800
    const expectValue = {
      backgroundImage: `radial-gradient(circle, ${innerColor}, ${outerColor})`,
      backgroundRepeat: 'no-repeat'
    }

    expect(gradientRadial()).toEqual(expectValue)
    expect(gradientRadial(innerColor, outerColor)).toEqual(expectValue)
  })

  it('gradient-striped', () => {
    const color = rgba(white, 0.15)
    const angle = '45deg'
    const expectValue = {
      backgroundImage: `linear-gradient(${angle}, ${color} 25%, transparent 25%, transparent 50%, ${color} 50%, ${color} 75%, transparent 75%, transparent)`
    }
    expect(gradientStriped()).toEqual(expectValue)
    expect(gradientStriped(color, angle)).toEqual(expectValue)
  })
})
