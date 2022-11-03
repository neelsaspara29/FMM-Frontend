import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Layouts/Footer/Footer";
import Navbar from "./Layouts/Navbar/Navbar";
import Homeroutes from "./Routes/Home/Homeroutes";
import Artistloginroutes from "./Routes/Login/Artist/Artistloginroutes";

function App() {
  useEffect(() => {
    const head = document.querySelector("body");
    const script = document.createElement("script");
    console.log('app')
    script.setAttribute("src", './Assets/js/custom.js');
    head.appendChild(script);

    return () => {
      head.removeChild(script);
    };
  }, []);
  return (
    <>  
      <Navbar />
      <Homeroutes />
      <Artistloginroutes />

      <Footer />
    </>
  );
}

export default App;
