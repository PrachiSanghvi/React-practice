import './App.css';
import React,{ useState } from 'react';

function DropDown() {

  let fruits =  [
    { label:'ok',value:'🆗'},{ label:'Question_mark',value:'❓'},{ label:'laugh',value:'😅'},
  ]
  let [fruit,setFruit] = useState('Select a Fruit')
  let handleFruitChange = (e) => {
    setFruit(e.target.value)
  }

  
  return (
    <div className="DropDown">
      {/* Display value of Fruit */}
      {fruit}
      <br/>
      <select onChange={handleFruitChange}>
        <option value="select a fruit">Select a fruit</option>
        {fruits.map((fruit) => (
          <option key={fruit.label} value={fruit.value}>{fruit.label}</option>
        ))}
      </select>
    </div>
  );
}

export default DropDown ;