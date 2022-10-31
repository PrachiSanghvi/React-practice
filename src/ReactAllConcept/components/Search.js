import React from 'react';
import {useState,useEffect} from 'react';
import UserData from './UserData';
const Search = () => {

  const [results, setResult] = useState([]);
  const [searchData,setSearchData] = useState([]);
  const [flag,setFlag] = useState(false);

  const getUserListData = () => {
    fetch("https://randomuser.me/api/?results=5").then(result => result.json()).then(data => setResult(data.results))
  }

  useEffect(() => {
    getUserListData();
  },[])

  const userData = flag ? searchData:results;
  return (
    <>
      <form className="search-form">
        <input className="search-input" type="text" placeholder="Search here" />
        <button typ="submit"></button>
      </form>
      {userData.length ? userData.map((contactDetail,index) => {
        return(
          <UserData />
        )
      }): "No data found"}
    </>
  )
}

export default Search