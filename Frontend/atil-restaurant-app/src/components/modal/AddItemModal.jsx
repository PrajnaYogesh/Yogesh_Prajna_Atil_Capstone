import React, { useState } from 'react'
import axios from 'axios'
import './AddItemModal.css'
import { getItem , KEY_ACCESS_TOKEN} from '../../utils/localStorageManager';
import { useNavigate } from "react-router-dom";

// 
// function AddItemModal({onClose, onItemAdded}) {
  function AddItemModal({onClose}) {

    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('drinks');
    const [type, setType] = useState('veg');
    const [itemImage, setItemImage] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const accessToken = getItem(KEY_ACCESS_TOKEN);
        const formData = new FormData();
        formData.append('itemName', itemName);
    formData.append('itemDescription', itemDescription);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('type', type);
    formData.append('itemImage', itemImage);

    try {
        const response = await axios.post('http://localhost:3000/menu/create', formData, {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'multipart/form-data', // Important for file uploads
          },
        });
        // console.log(response.data.result)
        // onItemAdded(response.data.result); // Assuming the backend returns the new item\
        onClose(); 
       
        navigate("/admin/dashboard", { replace: true });
             //   if (response.data.result) {
      //     onItemAdded(response.data.result); // Pass the new item to the parent
      //     onClose(); // Close the modal only after successfully adding the item
      //     navigate("/admin/dashboard", { replace: true });
      // }

    }
    catch(error){
        console.error('Error adding item:', error);
    }

    }



  return (
    <div className="modal-overlay">
<div className="modal-content">
<h2>Add Menu Item</h2>
<form onSubmit={handleSubmit}>

<label>Item Name</label>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />

<label>Item Description</label>
          <textarea
            value={itemDescription}
            onChange={(e) => setItemDescription(e.target.value)}
            required
          />

<label>Price</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

<label>Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="drinks">Drinks</option>
            <option value="main course">Main Course</option>
            <option value="dessert">Dessert</option>
          </select>

          <label>Type</label>
          <select value={type} onChange={(e) => setType(e.target.value)} required>
            <option value="veg">Veg</option>
            <option value="nonveg">Non-Veg</option>
            <option value="vegan">Vegan</option>
            <option value="nonalcoholic">Non-Alcoholic</option>
          </select>

          <label>Item Image</label>
          <input
            type="file"
            onChange={(e) => setItemImage(e.target.files[0])}
            required
          />

<button className='cnfrmBtn' type="submit">Save</button>
          <button className='cnfrmBtn' type="button" onClick={onClose}>Cancel</button>
</form>
</div>
    </div>
  )
}

export default AddItemModal