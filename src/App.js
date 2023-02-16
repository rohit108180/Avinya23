import React from "react";
import Banner from "./components/banner/Banner";
import Description from "./components/description/Description";



import Gallery from "./components/Gallery";
import Navbar from "./components/navbar/Navbar";



function App() { 
  return (
    <>
    <Navbar/>
    <Banner/>
    <Description/>
  <Gallery></Gallery>
      
    </>
  );
}

export default App;
