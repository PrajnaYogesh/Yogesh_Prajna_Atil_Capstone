import React from 'react'
import CustomerNavBar from '../../components/customerPageComponents/customerNav/CustomerNavBar'
import CustomerBody from '../../components/customerPageComponents/customerBody/CustomerBody'
import './CustomerPage.css'
import CustomerFooter from '../../components/customerPageComponents/CustomerFooter/CustomerFooter'
function CustomerPage() {
  return (
    <div className='background'>
      <CustomerNavBar />
      <CustomerBody />
      <CustomerFooter />
    </div>
  )
}

export default CustomerPage