import "./App.css";
import PaletteList from "./Palette";
import { Routes, Route } from "react-router-dom";
import SeedColors from "./SeedColors";
import Combine from "./Combine";
function App() {
  return (
    <Routes>
      <Route path="/" element={<PaletteList palette={SeedColors} />}></Route>
      <Route path="/palette/:id" element={<Combine />} />
    </Routes>
  );
}

export default App;
