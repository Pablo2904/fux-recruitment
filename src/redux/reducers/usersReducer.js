import { USERS } from '../constants';

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case USERS.LOAD_SUCCESS:
      return [...state, ...action.payload.data.data];
    default:
      return state;
  }
};

export default usersReducer;
