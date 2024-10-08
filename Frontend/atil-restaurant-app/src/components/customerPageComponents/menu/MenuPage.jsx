import React,{useState,useEffect} from 'react'
import './MenuPage.css'
import axios from 'axios';


function MenuPage() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [activeType, setActiveType] = useState('drinks'); // Default to drinks

  useEffect(() => {
    const fetchItems = async (type) => {
      // http://localhost:3000/menu/items/main course
      const response = await axios.get(`http://localhost:3000/menu/items/${type}`); // Fetch based on type
      // const data = await response.json();
      // setItems(data);
      console.log("response is")
            console.log(response);
                     console.log(response.data.result);
           setItems(response.data.result)
      setFilteredItems(response.data.result); // Initialize with the default type
    };
    fetchItems(activeType); // Fetch drinks by default
  }, []);



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
  <button>Add To Cart</button>
  
  <div className="plusMinus">
  <button> - </button>
  <span>1</span>
  <button> + </button>
  </div>
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