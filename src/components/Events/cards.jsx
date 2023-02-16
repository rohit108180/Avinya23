import React from 'react'
import './cards.css'
const Card = (props) => {

  return (
    <>
    <div className='container'>
    <div className='title'>
        <p>EVENTS</p></div>
    <div className='card_row'>
        {props.details.map( (value,index) => (
            <div className='card'>
                <img className='card_img' src={value.img} alt=""></img>
                <div className='card_Rest'>
                <h2 className='card_title'>{value.Name}</h2>
                <p className='card_desc'>{value.Description}</p>
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