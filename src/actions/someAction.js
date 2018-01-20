export const UPDATE_COUNT_REQUEST = 'UPDATE_COUNT_REQUEST';
export const updateCountRequest = (newCount) => ({
  type: UPDATE_COUNT_REQUEST,
  payload: { newCount },
});

export const UPDATE_COUNT_SUCCESS = 'UPDATE_COUNT_SUCCESS';
export const updateCountSuccess = (newCount) => ({
  type: UPDATE_COUNT_SUCCESS,
  payload: { newCount },
});

export const UPDATE_COUNT_FAILURE = 'UPDATE_COUNT_FAILURE';
export const updateCountFailure = () => ({
  type: UPDATE_COUNT_FAILURE,
});
