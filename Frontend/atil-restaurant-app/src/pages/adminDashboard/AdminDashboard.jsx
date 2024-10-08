import React, { useEffect, useState } from 'react'
import AdminNav from '../../components/adminComponents/AdminNav'
import AdminBody from '../../components/adminComponents/AdminBody'

import './AdminDashboard.css'


function AdminDashboard() {


  return (
    <div className='adminPageOuterContainer'>
      <AdminNav />
      <AdminBody />

    </div>
  )
}

export default AdminDashboard