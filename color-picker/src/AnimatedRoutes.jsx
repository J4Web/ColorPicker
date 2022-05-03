import React from "react";
import { Router, Routes, Route, useLocation } from "react-router-dom";
import PaletteList from "./PaletteList";
import Combine from "./Combine";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import SeedColors from "./SeedColors";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
function AnimatedRoutes() {
  const location = useLocation();
  console.log(location);
  const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
  const [palette, setPalette] = useState(savedPalettes || SeedColors);
  const savePalette = (newPalette) => {
    // console.log(newPalette);
    setPalette([...palette, newPalette]);
  };
  const delPalette = (id) => {
    setPalette(palette.filter((palette) => palette.id !== id));
    // console.log(window.location.key);
  };

  useEffect(() => {
    console.log(palette, "suxhsdxnjnsjdcnjn");
    window.localStorage.setItem("palettes", JSON.stringify(palette));
  }, [palette]);
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/palette/new"
          element={
            <NewPaletteForm savePalette={savePalette} palette={palette} />
          }
        />
        <Route
          path="/"
          element={<PaletteList palette={palette} delPalette={delPalette} />}
        />
        <Route path="/palette/:id" element={<Combine palette={palette} />} />
        <Route
          path="/palette/:paletteId/:colorId"
          element={<SingleColorPalette palette={palette} />}
        />
        <Route
          path="*"
          element={<PaletteList palette={palette} delPalette={delPalette} />}
        />
        } />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
