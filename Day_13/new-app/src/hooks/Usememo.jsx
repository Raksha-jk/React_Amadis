import React, { useState, useMemo } from "react";

export default function Factorial() {
  const [number, setNumber] = useState(1);
  const [text, setText] = useState("");

  const factorial = (n) => {
    console.log("Calculating factorial...");
    if (n <= 0) return 1;
    return n * factorial(n - 1);
  };
  const fact = useMemo(() => factorial(number), [number]);
//   const fact=factorial(number);
  return (
    <>
      <h2>Factorial Calculator</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <p>Factorial: {fact}</p>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Try typing here!"
      />
      <p>You typed: {text}</p>
    </>
  );
}

