import { useState } from 'react'
import {  Route, Routes } from 'react-router-dom';
import './App.css'
import CustomerPage from './pages/customerPage/CustomerPage';
import AdminSignup from './pages/signup/AdminSignup';
import AdminLogin from './pages/login/AdminLogin';
import AdminDashboard from './pages/adminDashboard/AdminDashboard';

function App() {
  

  return (
    <div className='outerContainer'>
    <Routes> 
      <Route path='/' element={<CustomerPage />} /> 
      <Route path="/admin/signup"   element={<AdminSignup />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
</Routes>
    
    </div>
  )
}

export default App
