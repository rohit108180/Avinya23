import React from 'react'
import MenuWrap from '../menu-wrap/MenuWrap'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <>
    <nav className='nav' id='home'>
        <a className='nav-a' href="/"><div className='nav-item'>HOME</div></a>
        <a className='nav-a' href="/#schedules"><div className='nav-item'>SCHEDULES</div></a>
        <a className='nav-a' href="/#gallery"><div className='nav-item'>GALLERY</div></a>
        <a className='nav-a' href="/#discord"><div className='nav-item'>DISCORD</div></a>
        <a className='nav-a' href="/#sponsors"><div className='nav-item'>SPONSORS</div></a>
        <Link className='nav-a' to="/team" style={{marginLeft: "2rem"}}><div className='nav-item proj-button'>OUR TEAM</div></Link>
        {/* <a className='nav-a' href="/"></a> */}
    </nav>
    <nav className="nav-2">
    <MenuWrap /></nav>
    </>
  )
}

