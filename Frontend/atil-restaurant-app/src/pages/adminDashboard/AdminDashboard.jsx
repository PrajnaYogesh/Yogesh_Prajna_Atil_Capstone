import React, { useEffect, useState } from 'react'
import AdminNav from '../../components/adminComponents/AdminNav'
import AdminBody from '../../components/adminComponents/AdminBody'

import './AdminDashboard.css'
import CustomerFooter from '../../components/customerPageComponents/CustomerFooter/CustomerFooter'


function AdminDashboard() {


  return (
    <div className='adminPageOuterContainer'>
      <AdminNav />
      <AdminBody />
      <CustomerFooter />

    </div>
  )
}

export default AdminDashboard