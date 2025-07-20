import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';
export default function Navbar() {
    const { cart } = useContext(CartContext);
    const totalQty = cart.reduce((total, item) => total + item.qty, 0);
  return (
    <>
    <nav className="navbar">
      <ul className="nav-links">
        <li type="none"><Link to='/home'>Home</Link></li>
        <li type="none"><Link to='/product'>Products</Link></li>
        <li type="none"><Link to='/cart'>Cart ({totalQty})</Link></li>
      </ul>
    </nav>

    </>
  );
}
