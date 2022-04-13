import SeedColors from "./SeedColors";
import Palette from "./Palette";
import "./App.css";
import { getPalette } from "./ColorHelpers";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route
        path=""
        element={<h1>Hellooo just testing this home page</h1>}
      ></Route>
      <Route
        path="/palette/:id"
        element={<Palette palette={getPalette(SeedColors[4])} />}
      />
    </Routes>
  );
}

export default App;
