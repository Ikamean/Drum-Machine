import React, { useState, useEffect } from 'react';
import './App.scss';
import drum from './drum.js';
import Pad from './pad.js';
import piano from './piano.js';

const drummer = drum;
const pianist = piano;

function App() {
  const [display, setDisplay] = useState('');
  const [volume, setVolume] = useState(1);
  const [audio, setAudio] = useState(drummer);

  let count = 0;


  const switchAudio = () =>{
      count % 2 === 0 ? setAudio(pianist) : setAudio(drummer);
      count ++;
  }

  


  const [on, setOn] = useState(true);

  const power = () =>{
    on ? setOn(false) : setOn(true);
  }


  useEffect(()=>{
    document.addEventListener('onClick', mute)

    return () =>{
      document.removeEventListener('onClick',mute);
  } 
  });

  const mute = () =>{
      power();
      on? setVolume(0) : setVolume(1);
  }


  
  
  
  return (
    <>
        <div className="App row">
          <div className="col-12">
            <h2 id="header">Drum Machine</h2>
            </div>
          <div id="drum-machine">


              <div className="pads ">

              {audio.map(sound=><Pad sound={sound}  setDisplay={setDisplay} volume={volume}  />)}

              </div>

              <div className="display row">
                <div className=" changeSound col-12 row">
                    <div className=" switch col-12">
                      <button type="button col-12" className="switcher" onClick={switchAudio}>{audio[0].name}</button>
                    </div>

                    <div className="chord col-12" >
                      <h4 id="display">{display}</h4>
                    </div>
                    <br/>
                </div>
                

                <div id="volume" className="volume col-12">
                      <input 
                      type="range" 
                      step="0.01" 
                      value={volume} 
                      max='1' min='0'
                      onChange={(e)=> setVolume(e.target.value)} />
                      <button type="button" className="mute col-3" onClick={mute}>Mute</button>
                    

                    
                    </div>
                </div>               
            </div>           
          </div>           
    </>
  );
}



export default App;
