import './App.css'
import { Routes, Route } from "react-router-dom";
import { Home } from "./views/home"

function App() {

  return (
      <div>
        <Routes>
          <Route path="/" element={<Home/>}> </Route>
        </Routes>
    </div>
  )
}

export default App
  