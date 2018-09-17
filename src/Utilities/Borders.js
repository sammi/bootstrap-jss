import { borderWidth, borderColor, borderRadius } from '../Variables/Components'
import { themeColors, white } from '../Variables/Colors'

const borderValue = `${borderWidth} solid ${borderColor} !important`
const border = { border: borderValue }
const borderTop = { borderTop: borderValue }
const borderRight = { borderRight: borderValue }
const borderBottom = { borderBottom: borderValue }
const borderLeft = { borderLeft: borderValue }

let borderThemeColorsValue = {}
for (const [color, value] of Object.entries(themeColors)) {
  borderThemeColorsValue[`border-${color}`] = {
    borderColor: `${value} !important`
  }
}

const borderThemeColors = borderThemeColorsValue

const borderWhite = {
  borderColor: `${white} !important`
}

const rounded = {
  borderRadius: `${borderRadius} !important`
}

const roundedTop = {
  borderTopLeftRadius: `${borderRadius} !important`,
  borderTopRightRadius: `${borderRadius} !important`
}

const roundedRight = {
  borderTopRightRadius: `${borderRadius} !important`,
  borderBottomRightRadius: `${borderRadius} !important`
}

const roundedBottom = {
  borderBottomRightRadius: `${borderRadius} !important`,
  borderBottomLeftRadius: `${borderRadius} !important`
}

const roundedLeft = {
  borderTopLeftRadius: `${borderRadius} !important`,
  borderBottomLeftRadius: `${borderRadius} !important`
}

const roundedCircle = {
  borderRadius: '50% !important'
}

const roundedNone = {
  borderRadius: '0 !important'
}

export {
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderThemeColors,
  borderWhite,
  rounded,
  roundedTop,
  roundedRight,
  roundedBottom,
  roundedLeft,
  roundedCircle,
  roundedNone
}
