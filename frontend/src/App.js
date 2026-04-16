import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar, { NAVBAR_HEIGHT } from "./components/layout/Navbar";
import CourseDetails from "./pages/CourseDetails";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Navbar />

      {/* Spacer to push content below fixed navbar */}
      <Box sx={{ mt: `${NAVBAR_HEIGHT}px` }}>
        <Routes>
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Box>
      
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
   
    </>
  );
}

export default App;
