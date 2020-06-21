import { INFO } from '../constants';

const setInfo = payload => ({
  type: INFO.ADD_SUCCESS,
  payload
});

const setError = error => ({
  type: INFO.ADD_FAIL,
  payload: error
});

export { setInfo, setError };
