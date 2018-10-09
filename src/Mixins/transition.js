import { isEmpty } from 'lodash'
import { enableTransitions } from '../Variables/Options'
import { transitionBase } from '../Variables/Components'

export const transition = (ifEnableTransitions = enableTransitions, transition) => {
  let resultTransition

  if (ifEnableTransitions) {
    if (isEmpty(transition)) {
      resultTransition = transitionBase
    } else {
      resultTransition = transition
    }
  }

  return isEmpty(resultTransition)
    ? {
      '@media screen and (prefers-reduced-motion: reduce)': {
        transition: 'none'
      }
    }
    : {
      transition: resultTransition,
      '@media screen and (prefers-reduced-motion: reduce)': {
        transition: 'none'
      }
    }
}
