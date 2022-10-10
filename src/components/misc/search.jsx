import Search_ from '../../assets/search-interface-symbol.png';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Search = ({ outerDivClass, inputClass, LinkClass, imgClass}) => {
  
  const navigate = useNavigate()

  const [getQuery, setQuery] = useState(null);
  const [locationKey, setLocationKey] = useState(null);
  
  useEffect(() => {
    locationKey !== null && navigate(`/location/${locationKey}`)
  }, [locationKey])

  const getLocationKey = async () => {
    const locationQuery = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${import.meta.env.VITE_PR_KEY}&q=${getQuery}`);
    const locationResult = await locationQuery.json();
    console.log(locationResult[0].Key);
    return setLocationKey(locationResult[0].Key);
  }

  return (
    <div className={outerDivClass}>
        <input type="text"placeholder="Search City" className={inputClass} onKeyUp={(elem) => {
          setQuery(elem.target.value);

          if (elem.key === "Enter") {
            elem.preventDefault();
            return getLocationKey();
          }
        }} />
        <Link onClick={(elem) => {
          elem.preventDefault();
          return getLocationKey();
        }} className={LinkClass}>
            <img src={Search_} alt="Search button" className={imgClass} />
        </Link>
    </div>
  )
}

export default Search