import React, { useState } from 'react'
import { Link} from 'react-router-dom';
import './AdminSignup.css'
import axios from 'axios';

function AdminSignup() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

async function handleSubmit(e){
e.preventDefault();
try {
  const result = await axios.post('http://localhost:3000/admin/signup', {
    name,
    email,
    password,
});
console.log(result)



} catch (error) {
  console.log(error)
}
}


  return (
    <div className='Signup'>

      <div className="signup-box">

        <h2 className="heading">Signup</h2>

        <form onSubmit={handleSubmit}>

<label htmlFor="name"> Name </label>
<input className="name" id="name" required="true" type="text" onChange={(e) => setName(e.target.value)} />

<label htmlFor='email'> Email </label>
<input className='email' type="email" required="true"  id="email" onChange={(e)=> setEmail(e.target.value) }/>


<label htmlFor="password"> Password </label>
<input className='password' type="password" required="true" id="password" onChange={(e)=> setPassword(e.target.value)}/>

<input type="submit" className='submit'/>
        </form>

<p className="subheading">Already have an account? <Link to="/admin/login">Log In </Link></p>

      </div>



    </div>
  )
}

export default AdminSignup