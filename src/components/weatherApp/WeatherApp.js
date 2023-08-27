import React , {useState} from 'react'
import './WeatherApp.css'


import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";
import humidity_icon from "../assets/humidity.png";


const WeatherApp = () => {
  let api_key="ed47e628b7c7657c8f25a739c28e5fe7";

const[wicon , setwicon] = useState(cloud_icon);


  const search = async ()=>{
    const element = document.getElementsByClassName("cityInput")
    if(element[0].value==="")
    {
      return 0;
    }
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();

    const humidity = document.getElementsByClassName("humidity-percentage");
    const wind = document.getElementsByClassName("wind-speed");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML=data.main.humidity+ " %";
    wind[0].innerHTML =Math.floor(data.wind.speed) + " km/h"; 
    temperature[0].innerHTML=Math.floor(data.main.temp)+" °C";
    location[0].innerHTML=data.name;

    if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
    {
       setwicon(clear_icon);
    }
    else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
    {
       setwicon(cloud_icon);        
    }
    else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
    {
       setwicon(drizzle_icon);        
    }
    else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
    {
       setwicon(drizzle_icon);        
    }
    else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
    {
       setwicon(rain_icon);        
    }
    else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
    {
       setwicon(rain_icon);        
    }
    else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
    {
       setwicon(snow_icon);        
    }
    else {
      setwicon(clear_icon);
    }


  }
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="search" />
        <div className="search-icon" onClick={()=>{search()}}>
          <img src={search_icon} alt=""/>
        </div>
      </div>
      <div className='weather-image'>
        <img src={wicon} alt="" />
      </div>
      <div className='weather-temp'>24</div>
      <div className='weather-location'>London</div>
      <div className='data-container'>
        <div classname="element">
          <img src={humidity_icon} className='item' alt=""/>
          <div className='data'>
            <div className="humidity-percentage">64%</div>
            <div className='text'>Humidity</div>
          </div>

        </div>
        <div classname="element">
          <img src={wind_icon} className='item' alt=""/>
          <div className='data'>
            <div className="wind-speed"> 18 </div>
            <div className='text'>wind speed</div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default WeatherApp;