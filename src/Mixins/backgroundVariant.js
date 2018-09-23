import {bodyBg} from '../Variables/Body'
import {darken} from '../Functions/darken'
import {mix} from '../Functions/mix'
import {hoverFocus} from './hover'

export const bgVariant = (parent, color) => {
  let style = {}
  style[parent] = {backgroundColor: `${color} !important`}
  style[`a.${parent}, button.${parent}`] = {
    ...hoverFocus({
      backgroundColor: `${darken(color, '10%')} !important`
    })
  }
  return style
}

export const bgGradientVariant = (parent, color) => {
  let style = {}
  style[parent] = {backgroundColor: `${color} ${`linear-gradient(180deg, ${mix(bodyBg, color, '15%')})`} ${color} repeat-x !important`}
  return style
}
