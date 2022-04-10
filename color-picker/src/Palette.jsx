import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
class Palette extends Component {
  render() {
    const boxes = this.props.colors.map((box) => {
      return <ColorBox bg={box} />;
    });
    return (
      <div className="Palette">
        {/* navbar */}
        <div className="Palette-colors">{boxes}</div>
        {/* footer */}
      </div>
    );
  }
}

export default Palette;
