import React from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

function Card(props) {
    return (
        <div className="participate-card" id={props.id} data-aos="fade-right">
            <h2>{props.heading}</h2>
            <p>{props.content}</p>
        </div>
    )
}

export default Card;