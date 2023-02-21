import React from 'react'
import Card from './cards'
import eventst from './Eventdata'

const Events = () => {
  return (
    <div id='events'>
        <Card details={eventst}></Card>
    </div>
  )
}

export default Events