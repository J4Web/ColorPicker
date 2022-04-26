import React from "react";
import { withStyles } from "@material-ui/core/styles";
const styles = {
  paletteFooter: {
    background: "#fff",
    height: "5vh",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    fontWeight: "bold",
    marginBottom: "2em",
  },
  emoji: {
    fontSize: "1.5rem",
    margin: "0 1.1rem",
  },
};
function PaletteFooter(props) {
  const { paletteName, emoji, classes } = props;
  return (
    <>
      <footer className={classes.paletteFooter}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </footer>
    </>
  );
}

export default withStyles(styles)(PaletteFooter);
