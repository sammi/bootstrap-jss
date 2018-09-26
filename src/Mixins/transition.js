import _ from 'lodash'
import { enableTransitions } from '../Variables/Options'
import { transitionBase } from '../Variables/Components'

export const transition = (ifEnableTransitions = enableTransitions, transition) => {
  let resultTransition

  if (ifEnableTransitions) {
    if (_.isEmpty(transition)) {
      resultTransition = transitionBase
    } else {
      resultTransition = transition
    }
  }

  return _.isEmpty(resultTransition)
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
