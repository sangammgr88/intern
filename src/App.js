import Destination from "./components/Destination";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Reserve from "./components/Reserve";
import Review from "./components/Review";


function App() {
  return (
 <div className="lg:px-32 sm:px-0">
  <Navbar/>
  <Hero/>
  <Destination/>
  <Reserve/>
  <Review/>
  <Footer/>
 </div>
  );
}

export default App;
