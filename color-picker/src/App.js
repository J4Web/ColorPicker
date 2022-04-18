import "./App.css";

import { Routes, Route } from "react-router-dom";
import Combine from "./Combine";
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<h1>Hellooo just testing this home page</h1>}
      ></Route>
      <Route path="/palette/:id" element={<Combine />} />
    </Routes>
  );
}

export default App;
