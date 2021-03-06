import chroma from "chroma-js";
import sizes from "./sizes";
const styles = {
  colorBox: {
    width: "20%",
    height: (props) => (props.showingFullPalette ? "25%" : "50%"),
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-5px!important",
    "&:hover button": {
      opacity: 1,
      transition: "0.5s",
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: (props) => (props.showingFullPalette ? "20%" : "33.333333%"),
    },
    [sizes.down("md")]: {
      width: "50%",
      height: (props) => (props.showingFullPalette ? "10%" : "20%"),
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: (props) => (props.showingFullPalette ? "5%" : "10%"),
    },
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    color: "#000",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
  },
  copyText: {
    color: (props) =>
      chroma(props.bg.hex).luminance() >= 0.7 ? "#000" : "#fff",
    paddingTop: "0px",
  },
  colorName: {
    color: (props) =>
      chroma(props.bg.hex).luminance() <= 0.08 ? "#fff" : "#000",
  },
  seeMore: {
    position: "absolute",
    right: "0",
    border: "none",
    bottom: "0",
    background: "rgba(255 255, 255, 0.3)",
    textAlign: "center",
    textTransform: "uppecase",
    lineHeight: "30px",
    width: "60px",
    color: (props) =>
      chroma(props.bg.hex).luminance() >= 0.7 ? "#000" : "#fff",
  },
  copyButton: {
    color: (props) =>
      chroma(props.bg.hex).luminance() <= 0.08 ? "#fff" : "#000",
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
    opacity: 0,
  },
  boxCopyOverlay: {
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",

    transform: "transform 0.6s ease-in-out",
    transform: "scale(0.1)",
  },
  showOverlay: {
    opacity: "1",
    transform: "scale(50)",
    zIndex: "10",
    position: "absolute",
  },
};
export default styles;
