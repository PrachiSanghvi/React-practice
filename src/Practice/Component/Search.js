import React from 'react'
import { MdSearch } from 'react-icons/md';
import './Search.css';
const Search = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3em" />
      <input type="text" className="text" placeholder="Type to search.." onChange={(e) => handleSearchNote(e.target.value)} />
    </div>
  )
}

export default Search