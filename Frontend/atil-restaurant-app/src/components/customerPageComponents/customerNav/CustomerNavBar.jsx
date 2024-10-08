import React from 'react'
import './CustomerNavBar.css'
import {Link} from 'react-router-dom'

function CustomerNavBar() {
  return (

<nav className="custNavOuterContainer">

    <div className="custatilLogo">
        <img className='imageStyle' src="/atil.png" alt="Logo" />
    </div>

    <div className="cust-nav-links ">
        <Link className='cust-clickBtn' to="/">Home</Link>
        <Link  className='cust-clickBtn' to="/menu">Menu</Link>
        <Link  className='cust-clickBtn' to="/contact">Contact Us</Link>
        <Link  className='cust-clickBtn' to="/cart">Cart</Link>
    </div>
</nav>



//     <nav>
// <Link to="/"> Home </Link>
// <Link to="/menu"> Menu </Link>
// <Link to="/contact"> Contact Us </Link>
// <Link to="/cart"> Cart </Link>

//     </nav>
  )
}

export default CustomerNavBar