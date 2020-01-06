import React, { Component } from "react";
import { connect } from "react-redux";

import DrumPad from "../../components/DrumPad/DrumPad";
import Display from "../../components/Display/Display";

import classes from "./DrumMachine.module.css";
import * as actionTypes from "../../store/actionTypes";

class DrumMachine extends Component {
  render() {
    let referencedKeys = this.props.config.map((k) => {
      return {
        ...k,
        mediaRef: React.createRef()
      };
    });

    let renderedKeys = referencedKeys.map((k) => (
      <DrumPad
        key={k.id}
        id={k.id}
        letter={k.letter}
        audioFile={k.audioFile}
        keyCode={k.keyCode}
        setDisplay={() => this.props.updateDisplay(k.description)}
        mediaRef={k.mediaRef}
      />
    ));
    return (
      <div id="drum-machine">
        <div className={classes.GridContainer}>{renderedKeys}</div>
        <br />
        <Display display={this.props.display} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    display: state.display
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateDisplay: (newDisplay) =>
      dispatch({ type: actionTypes.DISPLAY_SET, setDisplay: newDisplay })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrumMachine);
