import {
  fontFamilyMonospace,
  fontWeightLight as fontWeightLightVariable,
  fontWeightLighter as fontWeightLighterVariable,
  fontWeightNormal as fontWeightNormalVariable,
  fontWeightBold as fontWeightBoldVariable,
  fontWeightBolder as fontWeightBolderVariable,
  textMuted as textMutedVariable
} from '../Variables/Fonts'
import { textTruncate as textTruncateMixin } from '../Mixins/textTruncate'
import { gridBreakpoints } from '../Variables/Grid'
import { breakpointInfix } from '../Mixins/breakpoints'
import { themeColors, white, black } from '../Variables/Colors'
import { textEmphasisVariant } from '../Mixins/textEmphasis'
import { textHide as textHideMixin } from '../Mixins/textHide'
import { rgba } from '../Functions/rgba'
import { bodyColor } from '../Variables/Body'

const textMonospace = {
  fontFamily: fontFamilyMonospace
}
const textJustify = {
  textAlign: 'justify !important'
}
const textNowrap = {
  whiteSpace: 'nowrap !important'
}
const textTruncate = textTruncateMixin

const responsive = {}
for (const [name] of Object.entries(gridBreakpoints)) {
  const infix = breakpointInfix(name, gridBreakpoints)
  responsive[`text${infix}-left`] = { textAlign: 'left !important' }
  responsive[`text${infix}-right`] = { textAlign: 'right !important' }
  responsive[`text${infix}-center`] = { textAlign: 'center !important' }
}

const textLowercase = { textTransform: 'lowercase !important' }
const textUppercase = { textTransform: 'uppercase !important' }
const textCapitalize = { textTransform: 'capitalize !important' }

const fontWeightLight = { fontWeight: `${fontWeightLightVariable} !important` }
const fontWeightLighter = { fontWeight: `${fontWeightLighterVariable} !important` }
const fontWeightNormal = { fontWeight: `${fontWeightNormalVariable} !important` }
const fontWeightBold = { fontWeight: `${fontWeightBoldVariable} !important` }
const fontWeightBolder = { fontWeight: `${fontWeightBolderVariable} !important` }
const fontWeightItalic = { fontWeight: 'italic !important' }

const textWhite = { color: `${white} !important` }

let textThemeColorsValue = {}
for (const [color, value] of Object.entries(themeColors)) {
  textThemeColorsValue = {
    ...textThemeColorsValue,
    ...textEmphasisVariant(`text-${color}`, value)
  }
}
const textThemeColors = textThemeColorsValue

const textBody = { color: `${bodyColor} !important` }
const textMuted = { color: `${textMutedVariable} !important` }
const textBlack50 = { color: `${rgba(black, 0.5)} !important` }
const textWhite50 = { color: `${rgba(white, 0.5)} !important` }

const textHide = { ...textHideMixin() }
const textDecorationNone = { textDecoration: 'none !important' }
const textReset = { color: 'inherit !important' }

export {
  textMonospace, textJustify, textNowrap, textTruncate, responsive,
  textLowercase, textUppercase, textCapitalize,
  fontWeightLight, fontWeightLighter, fontWeightNormal, fontWeightBold, fontWeightBolder, fontWeightItalic,
  textWhite, textThemeColors, textBody, textMuted, textBlack50, textWhite50,
  textHide, textDecorationNone, textReset
}
