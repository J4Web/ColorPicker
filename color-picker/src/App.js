import "./App.css";

import { Routes, Route, Router } from "react-router-dom";

import AnimatedRoutes from "./AnimatedRoutes";
function App() {
  return (
    <Routes>
      <Route path="*" element={<AnimatedRoutes />} />
    </Routes>
  );
}

export default App;
