import sizes from "./sizes";
const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "6vh",
  },
  logo: {
    marginRight: "15px",
    padding: "0 13px",
    fontSize: "22px",
    background: "#eceff1",
    fontFamily: "Roboto",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "#000",
    },
    [sizes.down("xs")]: {
      display: "none",
    },
  },
  slider: {
    width: "320px",
    margin: "0 17px",
    display: "inline-block",
    "& .rc-slider-rail": {
      height: "8px",
    },
    "& .rc-slider-track": {
      background: "transparent",
    },
    "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover":
      {
        backgroundColor: "green",
        outline: "none",
        border: "2px solid green",
        boxShadow: "none",
        width: "13px",
        height: "13px",
        marginLeft: "-7px",
        marginTop: -"3px",
      },
    [sizes.down("md")]: {
      width: "145px",
    },
  },
  selectContainer: {
    margin: "auto",
    marginRight: "1em",
    [sizes.down("xs")]: {
      fontSize: "5px",
      marginRight: "0.1em",
    },
  },
  navContent: {
    margin: "5px",
    [sizes.down("xs")]: {
      fontSize: "1rem!important",
      marginLeft: "5px",
    },
  },
  snackbar: {
    [sizes.down("xs")]: {
      fontSize: "1rem!important",
      textAlign: "center",
    },
  },
  select: {
    [sizes.down("xs")]: {
      fontSize: "0.1rem!important",
      border: "none!important",
      outline: "none!important",
      marginRight: "6rem!important",
    },
  },
};

export default styles;
