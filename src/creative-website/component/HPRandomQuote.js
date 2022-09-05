import React ,{useEffect,useState} from 'react'
import axios from 'axios'
const HPRandomQuote = () => {
  const [quote,setQuote] = useState('')

  useEffect(() => {
    fetchQuote()
  },[quote])

  const fetchQuote = () => {
    axios.get('https://api.adviceslip.com/advice').then((response) => {
      const {advice} = response.data.slip;
      setQuote(advice)
    }).catch((error) => {
      console.log(error);
    })
  }
  return (
    <div className="random-quote-app">
      <div className="card">
        <h1 className>{quote}</h1>
        <button className="button" onClick={fetchQuote}>
          <span>Change Quote</span>
        </button>
      </div>
    </div>
  )
}

export default HPRandomQuote