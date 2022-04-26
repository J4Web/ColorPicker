import { bgcolor, palette } from "@mui/system";
import React, { Component } from "react";
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
// import "./Palette.css";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/Palette.js";
class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: "hex",
    };
    this.changeLevel = this.changeLevel.bind(this);
    this.formatChange = this.formatChange.bind(this);
  }
  changeLevel(newlevel) {
    this.setState({ level: newlevel });
  }
  formatChange(val) {
    this.setState({ format: val });
  }
  render() {
    const { level, format } = this.state;
    // const { paletteName, emoji, colors } = palettes.at(
    //   level / 100 || palettes[0]
    // );
    // console.log(paletteName);
    // console.log(this.props);
    // console.warn(this.props.palette);
    // console.warn(this.props.palette.colors);
    // console.table(this.props.palette.colors[500]);
    const palettes = this.props.palette;
    // console.log(palettes);

    const { paletteName, emoji } = palettes;
    // console.warn(colors[0].id);
    // console.log(typeof palettes);
    // console.log(palettes.colors);
    const { classes } = this.props;

    const boxes = palettes?.colors?.[level]?.map((box) => {
      // console.warn(box);
      return (
        <ColorBox
          key={box[format]}
          bg={box}
          format={format}
          currentId={box.id}
          showingFullPalette
        />
      );
    });
    return (
      <div className={classes.palette}>
        <NavBar
          level={level}
          changeLevel={this.changeLevel}
          formatChange={this.formatChange}
          isShowingAllColors={true}
        />
        <div className={classes.paletteColors}>{boxes}</div>
        <footer className={classes.paletteFooter}>
          {paletteName}
          <span className={classes.emoji}>{emoji}</span>
        </footer>
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
