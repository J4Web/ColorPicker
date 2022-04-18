import React, { Component } from "react";
import Palette from "./Palette";
import SeedColors from "./SeedColors";
import { getPalette } from "./ColorHelpers";
import WithRoutes from "./WithRoutes";
class Combine extends Component {
  findPalette = (id) => {
    console.log(id);
    return SeedColors.find(function (palette) {
      return palette.id === id;
    });
  };
  render() {
    const { id } = this.props.params;
    return (
      <div>
        <Palette palette={getPalette(this.findPalette(id))} />
      </div>
    );
  }
}

export default WithRoutes(Combine);
