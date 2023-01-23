import CovidData from "./components/CovidData"
import Cases from "./components/Cases"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Deaths from "./components/Deaths";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<CovidData />}></Route>
          <Route exact path="/cases" element={<Cases />}></Route>
          <Route exact path="/deaths" element={<Deaths />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
