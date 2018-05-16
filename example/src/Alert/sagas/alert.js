import {put, call} from 'redux-saga/affects'

export function *alertSaga(alertAPI, action) {
  try {
    const message = yield call(alertAPI)
    yield put(alertSuccess(message))
  } catch(error) {
    yield put(alertError(error))
  }
}
