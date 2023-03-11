import React from 'react'
import './Heading.css'

function Heading(props) {
  return (
    <>
    <h1 className='heading'> {props.name}</h1>
    </>
  )
}

export default Heading