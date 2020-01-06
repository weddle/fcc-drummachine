import React, { Component } from "react";

import classes from "./DrumPad.module.css";

class DrumPad extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown);
  }

  onKeyDown = (event) => {
    if (this.props.keyCode === event.keyCode) {
      this.playSound();
    }
  };

  clickHandler = (event) => {
    this.playSound();
  };

  playSound = () => {
    // if a setDisplay handler is passed, set the display
    this.props.setDisplay && this.props.setDisplay();
    this.props.mediaRef.current.play();
  };

  render() {
    return (
      <div
        className={"drum-pad " + classes.DrumPad}
        id={this.props.id}
        onClick={this.clickHandler}
      >
        <p>{this.props.letter}</p>
        <audio
          ref={this.props.mediaRef}
          className="clip"
          id={this.props.letter}
        >
          <source src={this.props.audioFile} />
        </audio>
      </div>
    );
  }
}

export default DrumPad;
