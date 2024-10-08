import React, { useEffect, useState } from 'react'
import './AdminBody.css'
import axios from 'axios';
import AddItemModal from '../modal/AddItemModal';

function AdminBody() {
//fetch all the items on page load

const [items,setItems] = useState([]);
const [error,setError] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);


//useEffect that is called on any state change
useEffect(() => {
    if (items.length > 0) {
        console.log("Items updated:", items);
    }
  }, [items]);

useEffect(()=>{
    const fetchItems = async ()=>{
        try {
            const response = await axios.get('http://localhost:3000/menu/');
            console.log("response is")
            console.log(response);
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

const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };




  return (
    <div className='adminbodyOuterContainer'>
<div className="addOuterContainer">
<button className='clickBtn' onClick={() => setIsModalOpen(true)} >Add Item</button>
</div>

{isModalOpen && (
        <AddItemModal 
          onClose={() => setIsModalOpen(false)} 
          onItemAdded={handleAddItem} 
        />
      )}

<div className="itemsOuterContainer">
{
    items.map((item) => (
<div className='eachItem' key={item._id}>
    <p className='pstyle'>{item.itemName}</p> 
    <p className='twinbtn'>
<button className='twinBtnStyl'>Edit</button>
<button className='twinBtnStyl'>Delete</button>
</p>
</div>
    ))
}

</div>


    </div>
  )
}


export default AdminBody