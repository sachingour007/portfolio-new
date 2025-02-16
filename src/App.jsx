import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import {
  Homepage,
  Aboutus,
  Experience,
  Specilization,
  MySkill,
  Projects,
  ContactMe,
} from "./index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-me" element={<Aboutus />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/specilization" element={<Specilization />} />
          <Route path="/mySkills" element={<MySkill />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact-me" element={<ContactMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
