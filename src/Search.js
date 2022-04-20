import React , {useState} from 'react';
import SearchResult from './SearchResult';

const Search = () => {
  const [img,setImg] = useState();
  const InputEvent = (e) => {
    const data = e.target.value;
    console.log(data);
    setImg(data)
  }
  return (
    <div>
      <input type="text" placeholder="Search anything..." onChange={InputEvent} value={img} />
      {img  === '' ? null : <SearchResult name={img}/>}
    </div>
  )
}

export default Search;