import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Person from "./Components/Person";
import PersonDetails from "./Components/PersonDetails";


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Person />} />
          <Route path="/starwar/:name" element={<PersonDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
