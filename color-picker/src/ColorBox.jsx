import React, { Component } from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
export default class ColorBox extends Component {
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
    const { name, hex } = this.props.bg;
    console.log(this.props.bg);
    const { copied } = this.state;
    return (
      <CopyToClipboard text={hex} onCopy={this.handleCopyToClipboard}>
        <div className="color-box" style={{ background: hex }}>
          <div
            style={{ background: hex }}
            className={`color-box-overlay ${copied && "show"}`}
          ></div>
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>copied</h1>
            <p>{hex}</p>
          </div>
          <div className="color-container">
            <div className="box-content">
              <span> {name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
          <spna className="see-more">More</spna>
        </div>
      </CopyToClipboard>
    );
  }
}
