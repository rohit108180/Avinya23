import React from "react";
import Heading from "../Heading/Heading";
import "./Description.css";
import devcomm from "./IMG_5041.jpg";

export default function Description() {
    return (
        <div className="description" id= "description">
            {/* <h1 className="description-heading">DEVCOMM PRESENTS AVINYA'23</h1> */}
            <Heading name = "DEVCOMM PRESENTS AVINYA'23"/>
            <div className="desc-container">
                <img className="img" src={devcomm} alt="oooolalala" />
                <div className="description-text">
                    <p className="text">
                        The time has come; DevComm NSUT is here with the most
                        awaited event, Avinya, with an expected participation of
                        more than 10,000 people across 5 days on campus.
                        Showcasing how tech is transforming business and
                        society, Avinya drives thought-provoking conversations
                        around diversity and transformation, providing a
                        platform for the tech environment to come together to
                        drive change. The event will be an opportunity for
                        students to learn, compete and gain exposure, with a
                        tinge of enjoyment. Avinya would also be hosting
                        cultural events for students to enjoy and deepen their
                        bonds. Hosting 10+ events across 5 days.
                    </p>
                  
                </div>
            </div>
        </div>
    );
}
