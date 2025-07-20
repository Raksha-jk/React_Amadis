import React, { createContext} from "react";
import ReactDOM from "react-dom/client";
import Parent from "./Parent";
import Child from "./Child";
export const UserContext = createContext();


export default function UseContext() {
  const user = "Raksha";
  const id=123;

  return (
    <>
    
    <UserContext.Provider value={{user,id}}>
      <h2>Main Page</h2>
      <Parent />
      {/* <Child/> */}
    </UserContext.Provider>
    </>
  );
}
