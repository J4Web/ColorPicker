import sizes from "./sizes";
const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.8px",
    "&:hover button": {
      opacity: 1,
      transition: "0.5s",
    },
    "&:hover svg ": {
      color: "#fff",
      transform: "scale(1.4)",
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: "20%",
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "10%",
    },
    [sizes.down("sm")]: {
      width: "100%",
      height: "5%",
      marginBottom: "-6.8px",
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
    display: "flex",
    justifyContent: "space-between",
  },
  deleteIcon: {
    color: "rgba(0,0,0,0.5)",
    transition: "all 0.3 ease-in-out",
  },
};

export { styles };
