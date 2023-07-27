import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from "./pages/home"
import Navigation from "./Components/Navigation"
import Products from './pages/Products'
import Cart from './Components/Cart'
import { CartProvider } from './CartContext';
import { useState } from 'react'
import { useEffect } from 'react'
function App(){
  const[cart,setCart] =useState({});
  //fetch from local storage
  useEffect(()=>{
   const cart=window.localStorage.getItem('cart');
   
},[]);
    return (
    <>
     <CartProvider>
    <Router>
   
       <Navigation/>
        <Routes>
         <Route path="/CraveFusion" Component={Home}></Route>
         <Route path="/products" Component={Products}></Route>
         <Route path="/cart" Component={Cart}></Route>
         </Routes>
       
    </Router>
    </CartProvider>
    </>
    )
}
export default App;