import React, { Component } from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { WithRoutes } from "./WithRoutes";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/ColorBoxStyles.js";

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
      setTimeout(() => this.setState({ copied: false }), 650);
    });
  }
  render() {
    const { name } = this.props.bg;
    const { currentId, showingFullPalette } = this.props;
    const { id } = this.props.params;
    // console.log(this.props.bg);
    //

    let format = this.props.format;
    // console.log(id);
    // console.log(currentId);
    const color = this.props.bg[format];
    // const isDarkColor =
    const { classes } = this.props;
    // console.log(classes.copyText);
    // console.log(isDarkColor);
    const { copied } = this.state;
    return (
      <CopyToClipboard text={color} onCopy={this.handleCopyToClipboard}>
        <div className={classes.colorBox} style={{ background: color }}>
          <div
            style={{ background: color }}
            className={`${classes.boxCopyOverlay} ${
              copied && classes.showOverlay
            }`}
          ></div>
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>copied</h1>
            <p className={`${classes.copyText}`}>{color}</p>
          </div>
          <div className="color-container">
            <div className={classes.boxContent}>
              <span className={`${classes.colorName}`}> {name}</span>
            </div>
            <button className={`${classes.copyButton}`}>Copy</button>
          </div>
          {showingFullPalette && (
            <Link to={`${currentId}`} onClick={(e) => e.stopPropagation()}>
              {" "}
              <span className={`${classes.seeMore}`}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

//Note to you could of already constructed the whole link in palette and then passed down to the
//colorBox comp as a prop //also could of constructed the complete url but u didnt u did to="${currColor}" which is a new thing didn't know about that ?

export default WithRoutes(withStyles(styles)(ColorBox));
