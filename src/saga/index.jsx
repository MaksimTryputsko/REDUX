import { all } from 'redux-saga/effects'
import { countWathcer } from './countSaga'
import { userWatcher } from './userSaga'

export function* rootWatcher() {
  yield all([countWathcer(), userWatcher()])
}
