import React from 'react';
import '../styles/common.css';
import { useSelector,useDispatch } from 'react-redux';
import { incNumber,decNumber } from '../actions/index';
const IncreDecre = () => {
  //  useDispatch hook is used to dispatch an action 
  //  useSelector hook is used to get the state from the redux store.
  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch();
  return (
    <div>
      <div class="redux-practice">
        <h1> Increment / Decrement counter </h1>
        <h4> using React and Redux </h4>
        <div class="quantity">
          <a class="quantity_minus" title="Decrement" onClick={() => dispatch(decNumber())}> <span> - </span> </a>
          <input name="quantity" type="text" class="quantity_input" value={myState} />
          <a class="quantity_plus" title="Increment" onClick={() => dispatch(incNumber())}> <span> + </span> </a>
        </div>
      </div>
    </div>
  )
}

export default IncreDecre;