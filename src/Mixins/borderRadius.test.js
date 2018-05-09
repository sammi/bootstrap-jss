import {borderRadius as defaultBorderRadius} from '../Variables/Components'
import {enableRounded} from '../Variables/Options'

import {borderRadius, borderTopRadius, borderRightRadius, borderBottomRadius, borderLeftRadius} from './borderRadius'
describe('Single side border-radius', () => {
    it('Single side border-radius', () => {
        expect(borderRadius()).toEqual({borderRadius: defaultBorderRadius})
        expect(borderRadius('0.3rem', false)).toEqual(null)

        expect(borderTopRadius()).toEqual({
            borderTopLeftRadius: defaultBorderRadius,
            borderTopRightRadius: defaultBorderRadius
        })
        expect(borderTopRadius('0.3rem', false)).toEqual(null)

        expect(borderRightRadius()).toEqual({
            borderTopRightRadius: defaultBorderRadius,
            borderBottomRightRadius: defaultBorderRadius
        })
        expect(borderRightRadius('0.3rem', false)).toEqual(null)

        expect(borderBottomRadius()).toEqual({
            borderBottomRightRadius: defaultBorderRadius,
            borderBottomLeftRadius: defaultBorderRadius
        })
        expect(borderBottomRadius('0.3rem', false)).toEqual(null)

        expect(borderLeftRadius()).toEqual({
            borderTopLeftRadius: defaultBorderRadius,
            borderBottomLeftRadius: defaultBorderRadius
        })
        expect(borderLeftRadius('0.3rem', false)).toEqual(null)
        
    })


})
