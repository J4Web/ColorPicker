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
    "& h2": {
      backGroundColor: "teal",
    },
  },
};

// so in short if you wanna target specific inside a class we do "& h3:{}"
function MiniPalette(props) {
  const { classes } = props;
  console.log(classes);
  return (
    <div className={classes.main}>
      MiniPalette
      <h2 className={classes.second}>Heyyy</h2>
      <div className="second">
        <h2 className={classes.second}>
          here is the second h2 and by doing & it'll only be styled
        </h2>
      </div>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
