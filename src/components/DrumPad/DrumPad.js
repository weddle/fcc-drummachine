import React, { Component } from "react";

import "./DrumPad.css";

class DrumPad extends Component {
  clickHandler = (event) => {
    console.log(event);

    // if a setDisplay handler is passed, set the display
    this.props.setDisplay && this.props.setDisplay();
    this.props.mediaRef.current.play();
  };
  render() {
    console.log(this.props);
    return (
      <div className="drum-pad" id={this.props.id} onClick={this.clickHandler}>
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
