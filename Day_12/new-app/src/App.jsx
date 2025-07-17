import List from'./Components/List';
import Router from './Components/Router'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App(){
  return(
    <>
      <List/>
      <Router/>
    </>
  )
}
export default App;