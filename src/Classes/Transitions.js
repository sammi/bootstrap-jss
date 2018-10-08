import { transitionFade, transitionCollapse } from '../Variables/Components'
import { transition } from '../Mixins/transition'

export const fade = {
  ...transition(transitionFade),
  '&:not($show)': {
    opacity: 0
  }
}

export const collapse = {
  '&:not($show)': {
    display: 'none'
  }
}

export const collapsing = {
  position: 'relative',
  height: 0,
  overflow: 'hidden',
  ...transition(transitionCollapse)
}
