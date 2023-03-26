import React from "react";
function Increment({ handleClick }) {
  console.log("re-rendered increment");
  return (
    <div className="primeOtherfunctionality">
      someother functionality
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
export default React.memo(Increment);
