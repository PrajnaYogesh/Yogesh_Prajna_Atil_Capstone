import React,{useState,useEffect} from 'react'
import './MenuPage.css'
import axios from 'axios';


function MenuPage() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [activeType, setActiveType] = useState('drinks'); // Default to drinks
  const [cartId, setCartId] = useState(localStorage.getItem('cartId') || ''); // Retrieve from localStorage
  const [quantities, setQuantities] = useState({}); // Track quantities of each item

  useEffect(() => {
    const fetchItems = async (type) => {
      // http://localhost:3000/menu/items/main course
      const response = await axios.get(`http://localhost:3000/menu/items/${type}`); // Fetch based on type
      // const data = await response.json();
      // setItems(data);
      // console.log("response is hereeeee")
            // console.log(response);
                    //  console.log(response.data.result);
           setItems(response.data.result)
      setFilteredItems(response.data.result); // Initialize with the default type
    };
    fetchItems(activeType); // Fetch drinks by default
  }, []);


  //creating a new cart in backend
  useEffect(() => {
    const createCart = async () => {
      const response = await axios.post('http://localhost:3000/cart/carts');
      // const data = await response.json();
      console.log('cart response is')
      console.log(response.data.cartId);
          
      // console.log(response.data.result)
      const newCartId = response.data.cartId;
      setCartId(newCartId);
      localStorage.setItem('cartId', newCartId); // Store cartId in localStorage
    };
    if (!cartId) {
      createCart(); // Only create a new cart if there isn't one already
    }
  }, []);


  const addToCart = async (itemName, quantity, pricePerItem) => {
    if (!cartId  || quantity <= 0) return;
    try {
      console.log("before calling post")
      await axios.post(`http://localhost:3000/cart/carts/${cartId}/items`, {
        itemName,
        quantity,
        pricePerItem,
      });
      console.log("after adding 1 item")
      alert(`${itemName} added to cart!`);
      setQuantities(prev => ({ ...prev, [itemName]: 0 }));
    } catch (error) {
      console.error('Error adding item to cart', error);
    }
  };

  const handleQuantityChange = (itemName, change) => {
    setQuantities(prev => ({
      ...prev,
      [itemName]: Math.max(0, (prev[itemName] || 0) + change), // Prevent negative quantities
    }));
  };



  const handleFilter = async (type) => {
    setActiveType(type);
    const response = await axios.get(`http://localhost:3000/menu/items/${type}`);
    // const data = await response.json();
    console.log("response is")
    console.log(response);
             console.log(response.data.result);

    setFilteredItems(response.data.result);
  };

  return (
    <div className='menuOuterContainer'>
<div className="menuButtonsContainer">
<button className='cust-menuBtn' onClick={() => handleFilter('drinks')}>Drinks</button>
<button className='cust-menuBtn' onClick={() => handleFilter('main course')}>Main Course</button>
<button className='cust-menuBtn' onClick={() => handleFilter('dessert')} >Dessert</button>
</div>

<div className="eachItemsOuterContainer">

<h3 className='menuHeadingStyle'>{activeType.charAt(0).toUpperCase() + activeType.slice(1)} Menu</h3>
       
       
       
        <div className='menuContainer'>
          {filteredItems.map(item => (
            <div className='eachItemContainer' key={item._id}>
              <img  className="itemImageStyle" src={item.itemImage.url} alt="" />
              
              <div className="itemDetils">
              <p>{item.itemName}</p> 
              <p>{item.itemDescription}</p> 
              <p>{item.price}</p>

<div className="addToCart">
 
  
  <div className="plusMinus">
  <button className='add-clickBtn'onClick={() => handleQuantityChange(item.itemName, -1)} > - </button>
  <span className='spanStyle'>{quantities[item.itemName] || 0}</span>
  <button className='add-clickBtn' onClick={() => handleQuantityChange(item.itemName, 1)}> + </button>
  </div>
  <button className='add-clickBtn' onClick={() => addToCart(item.itemName, quantities[item.itemName] || 0, item.price)}>Add To Cart</button>

</div>

              </div>
           

              </div> // Adjust properties as necessary
          ))}
        </div>


</div>


    </div>


  )
}

export default MenuPage