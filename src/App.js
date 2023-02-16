import React, { useEffect, useState } from "react";
import Gallery from "./components/Gallery";
import Events from "./components/Events/Events"
import InitialLoader from "./components/Loader/InitialLoader";
import Participate from "./components/Participate";
import Footer from "./components/Footer"
import Discord from "./components/Dicord"

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 3500)
  }, [])

  return (
    <>
      {
        loading ? (<InitialLoader />) :
          (
            <>
              <Participate />
              <Events/>
              <Gallery />
              <Discord/>
              <Footer/>
            </>
          )
      }


    </>
  );
}

export default App;
