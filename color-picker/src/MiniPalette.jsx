// import React from "react";
// import { withStyles } from "@material-ui/core/styles";
// import styles from "./styles/MiniPalette.js";
// // so in short if you wanna target specific inside a class we do "& h3:{}"
// import DeleteIcon from "@mui/icons-material/Delete";

// function MiniPalette(props) {
//   const {
//     classes,
// emoji,
// paletteName,
// colors,
// delPalette,
// id,
// palette,
// openDialog,
//   } = props;
// const miniColorBoxes = colors.map((color) => (
//   <div
//     key={color.name}
//     className={classes.miniColor}
//     style={{ backgroundColor: color.color }}
//   ></div>
// ));
//   const deleteBtn = (e) => {
//     e.stopPropagation();
//     // delPalette(id);
//     openDialog(props.id);
//   };
//   return (
//
//   );
// }

// export default withStyles(styles)(MiniPalette);

import React, { PureComponent } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/MiniPalette.js";
class MiniPalette extends PureComponent {
  render() {
    const {
      classes,
      palette,
      emoji,
      paletteName,
      colors,
      delPalette,
      id,
      openDialog,
      handlePath,
    } = this.props;
    const miniColorBoxes = colors.map((color) => (
      <div
        key={color.name}
        className={classes.miniColor}
        style={{ backgroundColor: color.color }}
      ></div>
    ));
    const deleteBtn = (e) => {
      e.stopPropagation();
      // delPalette(id);
      openDialog(id);
    };
    //  onst checkRerender=()=>{

    // }
    console.log(id);
    return (
      <div className={classes.root} onClick={() => handlePath(id)}>
        {palette.length !== 1 && (
          <DeleteIcon
            className={classes.deleteIcon}
            style={{ transition: "all 3s easy-in-out" }}
            onClick={deleteBtn}
          />
        )}

        <div className={classes.colors}>{miniColorBoxes}</div>
        <h5 className={classes.title}>
          {paletteName} <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    );
  }
}

export default withStyles(styles)(MiniPalette);
