import { spacer } from './Spacing'
import { grays, black } from './Colors'
import { rgba } from '../Functions/rgba'
import { size } from '../Functions/size'
import { borderWidth } from './Components'

export const fontFamilySansSerif = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
export const fontFamilyMonospace = 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
export const fontFamilyBase = fontFamilySansSerif

export const fontSizeBase = '1rem'
export const fontSizeLg = `${size(fontSizeBase).value * 1.25}${size(fontSizeBase).unit}`
export const fontSizeSm = `${size(fontSizeBase).value * 0.875}${size(fontSizeBase).unit}`

export const fontWeightLight = 300
export const fontWeightNormal = 400
export const fontWeightBold = 700
export const fontWeightBase = fontWeightNormal
export const lineHeightBase = 1.5

export const h1FontSize = `${size(fontSizeBase).value * 2.5}${size(fontSizeBase).unit}`
export const h2FontSize = `${size(fontSizeBase).value * 2}${size(fontSizeBase).unit}`
export const h3FontSize = `${size(fontSizeBase).value * 1.75}${size(fontSizeBase).unit}`
export const h4FontSize = `${size(fontSizeBase).value * 1.5}${size(fontSizeBase).unit}`
export const h5FontSize = `${size(fontSizeBase).value * 1.25}${size(fontSizeBase).unit}`
export const h6FontSize = fontSizeBase
export const headingsMarginBottom = `${size(spacer).value}${size(spacer).unit}`
export const headingsFontFamily = 'inherit'
export const headingsFontWeight = 500
export const headingsLineHeight = 1.2
export const headingsColor = 'inherit'

export const display1Size = '6rem'
export const display2Size = '5.5rem'
export const display3Size = '4.5rem'
export const display4Size = '3.5rem'

export const display1Weight = 300
export const display2Weight = 300
export const display3Weight = 300
export const display4Weight = 300
export const displayLineHeight = headingsLineHeight

export const leadFontSize = `${size(fontSizeBase).value * 1.25}${size(fontSizeBase).unit}`
export const leadFontWeight = 300

export const smallFontSize = '80%'

export const textMuted = grays._600

export const blockquoteSmallColor = grays._600
export const blockquoteFontSize = `${size(fontSizeBase).value * 1.25}${size(fontSizeBase).unit}`

export const hrBorderColor = rgba(black, 0.1)
export const hrBorderWidth = borderWidth

export const markPadding = '.2em'

export const dtFontWeight = fontWeightBold

export const kbdBoxShadow = `inset 0 -.1rem 0 ${rgba(black, 0.25)}`
export const nestedKbdFontWeight = fontWeightBold

export const listInlinePadding = '.5rem'

export const markBg = '#fcf8e3'
export const hrMarginY = spacer
