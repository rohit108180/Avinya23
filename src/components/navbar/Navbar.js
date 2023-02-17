import React from 'react'
import MenuWrap from '../menu-wrap/MenuWrap'
import './Navbar.css'

export default function Navbar() {
  return (
    <>
    <nav className='nav'>
        <a href="/"><div className='nav-item'>HOME</div></a>
        <a href="/"><div className='nav-item'>EVENTS</div></a>
        <a href="/"><div className='nav-item'>SCHEDULES</div></a>
        <a href="/"><div className='nav-item'>GALLERY</div></a>
        <a href="/"><div className='nav-item'>SPONSORS</div></a>
        <a href="/"><div className='nav-item proj-button'>PROJECTS</div></a>
    </nav>
    <nav className="nav-2">
    <MenuWrap /></nav>
    </>
  )
}
