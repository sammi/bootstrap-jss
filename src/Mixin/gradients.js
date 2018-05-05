import {enableGradients} from '../Variables/Options'
import format from 'string-format'
import {mix} from '../Functions/mix'
import {bodyBg} from '../Variables/Body'

export const gradientBg = (color, enable=enableGradients) => enable ? 
    {background: format('{} linear-gradient(180deg, {}, {}) repeat-x', color, mix(bodyBg, color, '15%'), color)}
    :
    {'background-color': color}
