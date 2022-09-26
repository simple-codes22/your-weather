import Search_ from '../../assets/search-interface-symbol.png';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-slate-500 text-white flex justify-around content-center p-4">
        <div className="logo tracking-widest self-center text-lg">YourWeather</div>

        <div className="p-1.5 bg-white flex content-center self-center justify-center rounded-sm backdrop-blur-sm">
            <input type="text"placeholder="Search location" className="text-base text-black outline-none w-29 mx-1 rouded-none bg-transparent placeholder:text-base placeholder:text-gray-500"  />
            <Link to='/' className='flex content-center justify-center mx-0.5 w-4 h-4 self-center'>
              <img src={Search_} alt="Search button" className="w-4 h-4" />
            </Link>
        </div>
    </nav>
  )
}

export default Navigation