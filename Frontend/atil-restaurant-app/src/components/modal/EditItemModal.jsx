import React, { useEffect, useState } from 'react'
import './EditItemModal.css'
import axios from 'axios';
import { getItem, KEY_ACCESS_TOKEN } from '../../utils/localStorageManager';

function EditItemModal({item, onClose, onItemUpdated}) {

    const [itemName, setItemName] = useState(item.itemName);
    const [itemDescription, setItemDescription] = useState(item.itemDescription);
    const [price, setPrice] = useState(item.price);
    const [category, setCategory] = useState(item.category);
    const [type, setType] = useState(item.type);
    const [itemImage, setItemImage] = useState(null); // For file upload
    const [error, setError] = useState(null);

    useEffect(() => {
        setItemName(item.itemName);
        setItemDescription(item.itemDescription);
        setPrice(item.price);
        setCategory(item.category);
        setType(item.type);
    }, [item]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const accessToken = getItem(KEY_ACCESS_TOKEN);
        setError(null);

        const formData = new FormData();
        formData.append('_id', item._id);
        formData.append('itemName', itemName);
        formData.append('itemDescription', itemDescription);
        formData.append('price', price);
        formData.append('category', category);
        formData.append('type', type);
        if (itemImage) {
            formData.append('itemImage', itemImage);
        }

        try {
            const response = await axios.put('http://localhost:3000/menu/edit', formData, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data.result)
            onItemUpdated(response.data.result); // Call the parent function to update the item in the list
            onClose(); // Close the modal
            
        } catch (error) {
            console.error('Error updating item:', error);
            setError('Failed to update item. Please try again.');
        }
    }

  return (
    <div className="modalOverlay">
<div className="modalContent">
<h2>Edit Item</h2>
{error && <p className="error-message">{error}</p>}

<form onSubmit={handleSubmit}>

<label> Item Name: <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} required />  </label>
<label>Description:<textarea value={itemDescription} onChange={(e) => setItemDescription(e.target.value)} required /> </label>
<label> Price: <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} required />  </label>

<label> Category: <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                            <option value="drinks">Drinks</option>
                            <option value="main course">Main Course</option>
                            <option value="dessert">Dessert</option>
                        </select>
                    </label>

  <label> Type:<select value={type} onChange={(e) => setType(e.target.value)} required>
                            <option value="veg">Veg</option>
                            <option value="nonveg">Non-Veg</option>
                            <option value="vegan">Vegan</option>
                            <option value="nonalcoholic">Non-Alcoholic</option>
                        </select>
                    </label>     

  <label> Item Image: <input type="file" onChange={(e) => setItemImage(e.target.files[0])} /> </label>                                

  <button type="submit">Save</button>
  <button type="button" onClick={onClose}>Cancel</button>

</form>


</div>



        </div>
  )
}

export default EditItemModal