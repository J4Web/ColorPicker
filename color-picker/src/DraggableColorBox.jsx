import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { withStyles } from "@material-ui/core/styles";
import { SortableElement } from "react-sortable-hoc";
import { styles } from "./styles/DraggableColorBoxStyles";
const DraggableColorBox = (props) => {
  const bgColor = props.color;
  // console.error(bgColor);
  const { handleDelete } = props;
  const { classes } = props;
  // console.log(props);
  // console.log(props.classes);

  return (
    <div className={classes.root} style={{ background: bgColor }}>
      <div className={classes.boxContent}>
        <span>{props.name}</span>

        <DeleteIcon
          className={classes.deleteIcon}
          onClick={() => handleDelete(bgColor)}
        />
      </div>
    </div>
  );
};

export default SortableElement(withStyles(styles)(DraggableColorBox));
//  SortableElement()
