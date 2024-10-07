import React from 'react'
import './AdminNav.css'


function AdminNav() {
  return (
    <div className='adminNavOuterContainer'>
<div className="atilLogo">
    <img className='imageStyle' src="/atil.png" alt="atil-logo" />
</div>

<button className='clickBtn'>Logout</button>
    </div>
  )
}

export default AdminNav