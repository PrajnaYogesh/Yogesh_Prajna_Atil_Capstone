import React, { useEffect, useState } from 'react'
import AdminNav from '../../components/adminComponents/AdminNav'
import AdminBody from '../../components/adminComponents/AdminBody'

import './AdminDashboard.css'


function AdminDashboard() {

//   const [items,setItems] = useState([]);
// const [error,setError] = useState(null);

//   useEffect(()=>{
//     const fetchItems = async ()=>{
//         try {
//             const response = await axios.get('http://localhost:3000/menu/');
//             console.log(response);
//             if(!response.ok){
//                 throw new Error('Network response was not ok')
//             }
//             const data = await response.json();
           
//             setItems(data.result.items)

//         } catch (error) {
//             setError(error.message)
//         }
//     }
//     fetchItems();
// },[])

  return (
    <div className='adminPageOuterContainer'>
      <AdminNav />
      <AdminBody />

    </div>
  )
}

export default AdminDashboard