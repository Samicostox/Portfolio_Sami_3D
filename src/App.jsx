// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/home.jsx";  // Ensure you import Home correctly based on your file structure

import ProjectTemplate from "./components/Project_Template.jsx";
import { Project_1, Project_2 } from "./Content_Projects/Content.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-slate-900'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tech_Docs" element={<ProjectTemplate content={Project_1} />} />
          <Route path="/Innovation_Studios" element={<ProjectTemplate content={Project_2} />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
