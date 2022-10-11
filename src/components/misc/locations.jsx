/*
    I'll work on:
      your location,
        Popular locations,
          with links.
*/

import { useState, useEffect } from "react";
import Spinner from "./spinner";
import WeatherImg from "./weatherImg";
import './../../CSS/locations.css';
import { Link } from "react-router-dom";

const Locations = () => {

  const [geolocations, setLocation] = useState()

  useEffect(() => {

    const getWeatherDetails = async () => {

      // Getting the main weather details for all popular locations (user location inclusive)
        
        const getLondonWeather = await fetch(`https://dataservice.accuweather.com/currentconditions/v1/328328?apikey=${import.meta.env.VITE_PR_KEY}`),
              getWashingtonWeather = await fetch(`https://dataservice.accuweather.com/currentconditions/v1/327659?apikey=${import.meta.env.VITE_PR_KEY}`),
              getBeijingWeather = await fetch(`https://dataservice.accuweather.com/currentconditions/v1/101924?apikey=${import.meta.env.VITE_PR_KEY}`),
              getMelbourneWeather = await fetch(`https://dataservice.accuweather.com/currentconditions/v1/26216?apikey=${import.meta.env.VITE_PR_KEY}`),
              getDurbanWeather = await fetch(`https://dataservice.accuweather.com/currentconditions/v1/305605?apikey=${import.meta.env.VITE_PR_KEY}`),
              getLagosWeather = await fetch(`https://dataservice.accuweather.com/currentconditions/v1/4067?apikey=${import.meta.env.VITE_PR_KEY}`);
      
        const getLondonWeatherRes_ = await getLondonWeather.json(),
              getWashingtonWeatherRes_ = await getWashingtonWeather.json(),
              getBeijingWeatherRes_ = await getBeijingWeather.json(),
              getMelbourneWeatherRes_ = await getMelbourneWeather.json(),
              getDurbanWeatherRes_ = await getDurbanWeather.json(),
              getLagosWeatherRes_ = await getLagosWeather.json();
        
        return setLocation([
          {
            name: 'London',
            weather: getLondonWeatherRes_[0],
            key: '328328'
          },
          {
            name: 'Washington',
            weather: getWashingtonWeatherRes_[0],
            key: '327659'
          },
          {
            name: 'Beijing',
            weather: getBeijingWeatherRes_[0],
            key: '101924'
          },
          {
            name: 'Melbourne',
            weather: getMelbourneWeatherRes_[0],
            key: '26216'
          },
          {
            name: 'Durban',
            weather: getDurbanWeatherRes_[0],
            key: '305605'
          },
          {
            name: 'Lagos',
            weather: getLagosWeatherRes_[0],
            key: '4607'
          },
        ])
    }
    getWeatherDetails()
    
  }, [])


  

  return (
    <>
      {geolocations !== undefined ? 
      <div className="grid grid-cols-6 justify-center mt-20 tab:grid-cols-3 mini:grid-cols-2 micro:grid-cols-1" id="card-holder">
        {geolocations.map(elem => (
          <Link key={elem.key} to={`location/${elem.key}`}>
            <div className=" flex flex-col text-center items-center justify-center m-3 rounded-md p-5 hover:bg-black" id="card" key={elem.name}>
              <div className="p-1 tracking-wider text-xl">
                {elem.name}
              </div>
              <div className="text-slate-300">
                {elem.weather.Temperature.Metric.Value}&deg;C
              </div>
              <div>
                <WeatherImg number={elem.weather.WeatherIcon} />
              </div>
              <div>
                Today
              </div>
              <div>
                {elem.weather.WeatherText}
              </div>
            </div>
          </Link>
          ))}
        </div>
        : <div className="mt-20 grid justify-center items-center"><Spinner /></div>
      }
    </>
  )
}

export default Locations