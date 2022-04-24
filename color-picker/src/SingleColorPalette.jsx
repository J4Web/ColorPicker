import React, { Component } from "react";
import { WithRoutes } from "./WithRoutes";
import SeedColors from "./SeedColors";
import { getPalette } from "./ColorHelpers";
class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._state = this.gatherShades(this);
  }
  findPalette = (id) => {
    // console.log(id);
    return SeedColors.find(function (palette) {
      return palette.id === id;
    });
  };
  render() {
    const { colorId, paletteId } = this.props.params;
    const palette = getPalette(this.findPalette(paletteId));
    console.log(colorId);
    console.log(palette);
    return (
      <div>
        <h2>Inside Color Palette</h2>
      </div>
    );
  }
}

export default WithRoutes(SingleColorPalette);
