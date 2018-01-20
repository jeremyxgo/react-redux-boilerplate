import {
  UPDATE_COUNT_REQUEST,
  UPDATE_COUNT_SUCCESS,
  UPDATE_COUNT_FAILURE,
} from '../actions';

const defaultState = {
  status: '-',
  count: 0,
};

export default (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_COUNT_REQUEST:
      return {
        ...state,
        status: 'UPDATING',
      };
    case UPDATE_COUNT_SUCCESS:
      return {
        ...state,
        status: 'UPDATE SUCCESS',
        count: payload.newCount,
      };
    case UPDATE_COUNT_FAILURE:
      return {
        ...state,
        status: 'UPDATE FAILED',
      };
    default:
      return state;
  }
};
