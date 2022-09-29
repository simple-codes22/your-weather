import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

/*
    I will need current location, and
*/

const LocPage = () => {
    const { locationKey } = useParams();

    const [locationDetails, setLocationDetails] = useState(null);
    const [locationData, setLocationData] = useState(null);

    useEffect(() => {
        
        const getLocationData = async() => {

            const locationResponse = await fetch(`http://dataservice.accuweather.com/locations/v1/${locationKey}?apikey=${import.meta.env.VITE_PR_KEY}`)
            const locationResult = await locationResponse.json();
            setLocationDetails(locationResult);

            const dataResponse = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${import.meta.env.VITE_PR_KEY}`);
            const dataResult = await dataResponse.json();
            return setLocationData(dataResult[0]);
        }


        // getLocationData();

    }, [])

    console.log(locationDetails)

    console.log(locationData);

    return (
        <div>
            
        </div>
    )
}

export default LocPage








// {
//     "LocalObservationDateTime": "2022-09-29T19:34:00+04:30",
//     "EpochTime": 1664463840,
//     "WeatherText": "Clear",
//     "WeatherIcon": 33,
//     "HasPrecipitation": false,
//     "PrecipitationType": null,
//     "IsDayTime": false,
//     "Temperature": {
//         "Metric": {
//             "Value": 24.6,
//             "Unit": "C",
//             "UnitType": 17
//         },
//         "Imperial": {
//             "Value": 76,
//             "Unit": "F",
//             "UnitType": 18
//         }
//     },
//     "MobileLink": "http://www.accuweather.com/en/af/hasankule/4067/current-weather/4067?lang=en-us",
//     "Link": "http://www.accuweather.com/en/af/hasankule/4067/current-weather/4067?lang=en-us"
// }