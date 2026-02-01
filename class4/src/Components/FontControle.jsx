import React, { use, useState } from "react";

const FontControle = () => {
  const [num, setNum] = useState(10);

  const increFont = () => {
    if (num < 60) {
      setNum(num + 2);
    }
  };

  const decreFont = () => {
    if (num > 10) {
      setNum(num - 2);
    }
  };

  return (
    <div>
      <div className="h-60 w-80 bg-red-300 flex flex-col items-center justify-center gap-5">
        <h1 style={{ fontSize: num + "px" }}>Hello</h1>

        <div>
          <button
            onClick={increFont}
            className="px-3 py-1 bg-green-300 rounded mx-1"
          >
            A+
          </button>
          <button
            onClick={decreFont}
            className="px-3 py-1 bg-green-300 rounded mx-1"
          >
            A-
          </button>
        </div>
      </div>
    </div>
  );
};

export default FontControle;
