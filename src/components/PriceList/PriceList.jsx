import React, { useEffect, useState } from "react";
import PriceCard from "../PriceCard/PriceCard";

const PriceList = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetch("prices.json")
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);
  return (
    <>
      <h2 className="text-center text-4xl text-white font-bold bg-purple-600 my-6 p-4">
        Awesome Afortable Prices
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-8">
        {prices.map((price) => (
          <PriceCard key={price.id} price={price}></PriceCard>
        ))}
      </div>
    </>
  );
};

export default PriceList;
