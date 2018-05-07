import {alertVariant, backgroundVariant} from './variant'
import {badgeVariant} from './badge'
import {gradientBg} from './gradients'
import {hover, hoverFocus, plainHoverFocus, hoverFocusActive} from './hover'

import Mixins from './index'

describe('Mixins', () => {

    it('Mixins', () => {

        expect(Mixins).toEqual({
            alertVariant, 
            backgroundVariant,
            badgeVariant,
            gradientBg,
            hover,
            hoverFocus,
            plainHoverFocus,
            hoverFocusActive
        })
        
    })
})