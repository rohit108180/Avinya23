import React, { useEffect, useState } from "react";
import InitialLoader from "./Loader/InitialLoader";
import Navbar from "./navbar/Navbar"
import Banner from "./banner/Banner";
import Description from "./description/Description";
import Gallery from "./Gallery";
import Participate from "./Participate";
import Timeline from "./timelineSponsors/timeline/timelinediv"
import Discord from "./Dicord"
import Sponsors from "./timelineSponsors/sponsors/sponsors"
import Footer from "./Footer";
import AOS from 'aos'
import 'aos/dist/aos.css'

function Home() {

    useEffect(()=>{
        AOS.init({duration:1500});
    },[]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 5000);
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
                    <Discord />
                    <Sponsors/>
                    <Footer />
                </>
            )}
        </>
    );
}

export default Home;