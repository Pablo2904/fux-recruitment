import { INFO } from '../constants';

const infoReducer = (state = '', action) => {
  switch (action.type) {
    case INFO.ADD_SUCCESS:
      return action.payload
    case INFO.ADD_FAIL:
      return action.payload;
    default:
      return state;
  }
};

export default infoReducer;
