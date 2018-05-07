
import {colorYiq} from '../Functions/colorYiq'
import {darken} from '../Functions/darken'
import {hoverFocus} from './hover'

export const badgeVariant = (bg) => ({
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