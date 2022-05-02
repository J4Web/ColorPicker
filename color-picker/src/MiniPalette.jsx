import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/MiniPalette.js";
// so in short if you wanna target specific inside a class we do "& h3:{}"
import DeleteIcon from "@mui/icons-material/Delete";

function MiniPalette(props) {
  const { classes, emoji, paletteName, colors } = props;
  const miniColorBoxes = colors.map((color) => (
    <div
      key={color.name}
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
    ></div>
  ));
  return (
    <div className={classes.root} onClick={props.handlePath}>
      <div
        className={classes.delete}
        style={{ transition: "all 3s easy-in-out" }}
      >
        <DeleteIcon className={classes.deleteIcon} />
      </div>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
