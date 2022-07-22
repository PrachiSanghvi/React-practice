import React, { useState, useEffect } from 'react'
import './ContactList.css';
import ContactCard from './ContactCard';

const ContactList = () => {

  //Use for getting data from api
  const [results, setResults] = useState([]);

  //Get search value
  const [search, setSearch] = useState("");

  //on submit data get in this object
  const [searchData,setSearchData] = useState([]);

  //flag for data found or not
  const [flag,setflag]= useState(false);

  useEffect(() => {
    getRecipes();
  }, [])

  const getRecipes = () => {
    fetch("https://randomuser.me/api/?results=5").then(results => results.json()).then(data => {
      setResults(data.results)
    })
  }

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }
  
  const getSearchData = (e) => {
    e.preventDefault();
    let resultData = results.filter(obj => obj.name.last.toLowerCase() === search.toLowerCase())
    setSearchData(resultData);
    setflag(true);
  }

  const isSearchData = flag ? searchData : results;

  return (
    <div>
      <form className="search-form" onSubmit={getSearchData}>
        <input className="" type="text" placeholder="search here" value={search} onChange={updateSearch}/>
        <button type="submit">Search</button>
      </form>
      {isSearchData.length ? isSearchData.map((contactDetail, index) => {
        return(
          <ContactCard key={index} img={contactDetail.picture.large} name={contactDetail.name.first} email={contactDetail.email} age={contactDetail.dob.age} />
        )
      }) : "No records found"}

    </div>
  )
}

export default ContactList