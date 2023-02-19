import React,{useEffect}from 'react'
import Heading from '../Heading/Heading'
import './cards.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Card = (props) => {
  useEffect(()=>{
    AOS.init({duration:1000});
},[]);
  return (
    <>
    <div className='container'>
    <div className='title'>
        {/* <p>EVENTS</p> */}
        <Heading name = "EVENTS"/>
        </div>
    <div className='card_row'>
        {props.details.map( (value,index) => (
            <div className='card' data-aos="fade-up">
                <img className='card_img' src={value.img} alt=""></img>
                <div className='card_Rest'>
                  <h2 className='card_title'>{value.Name}</h2>
                  <div className='card_desc_container'>
                  <p className='card_desc'>{value.Description}</p>
                  </div>
                <a href={value.Register} className='card_btn'>Register Now</a>
                </div>
            </div>
        ))}
    </div>
    </div>
    </>
  )
}

export default Card