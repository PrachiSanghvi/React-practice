import React from 'react';
import { useContext } from 'react';
import { FirstName,LastName } from './ReactHooks';
const ComA = () => {

  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  return (
  <div>
    <h1>My name is {fname} {lname}</h1>
    
  </div>);
}

export default ComA;