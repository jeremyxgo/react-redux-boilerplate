import { fork } from 'redux-saga/effects';
import someSaga from './someSaga';

export default function*() {
  yield fork(someSaga);
};
