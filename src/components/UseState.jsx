import React, { useState } from "react";

const UseState = () => {
  {
    /* use state with validation where if value =0 then functio return setvalue will not worked*/
  }
  const [value, SetValue] = useState(0);
  function handledecriment() {
    if (value === 0) return;
    SetValue(value - 1);
  }
  
  function handleIncrement() {
    SetValue(value + 1);
  }
  return (
    <div className="flex flex-row">
      <div>
        <button
          className="border border-gray-500 bg-blue-950 "
          onClick={handledecriment}> Decriment

          </button>
            <p>{value}</p>
            <button className="border border-gray-400 bg-amber-500" onClick={handleIncrement}>Increment</button>
      </div>
      
        
    </div>
  );
};

export default UseState;
