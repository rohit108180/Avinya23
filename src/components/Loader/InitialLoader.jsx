import React from 'react'
import './InitialLoader.css'
import img from "../assets/bgless_white_large.png"
import vid from "../assets/videos/Hello (1).mov"

function InitialLoader() {
  return (
    <div className="rings">
      <video  width="100%" height="100%" autoPlay muted>
      <source src={vid} type="video/mp4" style={{width:"1500px"}}/>
     </video>
        {/* <div class="ring">
          <img src={vid} alt="" style={{width:"100%", marginTop : "16%"}}/>
        <span></span>
        </div> */}
    </div>
  )
}

export default InitialLoader

