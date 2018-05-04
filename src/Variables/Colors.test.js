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

        expect(white).toEqual('#fff')
        expect(grays).toEqual({
            _100: '#f8f9fa',
            _200: '#e9ecef',
            _300: '#dee2e6',
            _400: '#ced4da',
            _500: '#adb5bd',
            _600: '#6c757d',
            _700: '#495057',
            _800: '#343a40',
            _900: '#212529'
        })
        expect(black).toEqual('#000')
        expect(blue).toEqual('#007bff')
        expect(indigo).toEqual('#6610f2')
        expect(purple).toEqual('#6f42c1')
        expect(pink).toEqual('#e83e8c')
        expect(red).toEqual('#dc3545')
        expect(orange).toEqual('#fd7e14')
        expect(yellow).toEqual('#ffc107')
        expect(green).toEqual('#28a745')
        expect(teal).toEqual('#20c997')
        expect(cyan).toEqual('#17a2b8')
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
        expect(themeColorInterval).toEqual('8%')
        expect(yiqContrastedThreshold).toEqual('150')
        expect(yiqTextDark).toEqual(grays._900)
        expect(yiqTextLight).toEqual(white)
    })

})