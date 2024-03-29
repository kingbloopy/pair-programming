import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions';

const errorReducer = (state = [], action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
}

export default errorReducer;