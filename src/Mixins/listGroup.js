import {darken} from '../Functions/darken'
import {white} from '../Variables/colors'
import {hoverFocus} from './hover'

export const listGroupItemVariant = (state, backgroundColor, color) => {
    const expectValue = {}

    expectValue[`listGroupItem-${state}`] = {
        color: color,
        backgroundColor: backgroundColor,
        '&.listGroupItemAction': {
          ...hoverFocus({
            color: color,
            backgroundColor: darken(backgroundColor, '5%')
          }) ,
          '&.active': {
            color: white,
            backgroundColor: color,
            borderColor: color
          }
        }
    }

    return expectValue
}