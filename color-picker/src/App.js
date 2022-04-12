import SeedColors from "./SeedColors";
import Palette from "./Palette";
import "./App.css";
import { getPalette } from "./ColorHelpers";

function App() {
  return (
    <div>
      <Palette palette={getPalette(SeedColors[4])} />
    </div>
  );
}

export default App;
