import Navigation from "../misc/navigation";
import './home.css';
import Search from "../misc/search";
import Locations from "../misc/locations";





const Home = () => {
  return (
    <>
    <Navigation />
    <section className=" flex flex-col items-center justify-center min-h-screen min-w-full text-white" style={{background: '#0000007d'}}>
      <div className="home-base fixed left-0 right-0 bottom-0 top-0 -z-40"></div>
        <section className="flex flex-col justify-center items-center h-full">
          <Search outerDivClass="bg-white flex items-center self-center justify-center rounded-sm backdrop-blur-sm mini:mt-20 mini:w-auto" inputClass="text-base text-black outline-none w-96 h-8 m-2 rouded-none bg-transparent placeholder:text-base placeholder:text-gray-500 mini:max-w-xs" LinkClass="flex content-center justify-center m-2 w-6 h-6  mini:w-auto mini:h-auto" imgClass="w-6 h-6" />
          <Locations />
        </section>
    </section>
    </>
  )
}

export default Home