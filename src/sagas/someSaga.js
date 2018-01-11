import { select, put, fork, takeEvery } from 'redux-saga/effects';
import {
  UPDATE_COUNT_REQUEST,
  updateCountSuccess,
  updateCountFailure,
} from '../actions';

function* updateCount(action) {
  try {
    const state = yield select();
    const { count } = state.someReducer;
    const { increment } = action.payload;

    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() >= 0.3 ? resolve() : reject();
      }, 250);
    });
    
    yield put(updateCountSuccess(count + increment));
  } catch (e) {
    yield put(updateCountFailure());
  }
}

function* updateCountRequestListener() {
  yield takeEvery(UPDATE_COUNT_REQUEST, updateCount);
}

export default function*() {
  yield fork(updateCountRequestListener);
}
