import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./views/home";
import CharactersContainer from './components/allCharacters';
import { DetailCard } from "./views/detailCard";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/detail/:id" element={<DetailCard/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
