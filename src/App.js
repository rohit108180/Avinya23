import React, { useEffect, useState } from "react";
import Banner from "./components/banner/Banner";
import Description from "./components/description/Description";
import Gallery from "./components/Gallery";
import Events from "./components/Events/Events";
import InitialLoader from "./components/Loader/InitialLoader";
import Participate from "./components/Participate";
import Footer from "./components/Footer"
import Discord from "./components/Dicord"
import Sponsors from "./components/timelineSponsors/sponsors/sponsors"
import Timeline from "./components/timelineSponsors/timeline/timelinediv"
import Footer from "./components/Footer";
import Discord from "./components/Dicord";
import Navbar from "./components/navbar/Navbar"

function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3500);
    }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 3500)
  }, [])

  return (

        <>
            {loading ? (
                <InitialLoader />
            ) : (
                <>
                    <Navbar />
                    <Banner />
                    <Description />
                    <Participate />
                    <Gallery/>
                    <Timeline/>
                    <Events />
                    <Discord />
                    <Sponsors/>
                    <Footer />
                </>
            )}
        </>
    );
}

export default App;
