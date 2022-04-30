import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "./DraggableColorBox";
function DraggableColorList({ color, handleDelete }) {
  return (
    <div style={{ height: "100%" }}>
      {color.map((c, i) => {
        return (
          <DraggableColorBox
            index={i}
            key={c.color}
            color={c.color}
            name={c.name}
            handleClick={() => handleDelete(c.color)}
          />
        );
      })}
    </div>
  );
}

export default SortableContainer(DraggableColorList);
