import React, { useEffect, useState } from "react";
import format from "date-fns/format";
import PrimeCalculcator from "./PrimeCalculcator";
import "./App.css";
function Clock({ count }) {
  console.log("re-rendered clock component");
  const time = useTime();

  return (
    <div className="clockComponent">
      <div> {format(time, "hh:mm:ss a")}</div>
      <PrimeCalculcator />
    </div>
  );
}

function useTime() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return time;
}
export default Clock;
