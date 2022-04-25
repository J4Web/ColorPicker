import React, { Component } from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { WithRoutes } from "./WithRoutes";
import chroma from "chroma-js";
class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
    this.handleCopyToClipboard = this.handleCopyToClipboard.bind(this);
  }
  handleCopyToClipboard() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }
  render() {
    const { name } = this.props.bg;
    const { currentId, showLink } = this.props;
    const { id } = this.props.params;
    // console.log(this.props.bg);
    //

    let format = this.props.format;
    // console.log(id);
    // console.log(currentId);
    const color = this.props.bg[format];
    const isDarkColor = chroma(color).luminance() <= 0.08;
    const isLightColor = chroma(color).luminance() >= 0.7;
    // console.log(isDarkColor);
    const { copied } = this.state;
    return (
      <CopyToClipboard text={color} onCopy={this.handleCopyToClipboard}>
        <div className="color-box" style={{ background: color }}>
          <div
            style={{ background: color }}
            className={`color-box-overlay ${copied && "show"}`}
          ></div>
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>copied</h1>
            <p>{color}</p>
          </div>
          <div className="color-container">
            <div className="box-content">
              <span className={isDarkColor && "light-text"}> {name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
          {showLink && (
            <Link to={`${currentId}`} onClick={(e) => e.stopPropagation()}>
              {" "}
              <span className={`see-more ${isLightColor && "dark-text"}`}>
                More
              </span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

//Note to you could of already constructed the whole link in palette and then passed down to the
//colorBox comp as a prop //also could of constructed the complete url but u didnt u did to="${currColor}" which is a new thing didn't know about that ?

export default WithRoutes(ColorBox);
