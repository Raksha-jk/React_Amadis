<<<<<<< HEAD
// import Tasklist from './Components/Tasklist';
import logo from './logo.svg';
//import './App.css';
import {useState} from 'react';

function App() {
  const [task,setTask]=useState("");
  const [todos,settodos]=useState([]);
  function handled(e){
    e.preventDefault();
    settodos((currenttodos)=>{
      return [...currenttodos,]
  })
  }
  console.log(todos);
  return (
    <>
    <form onSubmit={handled}>
      <h1>Task Tracker</h1>
      <input value={task} onChange={(e)=>setTask(e.target.value)} type='text'></input>
      <button type='submit'>Add Task</button>
    </form>
    <h2>To Do list</h2>
    <ul>
      <li type='none'>
        <label>
          <input value={task} type='checkbox'></input>
          <span>Task 1</span>
        </label>
        <button>Remove</button>
      </li>
      <li type='none'>
        <label>
          <input type='checkbox'></input>
          <span>Task 2</span>
        </label>
        <button>Remove</button>
      </li>
      <li type='none'>
        <label>
          <input type='checkbox'></input>
          <span>Task 3</span>
        </label>
        <button>Remove</button>
      </li>
    </ul>
    </>
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> 92ce53efaf7f020661270c762b6a0e059de0f9a1
  );
}

export default App;
