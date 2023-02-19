import React from 'react'
import img1 from "./imagessposi/img1.png"
import img2 from "./imagessposi/img2.png"
import img3 from "./imagessposi/img3.png"
import img4 from "./imagessposi/img4.png"
import img5 from "./imagessposi/img5.png"
import img6 from "./imagessposi/img6.png"
import img7 from "./imagessposi/img7.png"
import SponsorsCard from './sponsorsCard'
import "../stylels.css"
import Heading from '../../Heading/Heading'

function sponsors() {
  const sponsor = {
    platinum: [
      img1,
      img2
    ], gold: [
      img6,
      img7,
      img3
    ], education: [
      img3,
      img4,
      img5
    ], others: [
      img1,
      img2,
      img3,
      img7
    ]
  }
  return (
  <>
  <div className="sponsors-contain">
    <div class="sponsors-container">
      <Heading name = "EVENT PARTNERS"/>
      <h2 class="sponsors-type">PLATINUM PARTNERS</h2>
      <div className="sponsor-container-div">
        {sponsor.platinum.map((detail, index) => <SponsorsCard key={index} sponsors={detail} />)}
      </div>
      <h2 class="sponsors-type">GOLD PARTNERS</h2>
      <div className="sponsor-container-div">
        {sponsor.gold.map((detail, index) => <SponsorsCard key={index} sponsors={detail} />)}
      </div>
      <h2 class="sponsors-type">EDUCATION PARTNERS</h2>
      <div className="sponsor-container-div">
        {sponsor.education.map((detail, index) => <SponsorsCard key={index} sponsors={detail} />)}
      </div>
      <h2 class="sponsors-type">OTHER SPONSORS</h2>
      <div className="sponsor-container-div">
        {sponsor.others.map((detail, index) => <SponsorsCard key={index} sponsors={detail} />)}
      </div>
      <h2 class="sponsors-type">OUT PAST SPONSORS</h2>

      <div className="slider-div">
      <div class="slider">
        <div class="slide-track">
          <div class="slide">
            <img class="sponsors-slider-img" src={img1} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img2} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img3} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img4} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img5} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img6} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img7} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img1} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img2} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img3} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img4} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img5} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img6} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img7} alt="" />
          </div>
        </div>
      </div>

      <div class="slider">
        <div class="slide-track2">
          <div class="slide">
            <img class="sponsors-slider-img" src={img1} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img2} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img3} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img4} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img5} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img6} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img7} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img1} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img2} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img3} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img4} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img5} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img6} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img7} alt="" />
          </div>
        </div>
      </div>
    </div>
    
    </div>
    </div>
    </>
  )
}

export default sponsors