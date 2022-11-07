import { GET_PRODUCT_FETCH_SUCCESS } from "../actions/productAction";
export const getProductDataReducer = (state = { product: [] }, action) => {
  switch (action.type) {
    case GET_PRODUCT_FETCH_SUCCESS:
      return { ...state, product: action.product };
    default:
      return state;
  }
}