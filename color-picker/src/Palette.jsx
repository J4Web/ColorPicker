import { bgcolor, palette } from "@mui/system";
import React, { Component } from "react";
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import "./Palette.css";
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

    const { paletteName, emoji } = palettes;
    // console.warn(colors[0].id);
    console.log(typeof palettes);
    console.log(palettes.colors);

    const boxes = palettes?.colors?.[level]?.map((box) => {
      // console.warn(box);
      return <ColorBox key={box[format]} bg={box} format={format} />;
    });
    return (
      <div className="Palette">
        <NavBar
          level={level}
          changeLevel={this.changeLevel}
          formatChange={this.formatChange}
        />
        <div className="Palette-colors">{boxes}</div>
        <footer className="palette-footer">
          {paletteName}
          <span className="emoji">{emoji}</span>
        </footer>
      </div>
    );
  }
}

export default Palette;
