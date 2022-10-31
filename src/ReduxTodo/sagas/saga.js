import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_USERS_FETCH, GET_USERS_SUCCESS } from '../actions/index';

function userFetch() {
  return fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
}
function* workGetUserFetch() {
  const users = yield call(userFetch);
  yield put({ type: GET_USERS_SUCCESS, users });
  // put will do is to create an Effect object that the middleware will "read". Then,
  //  it will dispatch the action and use next(result)
  // (with result being the result of whatever the Effect told the middleware to do) 
  // to go to the next yield and  get the nextobject that the middleware will "read". Then Effect.

  // https://redux-saga.js.org/docs/basics/DispatchingActions/
}

function* mySaga() {
  // (dispatched action,function)
  yield takeEvery(GET_USERS_FETCH, workGetUserFetch);
}

export default mySaga;