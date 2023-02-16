import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
        <a href="/"><div className='nav-item'>HOME</div></a>
        <a href="/"><div className='nav-item'>EVENTS</div></a>
        <a href="/"><div className='nav-item'>SCHEDULES</div></a>
        <a href="/"><div className='nav-item'>GALLERY</div></a>
        <a href="/"><div className='nav-item'>SPONSORS</div></a>
        <a href="/"><div className='nav-item proj-button'>PROJECTS</div></a>
    </nav>
  )
}
