import React, { useState } from "react";

const Calculator = () => {
  const [num, setnum] = useState(0);

  const IncrementByOne = () => {
    setnum(num + 1);
  };

  const IncrementByFive = () => {
    setnum(num + 5);
  };

  const DecrementByOne = () => {
    setnum(num - 1);
  };

  const DecrementByFive = () => {
    setnum(num - 5);
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-4xl">{num}</h1>
      <div>
        <button
          onClick={IncrementByOne}
          className="px-3 py-1 bg-green-300 mx-1"
        >
          Incremnet
        </button>
        <button
          onClick={DecrementByOne}
          className="px-3 py-1 bg-green-300 mx-1"
        >
          Decremnet
        </button>
        <button
          onClick={IncrementByFive}
          className="px-3 py-1 bg-green-300 mx-1"
        >
          IncrementByFive
        </button>
        <button
          onClick={DecrementByFive}
          className="px-3 py-1 bg-green-300 mx-1"
        >
          DcrementByFive
        </button>
      </div>
    </div>
  );
};

export default Calculator;
