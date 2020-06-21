import { all } from 'redux-saga/effects';

import { usersLoad, userSet } from './usersSagas';

export default function* rootSaga() {
  yield all([
    usersLoad(),
    userSet(),
  ])
}
