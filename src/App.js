import "./App.css";
import bg from "./assets/bg.jpg" 
import Navbar from "./Components/navbar/navbar";
import Hero from "./Components/hero/hero";
import Services from "./Components/services/services";
function App() {
  return (
    <div className="flex flex-col w-[100%] min-h-[100vh]" 
    // style={{backgroundImage:`url(${bg})`,backgroundRepeat:'no-repeat',backgroundPosition:'30%',backgroundSize:'cover',}}
    >
      <img src={bg} className="flex w-[100%] min-h-[140vh]  fixed object-cover -z-50 " />
    <Navbar/>
    <Hero />
    <Services />
    </div>
  );
}

export default App;
