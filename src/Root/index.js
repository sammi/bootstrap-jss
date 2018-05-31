import { colors, themeColors } from '../Variables/Colors'
import { gridBreakpoints } from '../Variables/Grid'

let rootVariables = {}
Object.keys(colors).forEach(color => { rootVariables[`--${color}`] = colors[color] })
Object.keys(themeColors).forEach(themeColor => { rootVariables[`--${themeColor}`] = themeColors[themeColor] })
Object.keys(gridBreakpoints).forEach(gridBreakpoint => { rootVariables[`--breakpoing-${gridBreakpoint}`] = gridBreakpoints[gridBreakpoint] })

export default {
  ':root': rootVariables
}
