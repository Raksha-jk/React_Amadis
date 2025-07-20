import Home from './Home';
import About from './About'
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
function Router(){
  return(
    <>
    <BrowserRouter>
      <ul>
        <li>
          <Link to='/home'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
      <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default Router;