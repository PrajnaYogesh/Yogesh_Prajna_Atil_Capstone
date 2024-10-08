import React from 'react'
import './CustomerBody.css'
import { Outlet } from 'react-router-dom'

function CustomerBody() {
  return (
    <div>
<Outlet />

    </div>
  )
}

export default CustomerBody