import React from 'react'
import './AdminNav.css'
import { useNavigate } from "react-router-dom";
import { KEY_ACCESS_TOKEN, removeItem } from "../../utils/localStorageManager";

function AdminNav() {
    const navigate = useNavigate();

    async function handleLogoutClicked() {
        try {
         
          removeItem(KEY_ACCESS_TOKEN);
          navigate("/admin/login");
        } catch (e) {}
      }


  return (
    <div className='adminNavOuterContainer'>
<div className="atilLogo">
    <img className='imageStyle' src="/atil.png" alt="atil-logo" />
</div>

<button className='clickBtn' onClick={handleLogoutClicked} >Logout</button>
    </div>
  )
}

export default AdminNav