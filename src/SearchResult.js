import React from 'react'

const SearchResult = (props) => {
  // const img = `https://www.gstatic.com/webp/gallery3/1.png`;
  const img = `https://source.unsplash.com/400x300/?${props.name}`;

  return (
    <div>
      <img src={img} alt={img} />
    </div>
  )
}

export default SearchResult