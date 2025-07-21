import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Searchbtn from './Searchbtn.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Searchbtn/> */}
  </StrictMode>,
)
