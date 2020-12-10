import React, { useState, useEffect } from 'react';
import './App.scss';
import drum from './drum.js';
import Pad from './pad.js';
import piano from './piano.js';
import Button from 'react-bootstrap/Button';

const drummer = drum;
const pianist = piano;

function App() {
  const [display, setDisplay] = useState('#');
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

  const [maxMin, setMax] = useState("Mute");

  const mute = () =>{
      power();
      if(on){
        setVolume(0);
        setMax("Max");
      }else{
        setVolume(1);
        setMax("Mute");
      }
  }
  return (
    <>
      <div className="container-fluid">
        <div className="App row">
         <div className="col-12 header">
            <h2 id="header">Drum Machine</h2>
          </div> 
          <div className=" changeSound col-12 row">
                    <div className=" switch col-5 ">
                      <Button type="button" className="switcher btn btn-dark  btn-lg btn-block" onClick={switchAudio}>{audio[0].name}</Button>
                    </div>

                    <div className="chord col-7" >
                      <Button type="button" id="display" className="btn btn-secondary btn-lg btn-block displayChord" disabled>{display}</Button>
                    </div>
                    <br/>
                </div>
          <div id="drum-machine" className="col-12 row">
              <div className="pads col-12">

              {audio.map(sound=><Pad sound={sound}  setDisplay={setDisplay} volume={volume}  />)}

              </div>

              <div className="display col-12 row">

                <div id="volume" className="volume col-12 ">
                      <input 
                      type="range" 
                      step="0.01" 
                      value={volume} 
                      max='1' min='0'
                      onChange={(e)=> setVolume(e.target.value)} />
                </div>

                <div className="col-12">
                        <Button type="button" className="mute btn btn-dark btn-lg" onClick={mute} >{maxMin}</Button>
                </div>
                    
                </div>               
            </div>           
          </div>  
      </div>         
    </>
  );
}



export default App;
