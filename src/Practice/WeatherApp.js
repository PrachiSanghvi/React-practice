import React, {useState} from 'react'
import './WeatherApp.css';
const WeatherApp = () => {

  const [query,setQuery] = useState("")
  const [weather,setWeather] = useState({})

  const api = {
    key: "7d4ef5d23648c7c62acd3ccfa1a0a30b",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  const getSearchData = (e) => {
    if (e.key == 'Enter') {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result)
        setQuery('')
        console.log(result);
      });
    }
  }
  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
  }

  return (
    <div className={(typeof weather.main != 'undefined') ? ((weather.main.temp > 16) ? 'weather-app warm' : 'weather-app') : 'weather-app'}>
      <main>
        <div className="search-box">
          <input className="search-bar" type="text" placeholder="search..." value={query} onChange={e => setQuery(e.target.value)} onKeyUp={getSearchData} />
        </div> 
        {(typeof weather.main != 'undefined') ? 
          <div>
            <div className="location-box">
              {/* {weather.name}{weather.city} */}
              <div className="location">Ahmedabad , India</div>
              <div className="date">{dateBuilder(new Date())}</div>
              <div className="weather-box">
                {/* {weather.main.temp} */}
                <div className="temp">15°c</div>
                {/* {weather.weather[0].main} */}
                <div className="weather">snooze</div>
              </div>
            </div>
          </div> : ('')}
      </main>
    </div>
  )
}

export default WeatherApp