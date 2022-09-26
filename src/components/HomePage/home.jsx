import Navigation from "../misc/navigation";
import './home.css';
import Search from "../misc/search";
import Locations from "../misc/locations";





const Home = () => {
  return (
    <section className=" flex flex-col fixed left-0 right-0 bottom-0 top-0 bg-black text-white">
      <div className="home-base fixed left-0 right-0 bottom-0 top-0 -z-40 opacity-40"></div>
        <Navigation />
        <section className="flex justify-center items-center h-full">
          <Search />
          <Locations />
        </section>
    </section>
  )
}

export default Home