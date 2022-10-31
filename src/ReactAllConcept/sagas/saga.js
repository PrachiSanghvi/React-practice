import { takeEvery,call,put } from "@redux-saga/core/effects";
import { GET_USERS_FETCH, GET_USERS_SUCCESS } from "../../ReduxTodo/actions";

function userFetch() {
  return fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
}

function* workGetUserFetch() {
  const users = yield call(userFetch);
  yield put({ type: GET_USERS_SUCCESS , users });
}

function* myWebsiteSaga() {
  yield takeEvery(GET_USERS_FETCH , workGetUserFetch);
}

export default myWebsiteSaga;