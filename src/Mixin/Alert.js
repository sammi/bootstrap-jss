import {bodyBg} from '../Variables/Body'
import format from 'string-format'
import {darken} from '../Functions/darken'
import {gradientBg} from './gradients'

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
