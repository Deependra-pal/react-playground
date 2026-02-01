import React, { useState } from "react";

const ShowHideText = () => {
  const [text, setText] = useState("show");


// Toggle Function 

  const showBtnText = () => {
    text === "show" ? setText("hide") : setText("show");
  };

  return (
    <div className="flex items-center justify-center">
      <div className="h-60 w-80 bg-violet-400 flex flex-col items-center justify-center gap-5 rounded ">
        <div className="h-10 w-40 text-center ">
          {text === "hide" ? (
            <h1 className="text-3xl font-bold">Hello</h1>
          ) : null}
        </div>

        <button
          onClick={showBtnText}
          className="px-3 py-1 bg-green-300 rounded"
        >
          {text}
        </button>
      </div>
    </div>
  );
};

export default ShowHideText;
