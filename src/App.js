import React, { useEffect, useState } from "react";
import Gallery from "./components/Gallery";
import InitialLoader from "./components/Loader/InitialLoader";
import Participate from "./components/Participate";

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
              <Gallery />
            </>
          )
      }


    </>
  );
}

export default App;
