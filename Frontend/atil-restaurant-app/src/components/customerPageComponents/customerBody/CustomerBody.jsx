import React from 'react'
import './CustomerBody.css'
import { Outlet } from 'react-router-dom'

function CustomerBody() {
  return (
    <div className='bodyHeight'>
<Outlet />

    </div>
  )
}

export default CustomerBody