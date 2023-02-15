import React, { useState } from "react";

function Card(props) {
    const [bgcolor, changeColor] = useState(props.bgcolor);
    const [hcolor, changehColor] = useState("#FBFBFB");
    const [pcolor, changepColor] = useState("#FBFBFB");

    /* changing background and font colors on mouse over */
    function change1() {
        changeColor("#FBFBFB");
        changehColor(props.bgcolor);
        changepColor("#000000");
    }

    /* changing background and font colors on mouse out */
    function change2() {
        changeColor(props.bgcolor);
        changehColor("#FBFBFB");
        changepColor("#FBFBFB");
    }

    return (
        <div className="participate-card" style={{ backgroundColor: bgcolor }} onMouseOver={change1} onMouseOut={change2}>
            <h2 style={{ color: hcolor }} onMouseOver={change1} onMouseOut={change2}>{props.heading}</h2>
            <p style={{ color: pcolor }} onMouseOver={change1} onMouseOut={change2}>{props.content}</p>
        </div>
    )
}

export default Card;