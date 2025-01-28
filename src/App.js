import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './component/Header';
import Home from './pages/Home';
import About from './pages/About';
import EmployeeLogin from './pages/EmployeeLogin';
import HRLogin from './pages/HRLogin';
import SuperAdminLogin from './pages/SuperAdminLogin';
import HRDashboard from './pages/HRDashboard';
import EmployeeSignUp from './pages/EmployeeSignUp';
<<<<<<< HEAD
import EmployeeDashboard from './pages/EmployeeDashboard';
import MyAccount from './pages/MyAccount';
=======
import EmployeeList from './pages/EmployeeList';
>>>>>>> 7a70902086ea17fd34ea2ff8f1f02a4e3fb89842


function App() {
  return (
    <Router>
      <Header />
      <Routes>


        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />         
        <Route path="/superadmin-login" element={<SuperAdminLogin />} />
        

        <Route path='/hr'>
          <Route path="login" element={<HRLogin />} />
          <Route path='dashboard' element={<HRDashboard />} />
          <Route path='employeesignup' element={<EmployeeSignUp/>}/>
          <Route path='employeereport' element={<EmployeeList/>}/>
        </Route>
       
        <Route path='/employee'>
         <Route path="login" element={<EmployeeLogin />} />
         <Route path="dashboard" element={<EmployeeDashboard />} />
         <Route path='myaccount' element={<MyAccount />} />        
        </Route>


      </Routes>
    </Router>
  );
}

export default App;
