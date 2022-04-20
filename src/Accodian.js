import React , { useState } from 'react';
import MyAccodian from './MyAccodian';
import { questions } from './api';
import "./Accodian.css"
const Accodian = () => {
  const [data,setData] = useState(questions);
  return (<div>
    <h1>Accodian</h1>
    {
    data.map((cd) => {
      const {id} = cd;
      return <MyAccodian key={id} {...cd}/>;
    })}
  </div>);
}

export default Accodian;