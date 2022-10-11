import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../misc/navigation';
import WeatherImg from '../misc/weatherImg';

/*
    I will need current location, and

*/

const LocPage = () => {
    const { locationKey } = useParams();

    const [locationDetails, setLocationDetails] = useState(null);
    const [locationData, setLocationData] = useState(null);
    const [forecast, setForecast] = useState(null);

    useEffect(() => {
        
        const getLocationData = async() => {

            const locationResponse = await fetch(`http://dataservice.accuweather.com/locations/v1/${locationKey}?apikey=${import.meta.env.VITE_PR_KEY}`)
            const locationResult = await locationResponse.json();
            setLocationDetails(locationResult);

            const dataResponse = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${import.meta.env.VITE_PR_KEY}`);
            const dataResult = await dataResponse.json();
            setLocationData(dataResult[0]);

            const forecastResponse = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${import.meta.env.VITE_PR_KEY}`);
            const forecastResult = await forecastResponse.json();

            return setForecast(forecastResult);

        }


        getLocationData();

    }, [])


    return (
        <div className='flex flex-col'>
            <Navigation />
            
            <div className='flex flex-col bg-slate-200 min-h-screen p-10'>
                
                {locationDetails !== null ? 
                <>
                    <div className=" my-10 text-4xl font-medium text-gray-800">
                        {locationDetails.EnglishName}, {locationDetails.Country.EnglishName}
                    </div>
                </>  
                : <></>}

                {locationData !== null ? 
                <div className="flex items-center mini:my-4">
                    <WeatherImg number={locationData.WeatherIcon} class_="h-20 micro:h-14" />
                    <div className='flex flex-col text-xl mini:text-base'>
                        <div>{locationData.Temperature.Metric.Value}&deg;C/{locationData.Temperature.Imperial.Value}&deg;F</div>
                        <div>{locationData.WeatherText}</div>
                    </div>
                </div>
                : <></>}

                {forecast !== null ?
                <div className="flex flex-col justify-center items-center w-full tracking-wide">
                    <div className="my-6 text-4xl font-medium text-gray-800">Forecast</div>
                    <div className="italic text-2xl text-gray-500 text-center">
                        "{forecast.Headline.Text}"
                    </div>
                    <div className="grid grid-cols-5 justify-center my-8 inbtwn:grid-cols-3 mini:grid-cols-2 micro:grid-cols-1">
                        {forecast.DailyForecasts.map(elem => {
                            const days = {
                                0: 'Sunday',
                                1: 'Monday',
                                2: 'Tuesday',
                                3: 'Wednesday',
                                4: 'Thursday',
                                5: 'Friday',
                                6: 'Saturday'
                            }
                            let d2d = new Date(elem.Date);

                            return (
                                <div key={elem.Date} className='flex flex-col justify-center m-3 rounded-md p-5 bg-slate-600 hover:bg-black transition-all'>
                                    {forecast.DailyForecasts.indexOf(elem) === 0 ?
                                        <><div className="tracking-wider text-lg text-white">Later Today</div>
                                        <div style={{color: '#ffffffcc'}}>Min: {parseInt(5/9 * (elem.Temperature.Minimum.Value - 32))}&deg;C/{elem.Temperature.Minimum.Value}&deg;F</div>
                                        <div style={{color: '#ffffffcc'}}>Max: {parseInt(5/9 * (elem.Temperature.Maximum.Value - 32))}&deg;C/{elem.Temperature.Maximum.Value}&deg;F</div>
                                        <div style={{color: '#ffffffcc'}}>{elem.Day.IconPhrase}</div>
                                        </> : <><div className="tracking-wider text-lg text-white">{days[d2d.getDay()]}</div>
                                        <div style={{color: '#ffffffcc'}}>Min: {parseInt(5/9 * (elem.Temperature.Minimum.Value - 32))}&deg;C/{elem.Temperature.Minimum.Value}&deg;F</div>
                                        <div style={{color: '#ffffffcc'}}>Max: {parseInt(5/9 * (elem.Temperature.Maximum.Value - 32))}&deg;C/{elem.Temperature.Maximum.Value}&deg;F</div>
                                        <div style={{color: '#ffffffcc'}}>{elem.Day.IconPhrase}</div>
                                        </>
                                        }
                                </div>
                            )
                        }
                        )
                        }
                    </div>
                </div>
                :
                <></>
                }
            </div>

        </div>
    )
}

export default LocPage

