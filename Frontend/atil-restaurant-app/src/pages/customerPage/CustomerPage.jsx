import React from 'react'
import CustomerNavBar from '../../components/customerPageComponents/customerNav/CustomerNavBar'
import CustomerBody from '../../components/customerPageComponents/customerBody/CustomerBody'
import CustomerFooter from '../../components/customerPageComponents/customerFooter/CustomerFooter'
import './CustomerPage.css'
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