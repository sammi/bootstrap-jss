import {alertVariant, bgVariant, bgGradientVariant} from './variant'
import {badgeVariant} from './badge'
import {gradientBg} from './gradients'
import {hover, hoverFocus, plainHoverFocus, hoverFocusActive} from './hover'

import Mixins from './index'

describe('Mixins', () => {

    it('Mixins', () => {

        expect(Mixins).toEqual({
            alertVariant, 
            bgVariant,
            bgGradientVariant,
            badgeVariant,
            gradientBg,
            hover,
            hoverFocus,
            plainHoverFocus,
            hoverFocusActive
        })
        
    })
})