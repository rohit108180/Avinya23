import React from "react";
import "./Description.css";
import devcomm from './1676534542112.jpg'

export default function Description() {
    return (
        <div className="description">
            <h1 className="description-heading">DEVCOMM PRESENTS AVINYA'23</h1>
            <div className="desc-container">
                <img className="img"
                    src={devcomm}
                    alt="oooolalala"
                />
                <div className="description-text">
                    <p className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat illo quia laudantium consequuntur inventore ex
                        sint reiciendis quisquam, vel perspiciatis. Adipisci,
                        ratione, iste nihil nobis ut consequatur, architecto
                        veritatis corporis laborum necessitatibus quas omnis
                        esse aut. Autem cum nostrum corrupti ab asperiores modi,
                        sapiente pariatur voluptates sed. Quibusdam, nobis.
                        Distinctio eveniet dignissimos reiciendis mollitia
                        blanditiis eius.
                    </p>
                    <p className="events">TechX'23 comprises of n events:</p>
                    <div className="event-names">
                        <span>Innovate NSUT</span>
                        <span>CodeWars</span>
                        <span>PsychoTech</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
