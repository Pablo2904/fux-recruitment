import { call, fork, put, take } from 'redux-saga/effects';
import { USERS, ADDING_SUCCESS_MESSAGE } from '../constants';
import { setUsers } from '../actions/usersActions'
import { setInfo, setError } from '../actions/infoActions'
import { get, post } from '../api'

export function* handleUsersLoad(payload) {
  const { data, error } = yield call(get, 'https://reqres.in/api/users');

  if (data) {
    yield put(setUsers(data))
  } else {
    yield put(setError(error.toString()));
  }
}

export function* handleUserSet(payload) {
  const { data, error } = yield call(post, 'https://reqres.in/api/users', payload.payload)

  if (data) {
    yield put(setInfo(ADDING_SUCCESS_MESSAGE))
  } else {
    yield put(setError(error.toString()));
  }
}

export function* usersLoad(action) {
  const payload = yield take(USERS.LOAD);
  yield fork(handleUsersLoad, payload)
}

export function* userSet(action) {
  const payload = yield take(USERS.LOAD_USER);
  yield fork(handleUserSet, payload)
}
