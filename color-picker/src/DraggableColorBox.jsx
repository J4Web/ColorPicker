import React from "react";
import { withStyles } from "@material-ui/core/styles";
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
  },
};
function DraggableColorBox(props) {
  const bgColor = props.color;
  const { classes } = props;
  return (
    <div className={classes.root} style={{ background: bgColor }}>
      {props.color}
    </div>
  );
}

export default withStyles(styles)(DraggableColorBox);
