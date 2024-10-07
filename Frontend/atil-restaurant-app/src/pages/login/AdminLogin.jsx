import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom';
import './AdminLogin.css'
import axios from 'axios';
import { KEY_ACCESS_TOKEN,setItem } from '../../utils/localStorageManager';



function AdminLogin() {

const [email,setEmail]= useState();
const [password,setPassword] = useState();
const navigate = useNavigate();

async function handleSubmit(e){
  e.preventDefault();
  try {
    const response = await axios.post('http://localhost:3000/admin/login',{
      email,
      password
    });
    // console.log('login result',response.data.result.accessToken)
    setItem(KEY_ACCESS_TOKEN,response.data.result.accessToken )
    navigate('/admin/dashboard')

  } catch (error) {
    console.log(error)
  }

}

  return (
    <div className='Login'>
<div className="login-box">
<h2 className="heading">Login</h2>

<form onSubmit={handleSubmit}>

<label htmlFor="email">Email</label>
<input  className='email' id='email' type="email" required='true' onChange={(e)=> setEmail(e.target.value)}/>

<label htmlFor="password"> Password </label>
<input className='password' id='password' type='password' required='true' onChange={(e) => setPassword(e.target.value)} />

<input type="submit" className='submit' />
</form>

<p className="subheading">Do not have an account? <Link to='/admin/signup'>Signup</Link> </p>

</div>

    </div>
  )
}

export default AdminLogin