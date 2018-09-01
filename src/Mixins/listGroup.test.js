import { listGroupItemVariant } from './listGroup'
import { darken } from '../Functions/darken'
import { white } from '../Variables/colors'
import { hoverFocus } from './hover'

describe('list groups', () => {
  it('list group item variant', () => {
    const state = ''
    const backgroundColor = 'red'
    const color = 'red'

    const expectValue = {}
    expectValue[`listGroupItem-${state}`] = {
      color: color,
      backgroundColor: backgroundColor,
      '&.listGroupItemAction': {
        ...hoverFocus({
          color: color,
          backgroundColor: darken(backgroundColor, '5%')
        }),
        '&.active': {
          color: white,
          backgroundColor: color,
          borderColor: color
        }
      }
    }

    expect(listGroupItemVariant(state, backgroundColor, color)).toEqual(expectValue)
  })
})
