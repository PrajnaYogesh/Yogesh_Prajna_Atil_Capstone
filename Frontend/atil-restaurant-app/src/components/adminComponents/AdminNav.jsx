import React from 'react'
import './AdminNav.css'
import { useNavigate } from "react-router-dom";
import { KEY_ACCESS_TOKEN, removeItem } from "../../utils/localStorageManager";
import { PiHandsPrayingFill } from "react-icons/pi";
import { IoMdLogOut } from "react-icons/io";
function AdminNav() {
    const navigate = useNavigate();

    async function handleLogoutClicked() {
        try {
         
          removeItem(KEY_ACCESS_TOKEN);
          navigate("/admin/login", { replace: true });
        } catch (e) {}
      }


  return (
    <div className='adminNavOuterContainer'>
<div className="atilLogo">
    <img className='imageStyle' src="/atil.png" alt="atil-logo" />
</div>

<div className="tog">
<h1 className='nameH'> <PiHandsPrayingFill /> Welcome to Atil <PiHandsPrayingFill /></h1>
</div>

<button className='clickBtn1' onClick={handleLogoutClicked} ><IoMdLogOut /></button>

    </div>
  )
}

export default AdminNav