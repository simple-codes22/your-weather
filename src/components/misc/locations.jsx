/*
    I'll work on:
        your location,
        Popular locations,
        with links.
 */

import { useState, useEffect } from "react";


const Locations = () => {

  const [geolocations, setLocation] = useState({
  })

  useEffect(() => {

    const getWeatherDetails = async () => {
      // Getting Current geolocation of the current user

      let location = false;

      const getGeolocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((resp) => {
            location = `${resp.coords.latitude}%2C${resp.coords.longitude}`;
            return;
          })
        }
      }
      
      getGeolocation();
      

      // Getting the main weather details for all popular locations (user location inclusive)

      const getCurrentKey = location !== false ? await fetch(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${import.meta.env.VITE_PR_KEY}&q=${location}`) : false,
            getLondonKey = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${import.meta.env.VITE_PR_KEY}&q=london`),
            getWashingtonKey = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${import.meta.env.VITE_PR_KEY}&q=washington`),
            getBeijingKey = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${import.meta.env.VITE_PR_KEY}&q=beijing`),
            getMelbourneKey = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${import.meta.env.VITE_PR_KEY}&q=melbourne`),
            getDurbanKey = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${import.meta.env.VITE_PR_KEY}&q=durban`),
            getLagosKey = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${import.meta.env.VITE_PR_KEY}&q=lagos`);
            

      
      const getcurrentResp = getCurrentKey !== false ? await getCurrentKey.json() : [],
            getLondonResp = await getLondonKey.json(),
            getWashingtonResp = await getWashingtonKey.json(),
            getBeijingResp = await getBeijingKey.json(),
            getMelbourneResp = await getMelbourneKey.json(),
            getDurbanResp = await getDurbanKey.json(),
            getLagosResp = await getLagosKey.json();
      
      setLocation({
        current: {city: getcurrentResp.key ? getcurrentResp.key : false},
        london: {city: parseInt(getLondonResp[0].Key)},
        washington: {city: parseInt(getWashingtonResp[0].Key)},
        beijing: {city: parseInt(getBeijingResp[0].Key)},
        melbourne: {city: parseInt(getMelbourneResp[0].Key)},
        durban: {city: parseInt(getDurbanResp[0].Key)},
        lagos: {city: parseInt(getLagosResp[0].Key)},
      });

      const getCurrentWeather = geolocations.current.city === undefined ? false : await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${geolocations.current.city}?apikey=${import.meta.env.VITE_PR_KEY}`),
            getLondonWeather = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${geolocations.london.city}?apikey=${import.meta.env.VITE_PR_KEY}`),
            getWashingtonWeather = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${geolocations.washington.city}?apikey=${import.meta.env.VITE_PR_KEY}`),
            getBeijingWeather = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${geolocations.beijing.city}?apikey=${import.meta.env.VITE_PR_KEY}`),
            getMelbourneWeather = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${geolocations.melbourne.city}?apikey=${import.meta.env.VITE_PR_KEY}`),
            getDurbanWeather = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${geolocations.durban.city}?apikey=${import.meta.env.VITE_PR_KEY}`),
            getLagosWeather = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${geolocations.lagos.city}?apikey=${import.meta.env.VITE_PR_KEY}`);
      
      const getCurrentWeatherRes_ = getCurrentWeather ? await getCurrentWeather.json() : [],
            getLondonWeatherRes_ = await getLondonWeather.json(),
            getWashingtonWeatherRes_ = await getWashingtonWeather.json(),
            getBeijingWeatherRes_ = await getBeijingWeather.json(),
            getMelbourneWeatherRes_ = await getMelbourneWeather.json(),
            getDurbanWeatherRes_ = await getDurbanWeather.json(),
            getLagosWeatherRes_ = await getLagosWeather.json();

      console.log("London Weather: ", getLondonWeatherRes_)

      
      




    }
  getWeatherDetails();

  
}, [])

console.log(geolocations)
  

  return (
    <div className="flex">
      <div></div>
    </div>
  )
}

export default Locations