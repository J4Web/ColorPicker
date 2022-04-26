import React, { Component } from "react";
import Slider, { Range } from "rc-slider";

import "rc-slider/assets/index.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// import "./Navbar.css";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavBarStyles.js";
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex",
      open: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e) {
    this.setState({ format: e.target.value });
    this.setState((curState) => ({
      open: true,
    }));
    setTimeout(() => this.setState({ open: false }), 2200);

    this.props.formatChange(e.target.value);
  }
  handleClick() {
    this.setState({ open: false });
  }
  render() {
    const { level, changeLevel, isShowingAllColors, classes } = this.props;
    return (
      <header className={classes.navbar}>
        <div className={classes.logo}>
          <Link to="/">reactcolorPicker</Link>
        </div>
        {isShowingAllColors && (
          <div>
            <span> Level: {level}</span>
            <div className={classes.slider}>
              <Slider
                className="slider"
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onAfterChange={changeLevel}
              />
            </div>
          </div>
        )}
        <div className={classes.selectContainer}>
          <Select value={this.state.format} onChange={this.handleChange}>
            <MenuItem value="hex">#ffffff</MenuItem>
            <MenuItem value="rgb">rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">rgba(255,255,255,1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          autoHideDuration={1000}
          open={this.state.open}
          message={
            <p id="message-id">
              Format Changed to {this.state.format.toUpperCase()}
            </p>
          }
          //   onClose={() => this.setState({ open: true })}
          ContentProps={{
            "aria-describedby": "message-id",
          }}
          action={[
            <IconButton onClick={this.handleClick} color="inherit" key="Close">
              <CloseIcon />
            </IconButton>,
          ]}
        ></Snackbar>
      </header>
    );
  }
}
export default withStyles(styles)(NavBar);
