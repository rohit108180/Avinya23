import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './MenuWrap.css'
// import { Link } from "react-router-dom";
// import { useSelector } from 'react-redux'
// import OutsideAlerter from '../Hooks/ClickOutside';



const MenuWrap = () => {
    const [menuState, setMenuState] = useState(false);
    // const darkState = useSelector(state => state.darkmode.value);


    return (
        // <OutsideAlerter callback={() => {setMenuState(prev => 0)}}>

            <div className='menuWrap' onClick={() => {
                setMenuState((menuState) => {
                    return !menuState;
                })
            }}>
                <div className={`menuIcon ${menuState ? "active" : ""}`} >
                    <div className="line"></div>
                    <div className='cross'>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <div className="line"></div>
                </div>
                <div className="listWrap">
                    <ul className="listWrapList">
                        <li className='menuWrapContents'><a href="/">HOME</a></li>
                        <li className='menuWrapContents'><a href="#schedules">SCHEDULES</a></li>
                        <li className='menuWrapContents'><a href="#gallery">GALLERY</a></li>
                        <li className='menuWrapContents'><a href="#discord">DISCORD</a></li>
                        <li className='menuWrapContents'><a href="#sponsors">SPONSORS</a></li>
                        <li className='menuWrapContents'><Link to ="/team">OUR TEAM</Link> </li>
                    </ul>
                </div>
            </div>
        // </OutsideAlerter>
    )
}


export default MenuWrap;