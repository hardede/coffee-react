import React, { useState } from "react";

const Card = ({ id, name, price, imgUrl, onPlus }) => {
  const [counter, setCounter] = useState(1);

  const increment = () => setCounter((prev) => Math.min(prev + 1, 9));
  const decrement = () => setCounter((prev) => Math.max(prev - 1, 1));

  const handleClickCart = () => {
    onPlus({ id, name, price, imgUrl, counter });
    setCounter(1);
  };

  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <img className="mx-auto h-44 object-contain" src={imgUrl} alt={name} />
      <div className="mt-3 text-xl font-bold">$ {price}</div>
      <div className="mt-1 font-semibold">{name}</div>
      <p className="mt-2 text-sm text-gray-600">Coffee that’s always the way you like.</p>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="rounded border px-2" onClick={decrement}>-</button>
          <span>{counter}</span>
          <button className="rounded border px-2" onClick={increment}>+</button>
        </div>
        <button className="rounded bg-[#ff4b32] px-4 py-2 text-white" onClick={handleClickCart}>Add To Cart</button>
      </div>
    </div>
  );
};

export default Card;
