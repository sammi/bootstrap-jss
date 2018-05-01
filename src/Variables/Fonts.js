import { spacer } from './Spacing'
import { grays, black } from './Colors'
import format from 'string-format'
import { rgba } from '../Functions/rgba'
import { size } from '../Functions/size'
import { borderWidth } from './Components'

export const fontFamilySansSerif = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !default'
export const fontFamilyMonospace = 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !default'
export const fontFamilyBase = fontFamilySansSerif

export const fontSizeBase = '1rem !default'
export const fontSizeLg = format('{}{} !default', size(fontSizeBase).value * 1.25, size(fontSizeBase).unit)
export const fontSizeSm = format('{}{} !default', size(fontSizeBase).value * .875, size(fontSizeBase).unit)

export const fontWeightLight = '300 !default'
export const fontWeightNormal = '400 !default'
export const fontWeightBold = '700 !default'
export const fontWeightBase = fontWeightNormal
export const lineHeightBase = '1.5 !default'

export const h1FontSize = format('{}{} !default', size(fontSizeBase).value * 2.5, size(fontSizeBase).unit)
export const h2FontSize = format('{}{} !default', size(fontSizeBase).value * 2, size(fontSizeBase).unit)
export const h3FontSize = format('{}{} !default', size(fontSizeBase).value * 1.75, size(fontSizeBase).unit)
export const h4FontSize = format('{}{} !default', size(fontSizeBase).value * 1.5, size(fontSizeBase).unit)
export const h5FontSize = format('{}{} !default', size(fontSizeBase).value * 1.25, size(fontSizeBase).unit)
export const h6FontSize = fontSizeBase
export const headingsMarginBottom = format('{}{} !default', size(spacer).value, size(spacer).unit)
export const headingsFontFamily = 'inherit !default'
export const headingsFontWeight = '500 !default'
export const headingsLineHeight = '1.2 !default'
export const headingsColor = 'inherit !default'

export const display1Size = '6rem !default'
export const display2Size = '5.5rem !default'
export const display3Size = '4.5rem !default'
export const display4Size = '3.5rem !default'

export const display1Weight = '300 !default'
export const display2Weight = '300 !default'
export const display3Weight = '300 !default'
export const display4Weight = '300 !default'
export const displayLineHeight = headingsLineHeight

export const leadFontSize = format('{}{} !default', size(fontSizeBase).value * 1.25, size(fontSizeBase).unit)
export const leadFontWeight = '300 !default'

export const smallFontSize = '80% !default'

export const textMuted = grays._600

export const blockquoteSmallColor = grays._600
export const blockquoteFontSize = format('{}{} !default', size(fontSizeBase).value * 1.25, size(fontSizeBase).unit)

export const hrBorderColor = format('{} !default', rgba(black, .1))
export const hrBorderWidth = borderWidth

export const markPadding = '.2em !default'

export const dtFontWeight = fontWeightBold

export const kbdBoxShadow = format('inset 0 -.1rem 0 {} !default', rgba(black, .25))
export const nestedKbdFontWeight = fontWeightBold

export const listInlinePadding = '.5rem !default'

export const markBg = '#fcf8e3 !default'
export const hrMarginY = spacer
