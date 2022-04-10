import React, { Component } from "react";
import "./ColorBox.css";
export default class ColorBox extends Component {
  render() {
    return (
      <div
        className="color-box"
        style={{ backgroundColor: this.props.bg.color }}
      >
        {this.props.bg.name}
        <span>More</span>
      </div>
    );
  }
}
