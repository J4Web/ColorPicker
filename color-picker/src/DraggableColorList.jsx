import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "./DraggableColorBox";

const DraggableColorList = ({ color, handleDelete }) => {
  return (
    <div style={{ height: "100%" }}>
      {color.map((c, i) => {
        return (
          <DraggableColorBox
            index={i}
            key={c.color}
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
