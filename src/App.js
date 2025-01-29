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

import EmployeeDashboard from './pages/EmployeeDashboard';
import MyAccount from './pages/MyAccount';
import EmployeeList from './pages/EmployeeList';
import SalaryReport from './pages/SalaryReport';
import SalaryEntryForm from './pages/SalaryEntryForm';


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
          <Route path='salaryreport' element={<SalaryReport/>}/>
          <Route path='salaryentryform' element={<SalaryEntryForm/>}/>
          
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
