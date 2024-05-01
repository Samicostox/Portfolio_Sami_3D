// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/home.jsx";  // Ensure you import Home correctly based on your file structure

import ProjectTemplate from "./components/Project_Template.jsx";
import { Project_1, Project_2, Project_3, Project_4, Project_5 } from "./Content_Projects/Content.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-slate-900'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tech_Docs" element={<ProjectTemplate content={Project_1} />} />
          <Route path="/Innovation_Studios" element={<ProjectTemplate content={Project_2} />} />
          <Route path="/SafeQueen" element={<ProjectTemplate content={Project_3} />} />
          <Route path="/Nutrition_Vault" element={<ProjectTemplate content={Project_4} />} />
          <Route path="/OneCVaDay" element={<ProjectTemplate content={Project_5} />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
