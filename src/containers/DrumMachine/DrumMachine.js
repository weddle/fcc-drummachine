import React, { Component } from "react";

import DrumPad from "../../components/DrumPad/DrumPad";
import Display from "../../components/Display/Display";

import classes from "./DrumMachine.module.css";

import drumConfig from "./DrumConfig";

class DrumMachine extends Component {
  render() {
    let renderedKeys = drumConfig.map((k) => (
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
