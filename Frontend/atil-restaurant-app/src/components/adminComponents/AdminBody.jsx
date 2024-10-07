import React, { useEffect, useState } from 'react'
import './AdminBody.css'
import axios from 'axios';

function AdminBody() {
//fetch all the items on page load

const [items,setItems] = useState([]);
const [error,setError] = useState(null);


useEffect(()=>{
    const fetchItems = async ()=>{
        try {
            const response = await axios.get('http://localhost:3000/menu/');
            console.log("response is")
            console.log(response);
        //   const data = await response.json();
            console.log("data is")
           console.log(response.data.result);
           setItems(response.data.result)
console.log(items)
        } catch (error) {
            setError(error.message)
        }
    }
    fetchItems();
},[])


//useEffect that is called on any state change
useEffect(() => {
    if (items.length > 0) {
      console.log("items present ");
    }
  }, [items]);

  return (
    <div className='adminbodyOuterContainer'>
<div className="addOuterContainer">
<button className='clickBtn' >Add Item</button>
</div>


<ul className="itemsOuterContainer">

{
    items.map((item) => (
<li key={item._id}>{item.itemName}
<button>Edit</button>
<button>Delete</button>
</li>
    ))
}

</ul>


    </div>
  )
}


export default AdminBody