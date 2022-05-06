import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "./DraggableColorBox";
import { v4 as uuidv4 } from "uuid";

const DraggableColorList = ({ color, handleDelete }) => {
  return (
    <div style={{ height: "100%" }}>
      {color.map((c, i) => {
        return (
          <DraggableColorBox
            index={i}
            key={uuidv4()}
            color={c.color}
            name={c.name}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};

export default SortableContainer(DraggableColorList);
// SortableContainer()
