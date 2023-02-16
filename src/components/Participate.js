import React from "react";
import Card from "./Card";

// Cards description 

const Cards = [
    {
        key: "1",
        bgcolor: "#300159",
        heading: "Get Inspired",
        content: "Compete with creative project ideas and get inspiration for your next project."
    },
    {
        key: "2",
        bgcolor: "#540246",
        heading: "Meet New Faces",
        content: "Meet innovative new peers, make friends and connections."
    },
    {
        key: "3",
        bgcolor: "#300159",
        heading: "Tech Insights",
        content: "Learn about different tech stacks, see it in action and enhance your skills."
    },
    {
        key: "4",
        bgcolor: "#540246",
        heading: "Price Pool",
        content: "Prize Pool of worth INR 8,00,000."
    },
    {
        key: "5",
        bgcolor: "#300159",
        heading: "Offline Event",
        content: "Get a real world exposure of a Tech Fest."
    },
    {
        key: "6",
        bgcolor: "#540246",
        heading: "Free Swags",
        content: "Get cool goodies and swags to show off to your friends."
    }
]

function createCard(card) {
    return (
        <Card
            key={card.key}
            bgcolor={card.bgcolor}
            heading={card.heading}
            content={card.content}
        />
    )
}

function Participate() {
    return (
        <div className="participate-section">
            <header>WHY TO PARTICIPATE IN TECHX 2023</header>
            <div class="card-wrapper">
                {Cards.map(createCard)}
            </div>
        </div>
    )
}

export default Participate;