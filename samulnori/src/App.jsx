import { useState, useEffect } from 'react'
import janggu from './assets/janggu.png'
import buk from './assets/buk.png'
import jing from './assets/jing.png'
import kkweng from './assets/kkweng.png'

import './App.css'

function App() {
  const [activeInstrument, setActiveInstrument] = useState(null);
  const instrumentNames = {
    janggu: "장구",
    buk: "북",
    jing: "징",
    kkweng: "꽹과리"
  };

  const instrumentDirections = {
    janggu: (
      <div className="keyboard_instructions">
        <div>
          <kbd>d</kbd > 
          or 
          <kbd>f</kbd>: gung
        </div>
        <div>
          <kbd>j</kbd>:
          ki
        </div>
        <div>
          <kbd>k</kbd>:
          ta
        </div>
        <div>
          <kbd>u</kbd>:
          tak
        </div>
      </div>
    ),
    buk: (
      <div className="keyboard_instructions">
        <div>
          <kbd>f</kbd > 
          or 
          <kbd>j</kbd>: loud
        </div>
        <div>
        <kbd>t</kbd > 
          or 
          <kbd>u</kbd>: tak
        </div>
      </div>
    ),
    jing:(
      <div className="keyboard_instructions">
        <div>
          <kbd>j</kbd > 
          jing 
        </div>  
      </div>
    ),
    kkweng: (
      <div className="keyboard_instructions">
        <div>
          <kbd>j</kbd> 
          geng
        </div>  
      </div>
    ),
  }

  const sounds = {
  janggu: {
    gung:new Audio("/sounds/TempJangguGung.m4a"),
    ki: new Audio("/sounds/TempJangguKi.m4a"),
    ta: new Audio("/sounds/TempJangguTa.m4a"),
    tak: new Audio("/sounds/TempJangguTak.m4a"),
  },
  buk: {
    loud: new Audio("/sounds/TempBuk.m4a"),
    tak: new Audio("/sounds/TempBukTak.m4a"),
    //add a soft (v and n?)
  },
  jing: {
    jinggg: new Audio("/sounds/TempJing.m4a"),
  },
  kkweng: {
    geng: new Audio("/sounds/TempKkweng.m4a"),
  }
};

  useEffect( () => {
    const handleKeyDown = (event) => {

      if (activeInstrument === null) return;

      switch (activeInstrument) {
        case "janggu":

          if (event.key === 'j') {
            console.log("played ki")
            sounds.janggu.ki.currentTime = 0; // rewind so it can play repeatedly
            sounds.janggu.ki.play();
          } else if (event.key === 'k') {
            console.log("played ta")
            sounds.janggu.ta.currentTime = 0; // rewind so it can play repeatedly
            sounds.janggu.ta.play();
          } else if ( event.key === "d" || event.key === "f") {
            console.log("played gung")
            sounds.janggu.gung.currentTime = 0; // rewind so it can play repeatedly
            sounds.janggu.gung.play();
          } else if (event.key === "u") {
            console.log("played tak")
            sounds.janggu.tak.currentTime = 0; // rewind so it can play repeatedly
            sounds.janggu.tak.play();
          }
          break;

        case "buk":
          if (event.key === "f" || event.key === "j") {
            console.log("played loud");
            sounds.buk.loud.currentTime = 0;
            sounds.buk.loud.play()
          } else if (event.key === "r" || event.key === "u") {
            console.log("played tak")
            sounds.buk.tak.currentTime = 0;
            sounds.buk.tak.play()
          }
          break;

        case "jing":
          if (event.key === "j") {
            console.log("played jing");
            sounds.jing.jinggg.currentTime = 0;
            sounds.jing.jinggg.play()
          } 
          break;

        case "kkweng":
          if (event.key === "j") {
            console.log("played geng");
            sounds.kkweng.geng.currentTime = 0;
            sounds.kkweng.geng.play()
          } 
          break;

        default: 
          break;
      };

    }
  
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeInstrument])

  
  return (
    <>
      <div className='title_box'>
        <div className='title'>
          {activeInstrument? instrumentNames[activeInstrument] : "Samulnori Simulator"}
        </div>
        <div>
          {activeInstrument? instrumentDirections[activeInstrument] : <div className='directions'>Select an instrument</div>}
        </div>
      </div>
      <div className='instrument_group'>
        <img src={jing} className='instruments' onClick={()=>{setActiveInstrument("jing")}}/>
        <img src={kkweng} className='instruments' onClick={()=>{setActiveInstrument("kkweng")}}/>
        <img src={janggu} className='instruments' onClick={()=>{setActiveInstrument("janggu")}}/>
        <img src={buk} className='instruments' onClick={()=>{setActiveInstrument("buk")}}/>
      </div>
            {/* {activeInstrument && <div className="active">Active: {activeInstrument}</div>} */}

    </>
  )
}

export default App
