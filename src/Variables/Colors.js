export const white  = '#fff !default'
export const grays = {
    _100: '#f8f9fa !default',
    _200: '#e9ecef !default',
    _300: '#dee2e6 !default',
    _400: '#ced4da !default',
    _500: '#adb5bd !default',
    _600: '#6c757d !default',
    _700: '#495057 !default',
    _800: '#343a40 !default',
    _900: '#212529 !default'
}

export const black  = '#000 !default'

export const blue   = '#007bff !default'
export const indigo = '#6610f2 !default'
export const purple = '#6f42c1 !default'
export const pink   = '#e83e8c !default'
export const red    = '#dc3545 !default'
export const orange = '#fd7e14 !default'
export const yellow = '#ffc107 !default'
export const green  = '#28a745 !default'
export const teal   = '#20c997 !default'
export const cyan   = '#17a2b8 !default'

export const gray   = grays._600
export const grayDark = grays._800

export const colors = {
    blue:       blue,
    indigo:     indigo,
    purple:     purple,
    pink:       pink,
    red:        red,
    orange:     orange,
    yellow:     yellow,
    green:      green,
    teal:       teal,
    cyan:       cyan,
    white:      white,
    gray:       gray,
    grayDark:   grayDark
}

export const primary = blue
export const secondary = grays._600
export const success = green
export const info = cyan
export const warning = yellow
export const danger = red
export const light = grays._100
export const dark  = grays._800

export const themeColors = {
    primary:    primary,
    secondary:  secondary,
    success:    success,
    info:       info,
    warning:    warning,
    danger:     danger,
    light:      light,
    dark:       dark
}

// Set a specific jump point for requesting color jumps
export const themeColorInterval = '8% !default'

// The yiq lightness value that determines when the lightness of color changes from "dark" to "light". Acceptable values are between 0 and 255.
export const yiqContrastedThreshold = '150 !default'

// Customize the light and dark text colors for use in our YIQ color contrast function.
export const yiqTextDark  = grays._900
export const yiqTextLight = white
