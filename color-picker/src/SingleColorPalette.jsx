import React, { Component } from "react";
import { WithRoutes } from "./WithRoutes";
import SeedColors from "./SeedColors";
import { getPalette } from "./ColorHelpers";
import ColorBox from "./ColorBox";
// import "./Palette.css";
import { Link } from "react-router-dom";
import Navbar from "./NavBar";
import PaletteFooter from "./PaletteFooter";
// import "./SingleColorBox.css";
import { withStyles } from "@material-ui/core/styles";
// import "./FooterForSingleColor.css";
import styles from "./styles/SingleColorPalette.js";
class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    const { paletteId } = this.props.params;
    const { palette } = this.props;
    // console.log(paletteId);
    this._shades = this.gatherShades(
      getPalette(this.findPalette(paletteId, palette)),
      this.props.params.colorId
    );
    this.state = {
      format: "hex",
    };

    // console.log(this._shades);
    console.log(this.props.params.colorId);
    console.log(this._shades);
    this.formatChange = this.formatChange.bind(this);
  }
  findPalette = (id, colorPalette) => {
    // console.log(id);
    return colorPalette.find(function (palette) {
      return palette.id === id;
    });
  };
  gatherShades(palette, colorIdToFilterBy) {
    let shades = [];
    let allColor = palette.colors;
    console.log(allColor);
    // console.log(this.props.palette);
    for (let key in allColor) {
      shades.push(
        allColor[key].filter((color) => color.id === colorIdToFilterBy)
      );
    }
    return shades.splice(1);
  }
  formatChange(val) {
    this.setState({ format: val });
  }
  // findPalette = (id) => {
  //   // console.log(id);
  //   return SeedColors.find(function (palette) {
  //     return palette.id === id;
  //   });
  // };

  render() {
    const { format } = this.state;
    const { colorId, paletteId } = this.props.params;
    const { palette } = this.props;
    const footerData = getPalette(this.findPalette(paletteId, palette));
    const { emoji, paletteName } = footerData;
    const { classes } = this.props;
    console.warn(emoji);
    console.warn(paletteName);
    const colorBox = this._shades.map((color) => {
      const { name } = color[0];
      // console.log("yooo color ", color);
      // console.warn("yooo warninggg", name);
      return (
        <ColorBox
          key={name}
          bg={color[0]}
          format={format}
          showingFullPalette={false}
        />
      );
    });
    // const palette = getPalette(this.findPalette(paletteId));
    // console.log(colorId);
    // console.log(palette);
    return (
      <div className={`${classes.singleColorPalette} ${classes.palette}`}>
        <Navbar formatChange={this.formatChange} isShowingAllColors={false} />
        {/* <h1>Single Color Palette</h1> */}
        <div className={classes.paletteColors}>
          {colorBox}
          <div className={`${classes.colorBox} ${classes.goBack} `}>
            <Link
              to={`/palette/${paletteId}`}
              className={classes.backBtn}
              href="#"
            >
              GO BACK
            </Link>
          </div>
        </div>

        <PaletteFooter emoji={emoji} paletteName={paletteName} />
      </div>
    );
  }
}

export default WithRoutes(withStyles(styles)(SingleColorPalette));
