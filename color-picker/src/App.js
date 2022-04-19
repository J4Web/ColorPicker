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
    </Routes>
  );
}

export default App;
