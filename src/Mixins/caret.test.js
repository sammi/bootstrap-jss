import { caretWidth } from '../Variables/Components'
import { size } from '../Functions/size'

import { caretDown, caretUp, caretRight, caretLeft, caret } from './caret'

describe('caret', () => {
  it('caret', () => {
    expect(caretDown()).toEqual({
      borderTop: `${caretWidth} solid`,
      borderRight: `${caretWidth} solid transparent`,
      borderBottom: 0,
      borderLeft: `${caretWidth} solid transparent`
    })

    expect(caretUp()).toEqual({
      borderTop: 0,
      borderRight: `${caretWidth} solid transparent`,
      borderBottom: `${caretWidth} solid`,
      borderLeft: `${caretWidth} solid transparent`
    })

    expect(caretRight()).toEqual({
      borderTop: `${caretWidth} solid transparent`,
      borderRight: 0,
      borderBottom: `${caretWidth} solid transparent`,
      borderLeft: `${caretWidth} solid`
    })

    expect(caretLeft()).toEqual({
      borderTop: `${caretWidth} solid transparent`,
      borderRight: `${caretWidth} solid`,
      borderBottom: `${caretWidth} solid transparent`
    })

    expect(caret('down', false)).toEqual(undefined)

    expect(caret('down', true)).toEqual({
      '&:after': {
        display: 'inline-block',
        width: 0,
        height: 0,
        marginLeft: `${size(caretWidth).value * 0.85}${size(caretWidth).unit}`,
        verticalAlign: `${size(caretWidth).value * 0.85}${size(caretWidth).unit}`,
        content: '',
        ...caretDown(),
        '&:empty::after': {
          marginLeft: 0
        }
      }
    })

    expect(caret('up', true)).toEqual({
      '&:after': {
        display: 'inline-block',
        width: 0,
        height: 0,
        marginLeft: `${size(caretWidth).value * 0.85}${size(caretWidth).unit}`,
        verticalAlign: `${size(caretWidth).value * 0.85}${size(caretWidth).unit}`,
        content: '',
        ...caretUp(),
        '&:empty::after': {
          marginLeft: 0
        }
      }
    })

    expect(caret('right', true)).toEqual({
      '&:after': {
        display: 'inline-block',
        width: 0,
        height: 0,
        marginLeft: `${size(caretWidth).value * 0.85}${size(caretWidth).unit}`,
        verticalAlign: `${size(caretWidth).value * 0.85}${size(caretWidth).unit}`,
        content: '',
        ...caretRight(),
        '&:empty::after': {
          marginLeft: 0
        }
      }
    })

    expect(caret('left', true)).toEqual({
      '&:after': {
        display: 'inline-block',
        width: 0,
        height: 0,
        marginLeft: `${size(caretWidth).value * 0.85}${size(caretWidth).unit}`,
        verticalAlign: `${size(caretWidth).value * 0.85}${size(caretWidth).unit}`,
        content: '',
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
        },
        '&:empty::after': {
          marginLeft: 0
        }
      }
    })

    expect(caret('wrong', true)).toEqual(undefined)

    expect(caret()).toEqual({
      '&:after': {
        display: 'inline-block',
        width: 0,
        height: 0,
        marginLeft: `${size(caretWidth).value * 0.85}${size(caretWidth).unit}`,
        verticalAlign: `${size(caretWidth).value * 0.85}${size(caretWidth).unit}`,
        content: '',
        ...caretDown(),
        '&:empty::after': {
          marginLeft: 0
        }
      }
    })
  })
})
