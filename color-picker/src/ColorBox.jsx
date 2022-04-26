import React, { Component } from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { WithRoutes } from "./WithRoutes";
import chroma from "chroma-js";
import { withStyles } from "@material-ui/core/styles";
const styles = {
  colorBox: {
    width: "20%",
    height: (props) => (props.showingFullPalette ? "25%" : "50%"),
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    "&:hover button": {
      opacity: 1,
    },
  },
  copyText: {
    color: (props) =>
      chroma(props.bg.hex).luminance() >= 0.7 ? "#000" : "#fff",
  },
  colorName: {
    color: (props) =>
      chroma(props.bg.hex).luminance() <= 0.08 ? "#fff" : "#000",
  },
  seeMore: {
    position: "absolute",
    right: "0",
    border: "none",
    bottom: "0",
    background: "rgba(255 255, 255, 0.3)",
    textAlign: "center",
    textTransform: "uppecase",
    lineHeight: "30px",
    width: "60px",
    color: (props) =>
      chroma(props.bg.hex).luminance() >= 0.7 ? "#000" : "#fff",
  },
  copyButton: {
    color: (props) =>
      chroma(props.bg.hex).luminance() <= 0.08 ? "#fff" : "#000",
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    background: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    textTransform: "uppercase",
    border: "none",
    textDecoration: "none",
    opacity: 0,
  },
};
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
    console.log(classes.copyText);
    // console.log(isDarkColor);
    const { copied } = this.state;
    return (
      <CopyToClipboard text={color} onCopy={this.handleCopyToClipboard}>
        <div className={classes.colorBox} style={{ background: color }}>
          <div
            style={{ background: color }}
            className={`color-box-overlay ${copied && "show"}`}
          ></div>
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>copied</h1>
            <p className={`${classes.copyText}`}>{color}</p>
          </div>
          <div className="color-container">
            <div className="box-content">
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
