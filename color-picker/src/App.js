import "./App.css";
import PaletteList from "./PaletteList";
import { Routes, Route } from "react-router-dom";
import SeedColors from "./SeedColors";
import Combine from "./Combine";
import SingleColorPalette from "./SingleColorPalette";
function App() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<PaletteList palette={SeedColors} />}
      ></Route>
      <Route path="/palette/:id" element={<Combine />} />
      <Route
        path="/palette/:paletteId/:colorId"
        element={<SingleColorPalette palette={SeedColors} />}
      />
    </Routes>
  );
}

export default App;
