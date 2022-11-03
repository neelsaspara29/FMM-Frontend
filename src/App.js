import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Layouts/Footer/Footer";
import Navbar from "./Layouts/Navbar/Navbar";
import Faqroutes from "./Routes/Faq/Faqroutes";
import Homeroutes from "./Routes/Home/Homeroutes";
import Artistloginroutes from "./Routes/Login/Artist/Artistloginroutes";
import PrivacyPolicyroutes from "./Routes/PrivacyPolicyroutes/PrivacyPolicyroutes";

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
      <Faqroutes />
      <PrivacyPolicyroutes />

      <Footer />
    </>
  );
}

export default App;
