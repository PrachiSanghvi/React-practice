import React from 'react';
import { useState } from 'react';
import JsonData from './Mockdata.json';
import './SearchFilter.css';
const SearchFilter = () => {
  const [searchTerm,setSearchTerm] = useState('')
  return (
    <div className="App">
      <input type="text" placeholder="Search..." onChange={(e) => setSearchTerm(e.target.value)} />
      {JsonData.filter((val) => {
        if (searchTerm == '') {
          return val
        } else if (val.first_name.toLowerCase().includes(searchTerm?.toLowerCase())) {
          return val
        }
      }).map((val,ind) => {
        return (<div className="user" key={ind}>
          <p>{val.first_name}</p>
        </div>);
      })}
    </div>
  )
}

export default SearchFilter;