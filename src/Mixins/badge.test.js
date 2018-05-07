import {colorYiq} from '../Functions/colorYiq'
import {darken} from '../Functions/darken'
import { hoverFocus } from './hover'

import {badgeVariant} from './badge'

describe('badge', () => {
    it('badge', () => {
        const bg = '#abc'
        expect(badgeVariant(bg)).toEqual({
            color: colorYiq(bg),
            backgroundColor: bg,
            '&[href]': {
                extend: hoverFocus({
                    color: colorYiq(bg),
                    textDecoration: 'none',
                    backgroundColor: darken(bg, '10%')
                })
            }
        })
    })

})
