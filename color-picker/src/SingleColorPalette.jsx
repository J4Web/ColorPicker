import React, { Component } from "react";
import { WithRoutes } from "./WithRoutes";
import SeedColors from "./SeedColors";
import { getPalette } from "./ColorHelpers";
import ColorBox from "./ColorBox";
import "./Palette.css";
import Navbar from "./NavBar";
import PaletteFooter from "./PaletteFooter";
// import "./FooterForSingleColor.css";
class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    const { paletteId } = this.props.params;
    // console.log(paletteId);
    this._shades = this.gatherShades(
      getPalette(this.findPalette(paletteId)),
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
  findPalette = (id) => {
    // console.log(id);
    return SeedColors.find(function (palette) {
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
    const footerData = getPalette(this.findPalette(paletteId));
    const { emoji, paletteName } = footerData;

    console.warn(emoji);
    console.warn(paletteName);
    const colorBox = this._shades.map((color) => (
      <ColorBox key={color.id} bg={color[0]} format={format} showLink={false} />
    ));
    // const palette = getPalette(this.findPalette(paletteId));
    // console.log(colorId);
    // console.log(palette);
    return (
      <div className="SingleColorPalette Palette">
        <Navbar formatChange={this.formatChange} isShowingAllColors={false} />
        {/* <h1>Single Color Palette</h1> */}
        <div className="Palette-colors">{colorBox}</div>
        <PaletteFooter emoji={emoji} paletteName={paletteName} />
      </div>
    );
  }
}

export default WithRoutes(SingleColorPalette);
