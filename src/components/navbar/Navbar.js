import React from 'react'
import MenuWrap from '../menu-wrap/MenuWrap'
import TeamMembers from '../TeamMembers.js'
import './Navbar.css'

export default function Navbar() {
  return (
    <>
    <nav className='nav'>
        <a className='nav-a' href="/"><div className='nav-item'>HOME</div></a>
        <a className='nav-a' href="#events"><div className='nav-item'>EVENTS</div></a>
        <a className='nav-a' href="#schedules"><div className='nav-item'>SCHEDULES</div></a>
        <a className='nav-a' href="#gallery"><div className='nav-item'>GALLERY</div></a>
        <a className='nav-a' href="#sponsors"><div className='nav-item'>SPONSORS</div></a>
        <a className='nav-a' href="#team"><TeamMembers/>TEAM</a>
        <a className='nav-a' href="/"><div className='nav-item proj-button'>PROJECTS</div></a>
    </nav>
    <nav className="nav-2">
    <MenuWrap /></nav>
    </>
  )
}
