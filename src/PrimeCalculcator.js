import React, { useState, useMemo, useCallback } from "react";
import Footer from "./Footer";
import Increment from "./Increment";
import "./App.css";

function PrimeCalculcator() {
  console.log("re-rendered prime");
  const [selectedNum, setSelectedNum] = useState(0);
  const [count, setCount] = useState(0);

  const isPrime = (n) => {
    const max = Math.ceil(Math.sqrt(n));
    if (n === 2) {
      return true;
    }
    for (let i = 2; i <= max; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };
  const allPrimes = useMemo(() => {
    console.log("re-calculated prime");
    const result = [];
    for (let i = 2; i < selectedNum; i++) {
      if (isPrime(i)) {
        result.push(i);
      }
    }
    return result;
  }, [selectedNum]);

  const handleIncrement = useCallback(() => {
    console.log("recalculated increment");
    setCount((count) => count + 1);
  }, []);
  return (
    <div className="primeCaluclator">
      <p>Your Number here</p>
      <input
        type="Number"
        onChange={(e) => {
          setSelectedNum(e.target.value);
        }}
      />
      <div>Prime numbers are - {allPrimes.join(", ")}</div>
      <div>{count}</div>
      <Increment handleClick={handleIncrement} />
      <Footer />
    </div>
  );
}

export default React.memo(PrimeCalculcator);
