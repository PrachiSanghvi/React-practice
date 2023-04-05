import { GET_PRODUCT_FETCH_SUCCESS } from "../actions/productAction";
export const getProductDataReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case GET_PRODUCT_FETCH_SUCCESS:
      return { ...state, products: action.products };
    default:
      return state;
  }
}