import { transitionFade, transitionCollapse } from '../Variables/Components'
import { transition } from '../Mixins/transition'
import { fade, collapse, collapsing } from './Transitions'
import jss from 'jss'
import preset from 'jss-preset-default'
jss.setup(preset())

describe('Transitions classe', () => {
  it('fade', () => {
    expect(fade).toEqual({
      ...transition(transitionFade),
      '&:not($show)': {
        opacity: 0
      }
    })
    expect(jss.createStyleSheet({ show: {}, fade }).toString()).toBeDefined()
  })

  it('collapse', () => {
    expect(collapse).toEqual({
      '&:not($show)': {
        display: 'none'
      }
    })
    expect(jss.createStyleSheet({ show: {}, collapse }).toString()).toBeDefined()
  })

  it('collapsing', () => {
    expect(collapsing).toEqual({
      position: 'relative',
      height: 0,
      overflow: 'hidden',
      ...transition(transitionCollapse)
    })
    expect(jss.createStyleSheet({ show: {}, collapsing }).toString()).toBeDefined()
  })
})
