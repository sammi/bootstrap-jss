import { colors, themeColors } from '../Variables/Colors'
import { gridBreakpoints } from '../Variables/Grid'
import { fontFamilySansSerif, fontFamilyMonospace } from '../Variables/Fonts'

import root from './index'

describe('root', () => {
  it('root', () => {
    let rootVariables = {}
    Object.keys(colors).forEach(color => { rootVariables[`--${color}`] = colors[color] })
    Object.keys(themeColors).forEach(themeColor => { rootVariables[`--${themeColor}`] = themeColors[themeColor] })
    Object.keys(gridBreakpoints).forEach(gridBreakpoint => { rootVariables[`--breakpoing-${gridBreakpoint}`] = gridBreakpoints[gridBreakpoint] })

    rootVariables['--font-family-sans-serif'] = fontFamilySansSerif
    rootVariables['--font-family-monospace'] = fontFamilyMonospace

    expect(root).toEqual({
      ':root': {
        ...rootVariables
      }
    })
  })
})
