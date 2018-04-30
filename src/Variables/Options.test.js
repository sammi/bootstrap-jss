import {
    enableCaret,
    enableRounded,
    enableShadows,
    enableGradients,
    enableTransitions,
    enableHoverMediaQuery,
    enableGridClasses,
    enablePrintStyles
} from './Options'

describe('Options', () => {
    it('Quickly modify global styling by enabling or disabling optional features.', () => {
        expect(enableCaret).toEqual('true !default')
        expect(enableRounded).toEqual('true !default')
        expect(enableShadows).toEqual('false !default')
        expect(enableGradients).toEqual('false !default')
        expect(enableTransitions).toEqual('true !default')
        // Deprecated, no longer affects any compiled CSS
        expect(enableHoverMediaQuery).toEqual('false !default')
        expect(enableGridClasses).toEqual('true !default')
        expect(enablePrintStyles).toEqual('true !default')
    })

})