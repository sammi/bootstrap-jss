import {bgVariant, bgGradientVariant} from './backgroundVariant'

import {darken} from '../Functions/darken'

import {hoverFocus} from './hover'
import format from 'string-format'
import {bodyBg} from '../Variables/Body'
import {mix} from '../Functions/mix'

describe('Contextual backgrounds', () => {
    const parent = 'parentClass'
    const color = '#abc'

    it('bgVariant', () => {
        expect(bgVariant(parent, color)).toEqual({
            'parentClass': {backgroundColor: format('{} !important', color)},
            'a.parentClass, button.parentClass': {
                extend: hoverFocus({
                    backgroundColor: format('{} !important', darken(color, '10%'))
                })
            }
        })
    })

    it('bgGradientVariant', () => {
        expect(bgGradientVariant(parent, color)).toEqual({
            'parentClass': {backgroundColor: format(
                '{} {} {} repeat-x !important', 
                color, 
                format('linear-gradient(180deg, {}', mix(bodyBg, color, '15%')), 
                color
            )}
        })
    })
    
})
