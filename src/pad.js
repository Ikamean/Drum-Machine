import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';



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
          <Button  
            className="drum-pad btn btn-danger btn-outline-dark btn-lg" 
            type="button"  id={sound.id} 
            name={sound.keyTrigger} 
            onClick={()=>playSound()}>
            {sound.keyTrigger}
            
            <audio  className="clip" id={sound.keyTrigger} src={sound.url} ></audio>
          </Button>
            
          
          
      </>
    );
  }

  export default Pad;