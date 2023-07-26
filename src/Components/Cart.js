import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext';
const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };
  const handlePlaceOrder = () => {
    // Here you can implement the logic to handle placing the order, e.g., sending data to the backend, etc.
    setOrderPlaced(true);
  };
  return (
    <div className="cart-container">
      <h2 className="mb-4">Cart</h2>
      {cartItems.length === 0 ? (
       <>
       <div style={containerStyle}> <img  src='/images/emptyCart.gif' alt='cart'/></div></>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Size</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.size}</td>
                <td>Rs. {item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {cartItems.length > 0 && (
        <p className="text-center mt-4">
          Total: Rs.{' '}
          {cartItems.reduce((total, item) => total + item.price, 0)}
        </p>
      )}
      {cartItems.length > 0 && !orderPlaced && (
        <div className="text-center">
          <button
            onClick={handlePlaceOrder} style={{ backgroundColor: '#ea8d35' }}
            className="btn btn-lg btn-primary"
          >
            Place Order
          </button>
        </div>
      )}
      {orderPlaced && (
        <div className="alert alert-success mt-4" role="alert">
          Order placed successfully!
        </div>
      )}
     
    </div>
    
  );
};

export default Cart;