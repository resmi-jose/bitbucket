import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Person from "./Components/Person";


function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Person />} />
          <Route path="/starwar/:name" element={<Person />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
