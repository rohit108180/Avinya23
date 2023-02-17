import React from 'react'
import Heading from './Heading/Heading';

const Discord = () => {
   return (
      <div className="discordContainer">
        <div>
            {/* <p className="discordText">JOIN OUR DISCORD SERVER</p>
            <p className="discordText">TO STAY UPDATED</p> */}
            <Heading name="JOIN OUR DISCORD SERVER TO STAY UPDATED"/>
        </div>
        <div>
          <a href="#" target="_blank">
            <button className="discordButton"><p className='discordButtonText'>JOIN</p></button>
          </a>
        </div>
      </div>
    );
}

export default Discord
