import SeedColors from "./SeedColors";
import Palette from "./Palette";
import "./App.css";
function App() {
  return (
    <div>
      <Palette {...SeedColors[4]} />
    </div>
  );
}

export default App;
