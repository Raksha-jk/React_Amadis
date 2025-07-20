import { useContext } from "react";
import { UserContext } from "./UseContext";
export default function Child() {
  const {user,id} = useContext(UserContext);

  return (
    <div>
      <h4>Child Component</h4>
      <p>Welcome, {user}!</p>
    </div>
  );
}