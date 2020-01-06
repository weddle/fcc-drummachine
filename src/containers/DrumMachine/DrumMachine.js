import React, { Component } from "react";

import DrumPad from "../../components/DrumPad/DrumPad";
import Display from "../../components/Display/Display";

import classes from "./DrumMachine.module.css";

const keyConfig = [
  {
    id: "qsound",
    letter: "Q",
    audioFile: "/assets/sounds/Bass-Drum-1.wav",
    description: "Bass Drum 1"
  },
  {
    id: "wsound",
    letter: "W",
    audioFile: "/assets/sounds/Bass-Drum-2.wav",
    description: "Bass Drum 2"
  },
  {
    id: "esound",
    letter: "E",
    audioFile: "/assets/sounds/Bass-Drum-3.wav",
    description: "Bass Drum 3"
  },
  {
    id: "asound",
    letter: "A",
    audioFile: "/assets/sounds/E-Mu-Proteus-FX-909-Kick.wav",
    description: "E-Mu-Proteus-FX 909 Kick"
  },
  {
    id: "ssound",
    letter: "S",
    audioFile: "/assets/sounds/E-Mu-Proteus-FX-Wacky-Kick.wav",
    description: "E-Mu-Proteus-FX Wacky Kick"
  },
  {
    id: "dsound",
    letter: "D",
    audioFile: "/assets/sounds/E-Mu-Proteus-FX-Wacky-Snare.wav",
    description: "E-Mu-Proteus-FX Wacky Snare"
  },
  {
    id: "zsound",
    letter: "Z",
    audioFile: "/assets/sounds/Ensoniq-SQ-1-Closed-Hi-Hat.wav",
    description: "Ensoniq SQ-1 Closed Hi-Hat"
  },
  {
    id: "xsound",
    letter: "X",
    audioFile: "/assets/sounds/Ensoniq-SQ-1-Open-Hi-Hat.wav",
    description: "Ensoniq SQ-1 Open Hi-Hat"
  },
  {
    id: "csound",
    letter: "C",
    audioFile: "/assets/sounds/Ensoniq-SQ-1-Side-Stick.wav",
    description: "Ensoniq SQ-1 Side Stick"
  }
];
class DrumMachine extends Component {
  render() {
    let renderedKeys = keyConfig.map((k) => (
      <DrumPad id={k.id} letter={k.letter} audioFile={k.audioFile} />
    ));
    return (
      <div id="drum-machine">
        <div className={classes.GridContainer}>{renderedKeys}</div>
        <br />
        <Display display="DISPLAY" />
      </div>
    );
  }
}

export default DrumMachine;
