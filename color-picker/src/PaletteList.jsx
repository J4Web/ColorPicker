import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";

export default class PaletteList extends Component {
  render() {
    const { palette } = this.props;
    console.log(palette);
    return (
      <div>
        <MiniPalette />
        <h1>React Colors</h1>
        {palette.map((item) => {
          return (
            <p>
              <Link to={`/palette/${item.id}`}>{item.paletteName}</Link>
            </p>
          );
        })}
      </div>
    );
  }
}
