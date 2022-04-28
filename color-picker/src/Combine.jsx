import React, { Component } from "react";
import Palette from "./Palette";
// import SeedColors from "./SeedColors";
import { getPalette } from "./ColorHelpers";
import { WithRoutes } from "./WithRoutes";
class Combine extends Component {
  findPalette = (id) => {
    // console.log(id);
    return this.props.palette.find(function (palette) {
      return palette.id === id;
    });
  };
  render() {
    const { palette } = this.props;
    const { id } = this.props.params;

    return (
      <div>
        <Palette a={palette} palette={getPalette(this.findPalette(id))} />
      </div>
    );
  }
}

export default WithRoutes(Combine);
