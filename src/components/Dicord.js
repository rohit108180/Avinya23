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
          <div target="_blank" style={{margin:"auto"}}>
          <button className="discordButton"><p className='discordButtonText'><a href="https://discord.gg/hhHtDXCBpn" style={{textDecoration:'none', color:'white'}} target="_blank" rel="noreferrer">JOIN</a></p></button>
          </div>
        </div>
      </div>
    );
}

export default Discord
