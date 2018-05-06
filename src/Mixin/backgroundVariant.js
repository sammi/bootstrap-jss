import {darken} from '../Functions/darken'
import {mix} from '../Functions/mix'
import format from 'string-format'
import {hoverFocus} from './hover'
import {bodyBg} from '../Variables/Body'

export const bgVariant = (parent, color) => {
    let style = {}
    style[parent] = {backgroundColor: format('{} !important', color)}
    style[format('a.{}, button.{}', parent, parent)] = {
        extend: hoverFocus({
            backgroundColor: format('{} !important', darken(color, '10%'))
        })
    }
    return style
}

export const bgGradientVariant = (parent, color) => {
    let style = {}
    style[parent] = {backgroundColor: format(
        '{} {} {} repeat-x !important', 
        color, 
        format('linear-gradient(180deg, {}', mix(bodyBg, color, '15%')), 
        color
    )}
    return style
}