import {colorYiq} from './colorYiq'
import {darken} from './darken'
import {fadeIn} from './fadeIn'
import {lighten} from './lighten'
import {mix} from './mix'
import {rgba} from './rgba'
import {size} from './size'

import * as Functions from './index'

describe('Functions', () => {
    it('Functions', () => {

        expect(Functions).toEqual({
            colorYiq,
            darken,
            fadeIn,
            lighten,
            mix,
            rgba,
            size
        })
        
    })
})