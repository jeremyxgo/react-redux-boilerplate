export const UPDATE_COUNT_REQUEST = 'UPDATE_COUNT_REQUEST';
export const updateCountRequest = (increment) => ({
    type: UPDATE_COUNT_REQUEST,
    payload: { increment },
});

export const UPDATE_COUNT_SUCCESS = 'UPDATE_COUNT_SUCCESS';
export const updateCountSuccess = (count) => ({
    type: UPDATE_COUNT_SUCCESS,
    payload: { count },
});

export const UPDATE_COUNT_FAILURE = 'UPDATE_COUNT_FAILURE';
export const updateCountFailure = () => ({
    type: UPDATE_COUNT_FAILURE,
});
