import React, { Component } from "react";
import Slider, { Range } from "rc-slider";

import "rc-slider/assets/index.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "./Navbar.css";
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ format: e.target.value });
    this.props.formatChange(e.target.value);
  }
  render() {
    const { level, changeLevel } = this.props;
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
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        <div className="select-container">
          <Select value={this.state.format} onChange={this.handleChange}>
            <MenuItem value="hex">#ffffff</MenuItem>
            <MenuItem value="rgb">rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">rgba(255,255,255,1.0)</MenuItem>
          </Select>
        </div>
      </header>
    );
  }
}

export default NavBar;
