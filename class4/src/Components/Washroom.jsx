import React, { useState } from "react";

const Washroom = () => {
  const [gender, setgender] = useState("Male");

  const bgColor =
    gender === "Male"
      ? "bg-blue-500"
      : gender === "Female"
        ? "bg-pink-800"
        : "";

  const bgStyle =
    gender === "Other" ? { background:"conic-gradient(red,yellow,lime,aqua,blue,magenta)"}: {};

const textColor = gender==="Other"?"color:red":""

  const changeGender = () => {
    if (gender === "Male") {
      setgender("Female");
    } else if (gender === "Female") {
      setgender("Other");
    } else {
      setgender("Male");
    }
  };

  return (
    <div className="mx-10">
      <h1 className=" text-4xl">{gender}</h1>

      <div
        className={`text-3xl  flex items-center justify-center h-40 w-40 ${bgColor} `} style={bgStyle}
      >{`${gender} Washroom`}</div>


      <button onClick={changeGender} className="px-3 py-2 bg-green-300">
        Go to Washroom{" "}
      </button>
    </div>
  );
};

export default Washroom;
