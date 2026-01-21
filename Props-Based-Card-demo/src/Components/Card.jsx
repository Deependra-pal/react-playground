import React from "react";

const Card = (props) => {
  console.log(props);
  
  return (
    <div className="w-[280px] h-[250px] bg-white rounded-2xl shadow-xl p-5 text-center">
      {/* Image */}
      <img
        src={props.user.image}
        alt="profile"
        className="w-20 h-20 rounded-full mx-auto object-cover"
      />

      {/* Name */}
      <h2 className="text-xl font-semibold text-gray-900 mt-4">
         {props.user.name}
      </h2>

      {/* Profession */}
      <p className="text-gray-500 text-sm mt-1">
         {props.user.profession}
      </p>

      {/* Hobbies */}
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        <span className="px-3 py-1 text-xs bg-gray-100 rounded-full">
          {props.user.hobbies[0]}
        </span>
        <span className="px-3 py-1 text-xs bg-gray-100 rounded-full">
          {props.user.hobbies[1]}
        </span>
        <span className="px-3 py-1 text-xs bg-gray-100 rounded-full">
          {props.user.hobbies[2]}
        </span>
      </div>
    </div>
  );
};

export default Card;



