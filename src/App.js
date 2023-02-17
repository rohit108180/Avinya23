import React, { useEffect, useState } from "react";
import InitialLoader from "./components/Loader/InitialLoader";
import Navbar from "./components/navbar/Navbar"
import Banner from "./components/banner/Banner";
import Description from "./components/description/Description";
import Gallery from "./components/Gallery";
import Participate from "./components/Participate";
import Events from "./components/Events/Events";
import Timeline from "./components/timelineSponsors/timeline/timelinediv"
import Discord from "./components/Dicord"
import Sponsors from "./components/timelineSponsors/sponsors/sponsors"
import Footer from "./components/Footer";
import Heading from "./components/Heading/Heading";


function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3500);
    }, []);


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
