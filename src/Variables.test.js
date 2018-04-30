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
    cyan
} from './Variables'

describe("Color variable names", () => {

    it("Base color values", () => {

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

})