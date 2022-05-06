import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/PaletteFooter.js";
function PaletteFooter(props) {
  const { paletteName, emoji, classes } = props;
  return (
    <div className={classes.footer}>
      <footer className={classes.paletteFooter}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </footer>
    </div>
  );
}

export default withStyles(styles)(PaletteFooter);
