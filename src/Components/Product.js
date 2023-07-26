import React from 'react'
import { useContext  } from 'react';
import { CartContext } from '../CartContext';

const Product = () => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (productName,size, price) => {
    // Call the addToCart function from CartContext to add the product to the cart
    addToCart({ name: productName,size:size, price: price });
  };
  return (
    <div className="container mx-auto pb-2">
      <h1 className="text-lg font-bold my-8">Products </h1>
      <div className="grid grid-cols-4 my-8 gap-24">
        <div>
          <img src="/images/1.png" alt="Pizza" />
          <div className="text-center">
            <h2 className="text-lg font-bold py-2">Pepperoni Special</h2>
            <span className="bg-gray-200 py-1 rounded-full text-sn px-4">
              Small
            </span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span>Rs. 500</span>
            <button  onClick={() => handleAddToCart('Pepperoni Special','small', 500)} className="bg-yellow-500 py-1 px-4 rounded-full font-bold hover:bg-yellow-600">
              Add
            </button>
          </div>
        </div>

        <div>
        <img src='/images/10.png' alt='Pizza'/>
        <div className='text-center'>
     <h2 className='text-lg font-bold py-2'>Extra Cheese</h2>
     <span className='bg-gray-200 py-1 rounded-full text-sn px-4'>Medium</span>
     </div>
     <div className='flex justify-between items-center mt-4'>
      <span>Rs. 1300</span>
      <button onClick={() => handleAddToCart('Extra Cheese','Medium', 1300)} className='bg-yellow-500 py-1 px-4 rounded-full font-bold hover:bg-yellow-600'>Add</button>
     </div>
    </div>

    <div>
        <img src='/images/3.png' alt='Pizza'/>
        <div className='text-center'>
     <h2 className='text-lg font-bold py-2'>Fajita Special</h2>
     <span className='bg-gray-200 py-1 rounded-full text-sn px-4'>Large</span>
     </div>
     <div className='flex justify-between items-center mt-4'>
      <span>Rs. 2000</span>
      <button onClick={() => handleAddToCart('Fajita Special','Large', 2000)}className='bg-yellow-500 py-1 px-4 rounded-full font-bold hover:bg-yellow-600'>Add</button>
     </div>
    </div>

    <div>
        <img src='/images/4.png' alt='Pizza'/>
        <div className='text-center'>
     <h2 className='text-lg font-bold py-2'>Tikka Special</h2>
     <span className='bg-gray-200 py-1 rounded-full text-sn px-4'>Small</span>
     </div>
     <div className='flex justify-between items-center mt-4'>
      <span>Rs. 500</span>
      <button onClick={() => handleAddToCart('Tikka Specail','Small', 500)}className='bg-yellow-500 py-1 px-4 rounded-full font-bold hover:bg-yellow-600'>Add</button>
     </div>
    </div>

    <div>
        <img src='/images/5.png' alt='Pizza'/>
        <div className='text-center'>
     <h2 className='text-lg font-bold py-2'>BBQ Chicken</h2>
     <span className='bg-gray-200 py-1 rounded-full text-sn px-4'>Small</span>
     </div>
     <div className='flex justify-between items-center mt-4'>
      <span>Rs. 600</span>
      <button onClick={() => handleAddToCart('BBQ Chicken','Small', 600)}className='bg-yellow-500 py-1 px-4 rounded-full font-bold hover:bg-yellow-600'>Add</button>
     </div>
    </div>

    <div>
        <img src='/images/6.png' alt='Pizza'/>
        <div className='text-center'>
     <h2 className='text-lg font-bold py-2'>Meat</h2>
     <span className='bg-gray-200 py-1 rounded-full text-sn px-4'>Medium</span>
     </div>
     <div className='flex justify-between items-center mt-4'>
      <span>Rs. 1500</span>
      <button onClick={() => handleAddToCart('meat','Medium', 1500)}className='bg-yellow-500 py-1 px-4 rounded-full font-bold hover:bg-yellow-600'>Add</button>
     </div>
    </div>

    <div>
        <img src='/images/7.png' alt='Pizza'/>
        <div className='text-center'>
     <h2 className='text-lg font-bold py-2'>Veggie</h2>
     <span className='bg-gray-200 py-1 rounded-full text-sn px-4'>Large</span>
     </div>
     <div className='flex justify-between items-center mt-4'>
      <span>Rs. 2000</span>
      <button onClick={() => handleAddToCart('Vegie','Large', 2000)}className='bg-yellow-500 py-1 px-4 rounded-full font-bold hover:bg-yellow-600'>Add</button>
     </div>
    </div>

    <div>
        <img src='/images/8.png' alt='Pizza'/>
        <div className='text-center'>
     <h2 className='text-lg font-bold py-2'>Extra Spice</h2>
     <span className='bg-gray-200 py-1 rounded-full text-sn px-4'>Medium</span>
     </div>
     <div className='flex justify-between items-center mt-4'>
      <span>Rs. 1200</span>
      <button onClick={() => handleAddToCart('Extra Spice','Medium', 1200)}className='bg-yellow-500 py-1 px-4 rounded-full font-bold hover:bg-yellow-600'>Add</button>
     </div>
    </div>
      </div>
    </div>
  
  );
}

export default Product;
