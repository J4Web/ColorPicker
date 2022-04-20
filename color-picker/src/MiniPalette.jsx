import React from "react";
import { withStyles } from "@material-ui/core/styles";
const styles = {
  main: {
    backGroundColor: "yellow",
    color: "#5555",
  },
  second: {
    backGroundColor: "#464743",
    color: "#900",
  },
};
function MiniPalette(props) {
  const { classes } = props;
  console.log(classes);
  return (
    <div className={classes.main}>
      MiniPalette
      <h3 className={classes.second}>Heyyy</h3>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
