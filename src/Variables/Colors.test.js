import {
    white,
    grays,
    black,
    blue,
    indigo,
    purple,
    pink,
    red,
    orange,
    yellow,
    green,
    teal,
    cyan,
    gray,
    grayDark,
    colors,
    primary,
    secondary,
    success,
    info,
    warning,
    danger,
    light,
    dark,
    themeColors,
    themeColorInterval,
    yiqContrastedThreshold,
    yiqTextDark,
    yiqTextLight
} from './Colors'

describe("Colors", () => {

    it("Base colors", () => {

        expect(white).toEqual('#fff !default')
        expect(grays).toEqual({
            _100: '#f8f9fa !default',
            _200: '#e9ecef !default',
            _300: '#dee2e6 !default',
            _400: '#ced4da !default',
            _500: '#adb5bd !default',
            _600: '#6c757d !default',
            _700: '#495057 !default',
            _800: '#343a40 !default',
            _900: '#212529 !default'
        })
        expect(black).toEqual('#000 !default')
        expect(blue).toEqual('#007bff !default')
        expect(indigo).toEqual('#6610f2 !default')
        expect(purple).toEqual('#6f42c1 !default')
        expect(pink).toEqual('#e83e8c !default')
        expect(red).toEqual('#dc3545 !default')
        expect(orange).toEqual('#fd7e14 !default')
        expect(yellow).toEqual('#ffc107 !default')
        expect(green).toEqual('#28a745 !default')
        expect(teal).toEqual('#20c997 !default')
        expect(cyan).toEqual('#17a2b8 !default')
    })

    it('Extend colors', () => {
        expect(gray).toEqual(grays._600)
        expect(grayDark).toEqual(grays._800)
        expect(colors).toEqual({
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
        })
        expect(primary).toEqual(blue)
        expect(secondary).toEqual(grays._600)
        expect(success).toEqual(green)
        expect(info).toEqual(cyan)
        expect(warning).toEqual(yellow)
        expect(danger).toEqual(red)
        expect(danger).toEqual(red)
        expect(light).toEqual(grays._100)
        expect(dark).toEqual(grays._800)
        expect(themeColors).toEqual({
            primary:    primary,
            secondary:  secondary,
            success:    success,
            info:       info,
            warning:    warning,
            danger:     danger,
            light:      light,
            dark:       dark
        })
        expect(themeColorInterval).toEqual('8% !default')
        expect(yiqContrastedThreshold).toEqual('150 !default')
        expect(yiqTextDark).toEqual(grays._900)
        expect(yiqTextLight).toEqual(white)
    })

})