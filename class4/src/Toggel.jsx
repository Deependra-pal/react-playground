import React, { useState } from "react";

const Toggel = () => {
  const [text, setNum] = useState("Green Signal");

  const onClick = () => {
    if (text === "Green Signal") {
      setNum("Red Signal");
    } else {
      setNum("Green Signal");
    }
  };

  const bgcolor = text === "Green Signal" ? "bg-red-200" : "bg-green-700";

  const btnColor = text === "Green Signal" ? "bg-green-500" : "bg-red-500";

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-5">
        <div className={` rounded h-60 w-80 ${bgcolor}`}></div>

        <button onClick={onClick} className={`px-3 py-1 ${btnColor} `}>
          {text}
        </button>
      </div>
    </div>
  );
};

export default Toggel;
