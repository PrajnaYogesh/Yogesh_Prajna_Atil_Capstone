import { useState } from 'react'
import {  Route, Routes } from 'react-router-dom';
import './App.css'
import CustomerPage from './pages/CustomerPage';
import AdminSignup from './pages/AdminSignup';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

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
