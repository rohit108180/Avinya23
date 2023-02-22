import React from 'react'
import './InitialLoader.css'
import img from "../assets/bgless_white_large.png"

function InitialLoader() {
  return (
    <div className='ring-container'>
        <div class="ring">
          <img src={img} alt="" style={{width:"100%", marginTop : "16%"}}/>
        <span></span>
        </div>
    </div>
  )
}

export default InitialLoader