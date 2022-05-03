import sizes from "./sizes";
import bg from "./bg.svg";
const styles = {
  "@global": {
    ".fade-exit": {
      opacity: 1,
    },
    ".fade-exit:active": {
      opacity: 0,
      transition: "opacity 500ms ease-out",
    },
  },
  root: {
    backgroundColor: "teal",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundImage: `url(${bg})`,
    overflow: "scroll",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flex: "wrap",
    [sizes.down("xl")]: {
      width: "80%",
    },
    [sizes.down("xs")]: {
      width: "75%",
    },
  },
  heading: {
    fontSize: "1.8rem",
    // boxShadow: "19px 0px 68px rgba(0, 0, 0, 0.13)",
    paddingBottom: "5px",
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    "& a": {
      //   textDecoration: "none",
      color: "white",
    },
  },

  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3,30%)",
    gridGap: "2.5rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2,50%)",
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1,100%)",
      gridGap: "1.4rem",
    },
  },
};

export default styles;
