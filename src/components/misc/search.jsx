import Search_ from '../../assets/search-interface-symbol.png';
import { Link } from 'react-router-dom';

const Search = () => {
  return (
    <div className=" bg-white flex items-center self-center justify-center rounded-sm backdrop-blur-sm mini:mt-20 mini:w-auto">
        <input type="text"placeholder="Search location" className="text-base text-black outline-none w-96 h-8 m-2 rouded-none bg-transparent placeholder:text-base placeholder:text-gray-500 mini:max-w-xs"  />
        <Link to='/' className='flex content-center justify-center m-2 w-6 h-6  mini:w-auto mini:h-auto'>
            <img src={Search_} alt="Search button" className="w-6 h-6" />
        </Link>
    </div>
  )
}

export default Search