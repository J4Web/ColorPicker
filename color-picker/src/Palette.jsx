import React, { Component } from "react";
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";

import "./Palette.css";
class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex" };
    this.changeLevel = this.changeLevel.bind(this);
    this.formatChange = this.formatChange.bind(this);
  }
  changeLevel(newlevel) {
    this.setState({ level: newlevel });
  }
  formatChange(val) {
    this.setState({ format: val });
  }
  render() {
    const { level, format } = this.state;
    // console.error(level);
    const boxes = this.props.palette.colors[level].map((box) => {
      // console.warn(box);
      return <ColorBox bg={box} format={format} />;
    });
    return (
      <div className="Palette">
        <NavBar
          level={level}
          changeLevel={this.changeLevel}
          formatChange={this.formatChange}
        />
        <div className="Palette-colors">{boxes}</div>
        {/* footer */}
      </div>
    );
  }
}

export default Palette;
