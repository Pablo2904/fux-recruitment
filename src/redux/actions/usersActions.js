import { USERS } from '../constants';

const loadUsers = () => ({
  type: USERS.LOAD
});

const setUser = payload => ({
  type: USERS.LOAD_USER,
  payload
});

const setUsers = posts => ({
  type: USERS.LOAD_SUCCESS,
  payload: posts
});

export { loadUsers, setUser, setUsers };
