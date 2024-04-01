import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./views/home";
import CharactersContainer from './components/CharactersContainer';



function App() {
  return (
    <div>
      {/* <CharactersContainer/>  */}
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
