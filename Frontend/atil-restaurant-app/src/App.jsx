import { useState } from 'react'
import {  Route, Routes } from 'react-router-dom';
import './App.css'
import CustomerPage from './pages/customerPage/CustomerPage';
import AdminSignup from './pages/signup/AdminSignup';
import AdminLogin from './pages/login/AdminLogin';
import AdminDashboard from './pages/adminDashboard/AdminDashboard';
import MenuPage from './components/customerPageComponents/menu/MenuPage'
import ContactUs from './components/customerPageComponents/contact/ContactUs'
import CheckoutPage from './components/customerPageComponents/checkout/CheckoutPage'
import HomePage from './components/customerPageComponents/Home/HomePage';


function App() {
  

  return (
    <div className='outerContainer'>
    <Routes> 
    <Route path="/" element={<CustomerPage />}>
    <Route index element={<HomePage />} /> {/* Default route for Home */}
    <Route path="menu" element={<MenuPage />} />
    <Route path="contact" element={<ContactUs />} />
    <Route path="cart" element={<CheckoutPage />} />
  </Route>


      <Route path="/admin/signup"   element={<AdminSignup />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
</Routes>
    
    </div>
  )
}

export default App
 