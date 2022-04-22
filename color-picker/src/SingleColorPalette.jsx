import React, { Component } from "react";
import { WithRoutes } from "./WithRoutes";
class SingleColorPalette extends Component {
  render() {
    return (
      <div>
        <h2>Inside Color Palette</h2>
      </div>
    );
  }
}

export default WithRoutes(SingleColorPalette);
