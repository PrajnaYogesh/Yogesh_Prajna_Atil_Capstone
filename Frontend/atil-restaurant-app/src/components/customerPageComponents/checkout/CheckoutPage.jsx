import React, { useEffect, useState } from 'react'
import './CheckoutPage.css'
import './CheckoutPage.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CheckoutPage() {

  const [cart, setCart] = useState(null);
  const cartId = localStorage.getItem('cartId') || '';
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
    try {
      console.log(cartId);
      const response = await axios.get(`http://localhost:3000/cart/carts/${cartId}`);
      console.log('items from the cart is',response)
      setCart(response.data);
    } catch (error) {
      console.error('Error fetching cart:', error);
    }  
     
    };

    fetchCart();
  }, [cartId]);

  const handleCheckout = async () => {
try {
  await axios.post(`http://localhost:3000/cart/carts/${cartId}/checkout`);
  alert('Payment successful'); // Show success message
  navigate('/'); // Navigate to home page
} catch (error) {
  console.error('Checkout failed:', error);
        alert('Checkout failed. Please try again.');
} 
  };

  if (!cart) return <div>Loading...</div>;

  return (
    <div className='cartOuterContainer'>
      <div className="cartInnerContainer">
      <h2 className='checkoutHeading'>Checkout Cart</h2>
      {cart.items.map((item, index) => (
        <div className='itemCheckoutList' key={index}>
          <p>{item.itemName}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Price: {item.pricePerItem}</p>
        </div>
      ))}
      <h3 className='amount'>Total Amount: {cart.totalAmount}</h3>
      <button className='checkout-btn' onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  )
}

export default CheckoutPage