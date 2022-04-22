import "./App.css";
import PaletteList from "./PaletteList";
import { Routes, Route } from "react-router-dom";
import SeedColors from "./SeedColors";
import Combine from "./Combine";
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
        element={<h1>Heyy this route is for individual component</h1>}
      />
    </Routes>
  );
}

export default App;
