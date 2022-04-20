import React, { useEffect , useState } from 'react';

const CovidData = () => {

  const [data,setData] = useState([]);

  const getCovidData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const actualData = await res.json();
    console.log(actualData);
    setData(actualData);
  }

  useEffect(() => {
    getCovidData()
  }, []);

  return (
    <>
      {data.map((getData,id) => {
        return(
          <div className="" key={getData.id}>
            <h5>{getData.id}</h5>
            <p>{getData.name}</p>
            <p>{getData.email}</p>
        </div>
        )
      })}
    </>
  )
}

export default CovidData;