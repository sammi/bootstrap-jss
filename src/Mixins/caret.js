import format from 'string-format'
import { caretWidth } from '../Variables/Components'
import { enableCaret } from '../Variables/Options'
import {size} from '../Functions/size'

export const caretDown = () => ({
  borderTop: format('{} solid', caretWidth),
  borderRight: format('{} solid transparent', caretWidth),
  borderBottom: 0,
  borderLeft: format('{} solid transparent', caretWidth)
})

export const caretUp = () => ({
  borderTop: 0,
  borderRight: format('{} solid transparent', caretWidth),
  borderBottom: format('{} solid', caretWidth),
  borderLeft: format('{} solid transparent', caretWidth)
})

export const caretRight = () => ({
  borderTop: format('{} solid transparent', caretWidth),
  borderRight: 0,
  borderBottom: format('{} solid transparent', caretWidth),
  borderLeft: format('{} solid', caretWidth)
})

export const caretLeft = () => ({
  borderTop: format('{} solid transparent', caretWidth),
  borderRight: format('{} solid', caretWidth),
  borderBottom: format('{} solid transparent', caretWidth)
})

const getCaret = (direction) => {
  if (direction === 'down') {
    return caretDown()
  } else if (direction === 'up') {
    return caretUp()
  } else if (direction === 'right') {
    return caretRight()
  } else if (direction === 'left') {
    return {
      '&::after': {
        display: 'none'
      },
      '&::before': {
        display: 'inline-block',
        width: 0,
        height: 0,
        marginRight: format('{}{}', size(caretWidth).value * 0.85, size(caretWidth).unit),
        verticalAlign: format('{}{}', size(caretWidth).value * 0.85, size(caretWidth).unit),
        content: '',
        ...caretLeft()
      }
    }
  }
}

export const caret = (direction = 'down', myEnableCaret = enableCaret) => {
  if (myEnableCaret) {
    return {
      '&:after': {
        display: 'inline-block',
        width: 0,
        height: 0,
        marginLeft: format('{}{}', size(caretWidth).value * 0.85, size(caretWidth).unit),
        verticalAligh: format('{}{}', size(caretWidth).value * 0.85, size(caretWidth).unit),
        content: '',
        ...getCaret(direction),
        '&:empty::after': {
          marginLeft: 0
        }
      }
    }
  }
}
