import { put, takeEvery } from 'redux-saga/effects'
import {
  ASYNC_DECREMENT,
  ASYNC_INCREMENT,
  AsyncIncrementCreator,
  decrementCreator,
  incrementCreator,
} from '../Reducer/countReducer'

const delay = (ms: any) => new Promise((res) => setTimeout(res, ms))

function* incementWorker() {
  yield delay(1000)
  yield put(incrementCreator())
}
function* decrementWorker() {
  yield delay(1000)
  yield put(decrementCreator())
}

export function* countWathcer() {
  yield takeEvery(ASYNC_INCREMENT, incementWorker)
  yield takeEvery(ASYNC_DECREMENT, decrementWorker)
}
