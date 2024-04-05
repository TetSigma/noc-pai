import React, { useState, useEffect } from 'react';

function CartItems() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function fetchCart() {
      try {
        const response = await fetch('https://dummyjson.com/carts/user/5');
        const data = await response.json();
        setCart(data.carts[0].products);
      } catch (error) {
        console.log('Error fetching cart: ', error);
      }
    }

    fetchCart();
  }, []);

  console.log(cart); 

  return (
    <div style={{display:'flex', displayDirection:'row', alignItems:'center', gap:5, justifyContent:'center'}}>
      {cart.map((product, index) => ( 
        <div style={{display:'flex', flexDirection:'column', }} key={index}>
          <img style={{width:300, height:300}}src={product.thumbnail}></img>
          <div>
            {product.title}
          </div>
          <div>
            {product.price}$
          </div>
          <div>
           Quantity: {product.quantity}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartItems;
