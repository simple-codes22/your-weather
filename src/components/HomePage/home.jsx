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
          <Search />
          <Locations />
        </section>
    </section>
    </>
  )
}

export default Home