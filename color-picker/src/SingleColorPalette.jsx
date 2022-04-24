import React, { Component } from "react";
import { WithRoutes } from "./WithRoutes";
import SeedColors from "./SeedColors";
class SingleColorPalette extends Component {
  findPalette = (id) => {
    // console.log(id);
    return SeedColors.find(function (palette) {
      return palette.id === id;
    });
  };
  render() {
    const { colorId } = this.props.params;
    console.log(colorId);
    return (
      <div>
        <h2>Inside Color Palette</h2>
      </div>
    );
  }
}

export default WithRoutes(SingleColorPalette);
