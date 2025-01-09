import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './component/Header';
import Home from './pages/Home';
import About from './pages/About';
import EmployeeLogin from './pages/EmployeeLogin';
import HRLogin from './pages/HRLogin';
import SuperAdminLogin from './pages/SuperAdminLogin';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/employee-login" element={<EmployeeLogin />} /> */}
        {/* <Route path="/hr-login" element={<HRLogin />} /> */}
        {/* <Route path="/superadmin-login" element={<SuperAdminLogin />} /> */}

      
      </Routes>
    </Router>
  );
}

export default App;
