import format from 'string-format'
import {caretWidth} from '../Variables/Components'
import {size} from '../Functions/size'

import {caretDown, caretUp, caretRight, caretLeft, caret} from './caret'

describe('caret', () => {
  it('caret', () => {
    expect(caretDown()).toEqual({
      borderTop: format('{} solid', caretWidth),
      borderRight: format('{} solid transparent', caretWidth),
      borderBottom: 0,
      borderLeft: format('{} solid transparent', caretWidth)
    })

    expect(caretUp()).toEqual({
      borderTop: 0,
      borderRight: format('{} solid transparent', caretWidth),
      borderBottom: format('{} solid', caretWidth),
      borderLeft: format('{} solid transparent', caretWidth)
    })

    expect(caretRight()).toEqual({
      borderTop: format('{} solid transparent', caretWidth),
      borderRight: 0,
      borderBottom: format('{} solid transparent', caretWidth),
      borderLeft: format('{} solid', caretWidth)
    })

    expect(caretLeft()).toEqual({
      borderTop: format('{} solid transparent', caretWidth),
      borderRight: format('{} solid', caretWidth),
      borderBottom: format('{} solid transparent', caretWidth)
    })

    expect(caret('down', false)).toEqual(undefined)

    expect(caret('down', true)).toEqual({
      '&:after': {
        display: 'inline-block',
        width: 0,
        height: 0,
        marginLeft: format('{}{}', size(caretWidth).value * 0.85, size(caretWidth).unit),
        verticalAligh: format('{}{}', size(caretWidth).value * 0.85, size(caretWidth).unit),
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
        marginLeft: format('{}{}', size(caretWidth).value * 0.85, size(caretWidth).unit),
        verticalAligh: format('{}{}', size(caretWidth).value * 0.85, size(caretWidth).unit),
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
        marginLeft: format('{}{}', size(caretWidth).value * 0.85, size(caretWidth).unit),
        verticalAligh: format('{}{}', size(caretWidth).value * 0.85, size(caretWidth).unit),
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
        marginLeft: format('{}{}', size(caretWidth).value * 0.85, size(caretWidth).unit),
        verticalAligh: format('{}{}', size(caretWidth).value * 0.85, size(caretWidth).unit),
        content: '',
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
        marginLeft: format('{}{}', size(caretWidth).value * 0.85, size(caretWidth).unit),
        verticalAligh: format('{}{}', size(caretWidth).value * 0.85, size(caretWidth).unit),
        content: '',
        ...caretDown(),
        '&:empty::after': {
          marginLeft: 0
        }
      }
    })
  })
})
