import React, { Component } from "react";
import "./ColorBox.css";

export default class ColorBox extends Component {
  render() {
    const { name, color } = this.props.bg;
    return (
      <div className="color-box" style={{ background: color }}>
        <div className="color-container">
          <div className="box-content">
            <span> {name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <spna className="see-more">More</spna>
      </div>
    );
  }
}
