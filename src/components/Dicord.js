import React from 'react'
import Heading from './Heading/Heading';

const Discord = () => {
   return (
      <div className="discordContainer" id='discord'>
        <div>
            {/* <p className="discordText">JOIN OUR DISCORD SERVER</p>
            <p className="discordText">TO STAY UPDATED</p> */}
            <Heading name="JOIN OUR DISCORD SERVER TO STAY UPDATED"/>
        </div>
        <div>
          <div className="pointer" target="_blank" style={{margin:"auto"}}>
          <a href="https://discord.gg/hhHtDXCBpn" style={{textDecoration:'none', color:'white'}} target="_blank" rel="noreferrer"cl><button className="discordButton"><p className='discordButtonText'>JOIN</p></button></a>
          </div>
        </div>
      </div>
    );
}

export default Discord
