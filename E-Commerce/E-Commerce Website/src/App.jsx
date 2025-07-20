import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Productlist from './Components/Productlist';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Productlist />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <footer id="footer">
          <p>© The Word Garden Bookstore</p>
      </footer>
    </>
  );
}
