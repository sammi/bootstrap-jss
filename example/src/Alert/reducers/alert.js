import { ALERT_REQUEST } from '../actions/alert'

export const alert = (state = {}, action) => {
  switch(action.type) {
    case ALERT_REQUEST:
      return {
        ...state,
        ifFetching: true
      }
    default:
      return state
  }
}
