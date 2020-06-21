import { all } from 'redux-saga/effects';

import { usersLoad, userLoad } from './usersSagas';

export default function* rootSaga() {
  yield all([
    usersLoad(),
    userLoad(),
  ])
}
