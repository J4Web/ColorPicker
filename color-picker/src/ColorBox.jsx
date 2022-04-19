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
    const box = this.props.bg;
    const { name } = this.props.bg;
    console.log(this.props.bg);

    let format = this.props.format;
    console.warn(format);
    const { hex } = this.props.bg;
    console.log("you chose", hex);
    const { copied } = this.state;
    return (
      <CopyToClipboard text={box.format} onCopy={this.handleCopyToClipboard}>
        <div className="color-box" style={{ background: box.format }}>
          <div
            style={{ background: box.format }}
            className={`color-box-overlay ${copied && "show"}`}
          ></div>
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>copied</h1>
            <p>{box.format}</p>
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
