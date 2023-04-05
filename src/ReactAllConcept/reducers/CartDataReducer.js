const PRODUCTS_FOUND = 'PRODUCTS_FOUND';
const initState = {
  isCartOpen: false,
  checkout: { lineItems: [] },
  products: [],
  shop: {}
}

export default (state = initState, action) => {
  switch (action.type) {
    case PRODUCTS_FOUND:
      return { ...state, products: action.payload }
    default:
      return state;
  }
}