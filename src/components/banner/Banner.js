import React, { useEffect, useRef } from "react";
import "./Banner.css";
import Typewriter from "typewriter-effect/dist/core";
import logo from "./TECHx_logo_white.png";

export default function Banner() {
    const partRef = useRef(null);
    const codeRef= useRef(null);
    useEffect(()=>{
        var typewriter = new Typewriter(partRef.current, {
            strings: "200+ ",
            cursor:'',
            autoStart: true,
            loop: true,
            delay: 250,
        });
        typewriter.pauseFor(300).start();
        var typewriter2 = new Typewriter(codeRef.current, {
            strings: "6000+",
            cursor:'',
            autoStart: true,
            loop: true,
            delay: 250,
        });
        typewriter2.pauseFor(300).start();
    },[])


    return (
        <div className="banner">
            <div className="container1">
                <img src={logo} alt="techx-logo" />
                <p className="dates">8th - 10th APRIL</p>
                <button>REGISTER</button>
            </div>
            <div className="container2">
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
        </div>
    );
}
