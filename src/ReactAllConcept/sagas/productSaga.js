import { takeEvery, call, put } from "@redux-saga/core/effects";
import { GET_PRODUCT_FETCH, GET_PRODUCT_FETCH_SUCCESS } from "../actions/productAction";
import axios from "axios";
function myProductFetch() {
  return axios.get('https://www.nicobar.com/collections/new-arrivals-womens/products/side-placket-shirt-white.json').then((result) => {
  return result.data
  }).catch((err) => {
    console.log(err);
  });
}
function* workGetMyProductFetch() {
  const productData = yield call(myProductFetch)
  yield put({ type: GET_PRODUCT_FETCH_SUCCESS, productData })
}
function* productSaga() {
  yield takeEvery(GET_PRODUCT_FETCH, workGetMyProductFetch)
}

export default productSaga;