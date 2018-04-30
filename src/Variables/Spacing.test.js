import {
    spacer,
    spacers,
    sizes
} from './Spacing'

//Control the default styling of most Bootstrap elements by modifying these variables. Mostly focused on spacing.
describe('Spacing', () => {
    it('Quickly modify global styling by enabling or disabling optional features.', () => {
        
        expect(spacer).toEqual('1rem !default')

        // You can add more entries to the $spacers map, should you need more variation.
        expect(spacers).toEqual({
            _0: 0,
            _1: spacer * .25,
            _2: spacer * .5,
            _3: spacer,
            _4: spacer * 1.5,
            _5: spacer * 3
        })

        // This variable affects the `.h-*` and `.w-*` classes.
        expect(sizes).toEqual({
            _25: '25%',
            _50: '50%',
            _75: '75%',
            _100: '100%',
            auto: 'auto'
        })
    })
})
