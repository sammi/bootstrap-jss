export const ALERT_REQUEST = 'ALERT_REQUEST'
export const ALERT_SUCCESS = 'ALERT_SUCCESS'
export const ALERT_FAILURE = 'ALERT_FAILURE'

export const close = message => ({ type: ALERT_REQUEST, message })
export const alertError = error => ({ type: ALERT_FAILURE, error})
export const alertSuccess = message => ({type: ALERT_SUCCESS, message})
