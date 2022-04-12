import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import "./Palette.css";
class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
    this.changeLevel = this.changeLevel.bind(this);
  }
  changeLevel(newlevel) {
    this.setState({ level: newlevel });
  }
  render() {
    const { level } = this.state;
    // console.error(level);
    const boxes = this.props.palette.colors[level].map((box) => {
      // console.warn(box);
      return <ColorBox bg={box} />;
    });
    return (
      <div className="Palette">
        <div>
          <Slider
            className="slider"
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={this.changeLevel}
          />
        </div>

        {/* navbar */}
        <div className="Palette-colors">{boxes}</div>
        {/* footer */}
      </div>
    );
  }
}

export default Palette;
