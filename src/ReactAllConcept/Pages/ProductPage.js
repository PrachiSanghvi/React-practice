import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProductFetch } from '../actions/productAction';
const ProductPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductFetch())
  }, [])
  const productData = useSelector((state={}) => state?.getProductDataReducer?.product)

  debugger;
  return (
    <div>
      <div>{productData}</div>
    </div>
  )
}

export default ProductPage