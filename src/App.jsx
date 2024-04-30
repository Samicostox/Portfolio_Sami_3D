// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/home.jsx";  // Ensure you import Home correctly based on your file structure

import Project1 from "./Pages/Projects_Pages/Project_1.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-slate-900'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Innovation_Studios" element={<Project1 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
