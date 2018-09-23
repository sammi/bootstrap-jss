import { caretWidth } from '../Variables/Components'
import { enableCaret } from '../Variables/Options'
import { size } from '../Functions/size'

const caretDown = () => ({
  borderTop: `${caretWidth} solid`,
  borderRight: `${caretWidth} solid transparent`,
  borderBottom: 0,
  borderLeft: `${caretWidth} solid transparent`
})

const caretUp = () => ({
  borderTop: 0,
  borderRight: `${caretWidth} solid transparent`,
  borderBottom: `${caretWidth} solid`,
  borderLeft: `${caretWidth} solid transparent`
})

const caretRight = () => ({
  borderTop: `${caretWidth} solid transparent`,
  borderRight: 0,
  borderBottom: `${caretWidth} solid transparent`,
  borderLeft: `${caretWidth} solid`
})

const caretLeft = () => ({
  borderTop: `${caretWidth} solid transparent`,
  borderRight: `${caretWidth} solid`,
  borderBottom: `${caretWidth} solid transparent`
})

const getCaret = (direction) => {
  if (direction === 'down') {
    return caretDown()
  } else if (direction === 'up') {
    return caretUp()
  } else if (direction === 'right') {
    return caretRight()
  } else {
    return {
      '&::after': {
        display: 'none'
      },
      '&::before': {
        display: 'inline-block',
        width: 0,
        height: 0,
        marginRight: `${size(caretWidth).value * 0.85}${size(caretWidth).unit}`,
        verticalAlign: `${size(caretWidth).value * 0.85}${size(caretWidth).unit}`,
        content: '',
        ...caretLeft()
      }
    }
  }
}

const caret = (direction = 'down', myEnableCaret = enableCaret) => {
  const directions = ['up', 'down', 'left', 'right']

  if (directions.indexOf(direction) !== -1 && myEnableCaret) {
    return {
      '&:after': {
        display: 'inline-block',
        width: 0,
        height: 0,
        marginLeft: `${size(caretWidth).value * 0.85}${size(caretWidth).unit}`,
        verticalAligh: `${size(caretWidth).value * 0.85}${size(caretWidth).unit}`,
        content: '',
        ...getCaret(direction),
        '&:empty::after': {
          marginLeft: 0
        }
      }
    }
  }
}

export {
  caretDown,
  caretUp,
  caretRight,
  caretLeft,
  caret
}
