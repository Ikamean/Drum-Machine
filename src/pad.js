import React, { useState, useEffect } from 'react';




function Pad({sound, setDisplay, volume}){

  
    useEffect(()=>{
      document.addEventListener('keydown', handleKeyPress);
      return () =>{
          document.removeEventListener('keydown', handleKeyPress);
      } 
    });
  
    const handleKeyPress = (e) => {
      if(e.keyCode === sound.keyCode){
        playSound();
      }
    }
  
    
  
    const playSound = () =>{
      const audioTag = document.getElementById(sound.keyTrigger);
      audioTag.currentTime = 0;
      audioTag.play();
      setDisplay(sound.id);
      audioTag.volume = volume;
      
    }
    
    return (
      <>  
          <button  
            className="drum-pad" 
            type="button"  id={sound.id} 
            name={sound.keyTrigger} 
            onClick={()=>playSound()}>
            {sound.keyTrigger}
            
            <audio  className="clip" id={sound.keyTrigger} src={sound.url} ></audio>
          </button>
            
          
          
      </>
    );
  }

  export default Pad;