import React from 'react'
import Newnav from "./components/Newnav";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Newcon from "./components/Newcon";
import Footer from "./components/Footer";
import Heronew from "./components/Heronew";


const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialised selection:bg-cyan-200 selection:text-cyan-700">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="mx-auto px-8 w-full">
        <Newnav />
        <Heronew/>
        <About />
        <Technologies/>
        <Projects/>
        <Newcon/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
