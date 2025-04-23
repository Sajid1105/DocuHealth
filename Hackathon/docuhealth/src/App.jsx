import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";
import MyDocs from "./MyDocs";
import Upload from "./Upload";
import Tracker from "./Tracker";
import Translator from "./Translator";
import Login from "./LoginSignup";
import Signup from "./Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mydocs" element={<MyDocs />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/translator" element={<Translator />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
