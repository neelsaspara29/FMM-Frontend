import { useEffect } from "react";
import Navbar from "./Layouts/Navbar/Navbar";
import Homeroutes from "./Routes/Home/Homeroutes";

function App() {
  useEffect(() => {
    const head = document.querySelector("body");
    const script = document.createElement("script");
    console.log('app')
    script.setAttribute("src", './Assets/js/test.js');
    head.appendChild(script);

    return () => {
      head.removeChild(script);
    };
  }, []);
  return (
    <>  
      <Navbar />
      <Homeroutes />
    </>
  );
}

export default App;
