import React, { useEffect, useState } from 'react'
import './AdminBody.css'
import axios from 'axios';
import AddItemModal from '../modal/AddItemModal';
import EditItemModal from '../modal/EditItemModal';

function AdminBody() {
//fetch all the items on page load

const [items,setItems] = useState([]);
const [error,setError] = useState(null);
// const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedItem, setSelectedItem] = useState(null);
const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);




useEffect(()=>{
    const fetchItems = async ()=>{
        try {
            const response = await axios.get('http://localhost:3000/menu/');
            console.log("response is")
            console.log(response);
                     console.log(response.data.result);
           setItems(response.data.result)

        } catch (error) {
            setError(error.message)
        }
    }
    fetchItems();
},[])


// const fetchItems = async () => {
//     try {
//         const response = await axios.get('http://localhost:3000/menu/');
//         setItems(response.data.result);
//     } catch (error) {
//         setError(error.message);
//     }
// };

// const handleAddItem = async(newItem) => {
//     setItems((prevItems) => [...prevItems, newItem]);
//     setIsAddModalOpen(false);
//     // await fetchItems();
//   };



  const handleEditItemClick = async(item) => {
    setSelectedItem(item);
    setIsEditModalOpen(true);
};

const handleItemUpdated = (updatedItem) => {
    setItems((prevItems) =>
        prevItems.map((item) => (item._id === updatedItem?.item._id ? updatedItem : item))
    );
    setIsEditModalOpen(false); // Close modal after editing
};


const handleDeleteItem = async (id) => {
    const confirmDelete = window.confirm("Do you really want to delete this item?");
    if (confirmDelete) {
        try {
            await axios.delete(`http://localhost:3000/menu/delete/${id}`);
            setItems((prevItems) => prevItems.filter(item => item._id !== id));
        } catch (error) {
            console.error("Error deleting item:", error);
            setError("Could not delete the item.");
        }
    }
};


  //useEffect that is called on any state change
useEffect(() => {
    if (items.length > 0) {
        console.log("Items updated:", items);
    }
  }, [items]);


  return (
    <div className='adminbodyOuterContainer'>
<div className="addOuterContainer">
<button className='clickBtn' onClick={() =>setIsAddModalOpen(true)} >Add Item</button>
</div>

{isAddModalOpen && (
        <AddItemModal 
          onClose={() => setIsAddModalOpen(false)}
        //   onItemAdded={handleAddItem} 
        />
      )}

{isEditModalOpen && selectedItem && (
                <EditItemModal 
                    item={selectedItem} 
                    onClose={() => setIsEditModalOpen(false)}
                    onItemUpdated={handleItemUpdated} 
                />
            )}


<div className="itemsOuterContainer">
{
    items.map((item) => (
<div className='eachItem' key={item._id}>
    <p className='pstyle'>{item.itemName}</p> 
    <p className='twinbtn'>
<button className='twinBtnStyl' onClick={() => handleEditItemClick(item)}  >Edit</button>
<button className='twinBtnStyl' onClick={() => handleDeleteItem(item._id)} >Delete</button>
</p>
</div>
    ))
}

</div>


    </div>
  )
}


export default AdminBody