// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/home.jsx";  // Ensure you import Home correctly based on your file structure
import { TracingBeamDemo } from "./components/ProjectPage.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Project" element={<TracingBeamDemo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
