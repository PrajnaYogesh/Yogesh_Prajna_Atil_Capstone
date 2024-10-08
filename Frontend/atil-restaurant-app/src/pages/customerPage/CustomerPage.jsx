import React from 'react'
import CustomerNavBar from '../../components/customerPageComponents/CustomerNavBar'
import CustomerBody from '../../components/customerPageComponents/CustomerBody'
import CustomerFooter from '../../components/customerPageComponents/CustomerFooter'

function CustomerPage() {
  return (
    <div>
      <CustomerNavBar />
      <CustomerBody />
      <CustomerFooter />
    </div>
  )
}

export default CustomerPage