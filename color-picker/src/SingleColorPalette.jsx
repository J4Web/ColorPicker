import React, { Component } from "react";
import { WithRoutes } from "./WithRoutes";
import SeedColors from "./SeedColors";
import { getPalette } from "./ColorHelpers";
import ColorBox from "./ColorBox";
import "./Palette.css";
import { Link } from "react-router-dom";
import Navbar from "./NavBar";
import PaletteFooter from "./PaletteFooter";
import "./SingleColorBox.css";
import { withStyles } from "@material-ui/core/styles";
// import "./FooterForSingleColor.css";
const styles = {
  singleColorPalette: {
    height: "50%",
  },
  palette: {
    height: "100vh",
    overflow: "hidden",
    flexDirection: "column",
    // background: "rgba(255,255,255,0)",
  },
  paletteColors: {
    height: "90%",
  },
  colorBox: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
  },
  emoji: {
    fontSize: "1.5rem",
    margin: "0 1.1rem",
  },
  goBack: {
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    opacity: 1,
    backgroundColor: "#000",
    "& a": {
      color: "#fff",
      width: "100px",
      height: "30px",
      position: "absolute",
      display: "inline-block",
      top: "50%",
      left: "50%",
      marginLeft: "-50px",
      marginTop: "-15px",
      textAlign: "center",
      outline: "none",
      background: "rgba(255, 255, 255, 0.3)",
      fontSize: "1rem",
      lineHeight: "30px",
      textTransform: "uppercase",
      border: "none",
      textDecoration: "none",
    },
  },
  // backBtn: {
  //   width: "100px",
  //   height: "30px",
  //   position: "absolute",
  //   display: "inline-block",
  //   top: "50%",
  //   left: "50%",
  //   marginLeft: "-50px",
  //   marginTop: "-15px",
  //   textAlign: "center",
  //   outline: "none",
  //   // background: "rgba(255, 255, 255, 0=)",
  //   fontSize: "1rem",
  //   lineHeight: "30px",
  //   color: "#fff",
  //   textTransform: "uppercase",
  //   border: "none",
  //   textDecoration: "none",
  //   background: "rgba(255, 255, 255, 0.3)",
  //   // position: "relative",
  // },
};
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
          <div className={`${classes.goBack} ${classes.colorBox}`}>
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
