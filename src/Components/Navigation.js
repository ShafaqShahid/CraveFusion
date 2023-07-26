import {Link} from "react-router-dom"
const Navigation = () => {
  const cartSyle={
    background:'#ec8c34',
    display:'flex',
    height:'45',
    padding:'6px 12px',
    borderRadius:'50px'
  }
  return (
    <>
<nav className="container mx-auto flex items-center justify-between py-4">           
            <Link to="/">
              <img style={{height:60}} src="/images/logo.png" alt="logo"/>
            </Link>
            <ul className="flex items-center"> 
              <li><Link to="/" style={{ color: '#ea8d35' }}>Home</Link></li>
              <li className="ml-6"><Link to="/products" style={{ color: '#ea8d35' }}>Products</Link></li>
              <li className="ml-6"><Link to="/cart  " style={{ color: '#f4ebcb' }}>
                <div style={cartSyle}>
                  <span >Cart</span>
                  <img className="ml-2" style={{height:25}} src="/images/cart.png" alt="cart-icon"/>
                </div>
                </Link></li>
             </ul>
       </nav>
    </>
  )
}

export default Navigation
