import React from "react";
import "./Description.css";

export default function Description() {
    return (
        <div className="description">
            <h1 className="description-heading">DEVCOMM PRESENTS TECHX 2023</h1>
            <div className="container">
                <div className="img">
                <img
                    src="https://images.unsplash.com/photo-1562176564-0280c730d87c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt=""
                />
                </div>
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
            <div className="description-img"></div>
        </div>
    );
}
