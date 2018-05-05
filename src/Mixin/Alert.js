import {enableGradients} from '../Variables/Options'
import {bodyBg} from '../Variables/Body'
import format from 'string-format'
import {darken} from '../Functions/darken'

export const gradientBg = color => enableGradients ? 
    {background: format('{} linear-gradient(180deg, {}, {}) repeat-x', color, mix(bodyBg, color, '15%'), color)}
    :
    {'background-color': color}

export const alertVariant = (background, border, color) => {
    return {
        color: color,
        extend: gradientBg(background),
        'border-color': border,
        hr: {
            'border-top-color': darken(border, '5%')
        },
        'alert-link': {
            color: darken(color, '10%')
        }
    }
}
