import Child from "./Child";
import {useContext} from 'react';
import {UserContext} from './UseContext'
export default function Parent() {
    const {user,id}=useContext(UserContext);
  return (
    <div>
      <h3>Parent Component</h3>
      <h6>Hi {user},{id}</h6>
      <Child />
    </div>
  );
}