import { all, call } from '@redux-saga/core/effects';
import myWebsiteSaga from './userSaga';
import productSaga from './productSaga';
export default function* rootSaga() {
  yield all([
    call(myWebsiteSaga),
    call(productSaga)
  ])
}