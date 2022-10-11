import Search from './search';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-slate-500 text-white flex justify-around content-center p-4 z-10 micro:">
        <Link to="/" className="logo tracking-widest self-center text-lg">YourWeather</Link>
        <Search outerDivClass="p-1.5 bg-white flex content-center self-center justify-center rounded-sm backdrop-blur-sm micro:hidden" inputClass="text-base text-black outline-none w-29 mx-1 rouded-none bg-transparent placeholder:text-base placeholder:text-gray-500" LinkClass="flex content-center justify-center mx-0.5 w-4 h-4 self-center" imgClass="w-4 h-4" />
    </nav>
  )
}

export default Navigation