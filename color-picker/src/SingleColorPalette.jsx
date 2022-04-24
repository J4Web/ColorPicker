import React, { Component } from "react";
import { WithRoutes } from "./WithRoutes";
import SeedColors from "./SeedColors";
import { getPalette } from "./ColorHelpers";
import ColorBox from "./ColorBox";
import "./Palette.css";
class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    const { paletteId } = this.props.params;
    // console.log(paletteId);
    this._shades = this.gatherShades(
      getPalette(this.findPalette(paletteId)),
      this.props.params.colorId
    );
    // console.log(this._shades);
    console.log(this.props.params.colorId);
    console.log(this._shades);
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

  render() {
    const { colorId, paletteId } = this.props.params;
    const colorBox = this._shades.map((color) => (
      <ColorBox key={color.id} bg={color[0]} format="hex" />
    ));
    // const palette = getPalette(this.findPalette(paletteId));
    // console.log(colorId);
    // console.log(palette);
    return (
      <div className="Palette">
        <h1>Single Color Palette</h1>
        <div className="Palette-colors">{colorBox}</div>
      </div>
    );
  }
}

export default WithRoutes(SingleColorPalette);
