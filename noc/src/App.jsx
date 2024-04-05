import React from 'react';
import CartItems from './components/CartItem';



const App = () => {
  return (
    <div style={{justifyContent:'center', alignItems:'center', textAlign:'center', width:'100%'}}>
      <h1>Shopping Cart</h1>
      <CartItems />
    </div>
  );
};

export default App;
