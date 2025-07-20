import React, { useId } from "react";

function Useid() {
  const id = useId();

  return (
    <div style={{ textAlign: "center" }}>
      <label htmlFor={id}>Enter your name:</label>
      <br />
      <input id={id} type="text" placeholder="Raksha J" />
    </div>
  );
}
export default Useid;
