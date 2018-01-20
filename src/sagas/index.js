import { all, fork } from 'redux-saga/effects';
import someSaga from './someSaga';

export default function* () {
  yield all([
    fork(someSaga),
  ]);
};
