import "./App.css";
import PaletteList from "./PaletteList";
import { Routes, Route } from "react-router-dom";
import SeedColors from "./SeedColors";
import Combine from "./Combine";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import { useState, useEffect } from "react";
function App() {
  const [palette, setPalette] = useState(SeedColors);
  const savePalette = (newPalette) => {
    // console.log(newPalette);
    setPalette([...palette, newPalette]);
  };

  return (
    <Routes>
      <Route
        path="/palette/new"
        element={<NewPaletteForm savePalette={savePalette} palette={palette} />}
      ></Route>
      <Route path="/" element={<PaletteList palette={palette} />}></Route>
      <Route path="/palette/:id" element={<Combine palette={palette} />} />
      <Route
        path="/palette/:paletteId/:colorId"
        element={<SingleColorPalette palette={palette} />}
      />
    </Routes>
  );
}

export default App;
