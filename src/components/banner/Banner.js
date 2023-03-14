import React, { useEffect, useRef, useState } from "react";
import "./Banner.css";
import Typewriter from "typewriter-effect/dist/core";
import logo from "./bgless_white_large.png";
import RegisterBtn from "../register-button/RegisterBtn";
import { VscChromeClose, VscTriangleUp } from "react-icons/vsc";

export default function Banner() {
    const partRef = useRef(null);
    const codeRef = useRef(null);
    const [pop, setPop] = useState("hidden");
    const visi = () => {
        if (pop === "hidden") {
            setPop("visible");
        } else {
            setPop("hidden");
        }
    };
    useEffect(() => {
        var typewriter = new Typewriter(partRef.current, {
            strings: "2000+ ",
            cursor: "",
            autoStart: true,
            loop: true,
            delay: 250,
        });
        typewriter.pauseFor(300).start();
        var typewriter2 = new Typewriter(codeRef.current, {
            strings: "6000+",
            cursor: "",
            autoStart: true,
            loop: true,
            delay: 250,
        });
        typewriter2.pauseFor(300).start();
    }, []);

    return (
        <div className="banner" id="banner">
            <div className="popup" style={{ visibility: pop }}>
                        <VscChromeClose onClick={visi} className="pop-cross"/>
                        <p>
                        Registrations opening soon !!!
                        </p>
                        <p>Join our discord server for constant updates.</p>
                    </div>
            <div className="container1">
                <img className="avinya-logo" src={logo} alt="avinya-logo" />
                <div className="container2">
                    <p className="dates">12th - 16th APRIL</p>
                    <div onClick={visi} className="button">
                        <RegisterBtn />
                    </div>
                </div>
                <div className="typewritercontainer">
                    <p>
                        <span>PARTICIPANTS HOSTED</span>
                        <span id="type-1" ref={partRef}></span>
                    </p>
                    <p>
                        <span>LINES OF CODE</span>
                        <span id="type-2" ref={codeRef}></span>
                    </p>
                </div>
            </div>
            <a className="up-a" href="/#home"><VscTriangleUp className="up-item"/></a>
            
            
        </div>
    );
}
