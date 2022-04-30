import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
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
    "&:hover svg ": {
      color: "#fff",
      transform: "scale(1.4)",
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
function DraggableColorBox(props) {
  const bgColor = props.color;
  const { classes } = props;
  // console.log(props);
  // console.log(props.classes);
  return (
    <div className={classes.root} style={{ background: bgColor }}>
      <div className={classes.boxContent}>
        <span>{props.name}</span>

        <DeleteIcon className={classes.deleteIcon} />
      </div>
    </div>
  );
}

export default withStyles(styles)(DraggableColorBox);
