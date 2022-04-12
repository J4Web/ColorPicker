import React, { Component } from "react";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";
class NavBar extends Component {
  render() {
    const { level } = this.props;
    return (
      <header className="Navbar ">
        <div className="logo">
          <a href="#">reactcolorPicker</a>
        </div>
        <div className="slider-container">
          <span> Level: {level}</span>
          <div className="slider">
            <Slider
              className="slider"
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={this.props.changeLevel}
            />
          </div>
        </div>
      </header>
    );
  }
}

export default NavBar;
