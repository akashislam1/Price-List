import React from "react";
import Feature from "../Feature/Feature";

const PriceCard = ({ price }) => {
  return (
    <div className=" shadow-2xl rounded-lg  flex flex-col">
      <div className="mb-5 p-5">
        <h2 className="text-center">
          <span className="text-4xl font-extrabold text-purple-700 ">
            {price.price}
          </span>
          <span className="text-2xl font-bold text-black">/mon</span>
        </h2>
        <h3 className="text-center text-3xl my-3 font-bold text-purple-600">
          {price.name}
        </h3>
        <p className="text-xl font-bold">Features : </p>
        {price.features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
      </div>
      <div className="mt-auto ">
        <button className="bg-purple-600 py-2 w-full hover:bg-purple-800 rounded-lg text-white font-semibold">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
