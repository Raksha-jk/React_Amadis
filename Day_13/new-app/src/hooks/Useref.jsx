import React, { useState, useRef } from "react";

function Useref() {
  const [stateCount, setStateCount] = useState(0); // tracked by UI
  const refCount = useRef(0);                      // hidden from UI until displayed

  const handleStateIncrement = () => {
    setStateCount(stateCount + 1);
  };

  const handleRefIncrement = () => {
    refCount.current += 1;
    console.log( refCount.current);
    
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2> useState vs useRef Demo</h2>

      <p><strong>useState Count:</strong> {stateCount}</p>
      <button onClick={handleStateIncrement}>Increment State</button>

      <br /><br />

      <p><strong>useRef Count:</strong> {refCount.current}</p>
      <button onClick={handleRefIncrement}>Increment Ref</button>
    </div>
  );
}

export default Useref;
