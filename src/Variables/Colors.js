export const white = '#fff'
export const grays = {
  _100: '#f8f9fa',
  _200: '#e9ecef',
  _300: '#dee2e6',
  _400: '#ced4da',
  _500: '#adb5bd',
  _600: '#6c757d',
  _700: '#495057',
  _800: '#343a40',
  _900: '#212529'
}

export const black = '#000'

export const blue = '#007bff'
export const indigo = '#6610f2'
export const purple = '#6f42c1'
export const pink = '#e83e8c'
export const red = '#dc3545'
export const orange = '#fd7e14'
export const yellow = '#ffc107'
export const green = '#28a745'
export const teal = '#20c997'
export const cyan = '#17a2b8'

export const gray = grays._600
export const grayDark = grays._800

export const colors = {
  blue: blue,
  indigo: indigo,
  purple: purple,
  pink: pink,
  red: red,
  orange: orange,
  yellow: yellow,
  green: green,
  teal: teal,
  cyan: cyan,
  white: white,
  gray: gray,
  grayDark: grayDark
}

export const primary = blue
export const secondary = grays._600
export const success = green
export const info = cyan
export const warning = yellow
export const danger = red
export const light = grays._100
export const dark = grays._800

export const themeColors = {
  primary: primary,
  secondary: secondary,
  success: success,
  info: info,
  warning: warning,
  danger: danger,
  light: light,
  dark: dark
}

// Set a specific jump point for requesting color jumps
export const themeColorInterval = '8%'

// The yiq lightness value that determines when the lightness of color changes from "dark" to "light". Acceptable values are between 0 and 255.
export const yiqContrastedThreshold = 150

// Customize the light and dark text colors for use in our YIQ color contrast function.
export const yiqTextDark = grays._900
export const yiqTextLight = white
