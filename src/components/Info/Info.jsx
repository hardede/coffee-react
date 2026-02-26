import React from "react";

const Info = ({ title, description, cartImg, onHandleClose }) => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
      <img src={cartImg} width={120} alt="status" />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <button className="mt-3 rounded bg-[#ff4b32] px-4 py-2 text-white" onClick={onHandleClose}>Вернуться назад</button>
    </div>
  );
};

export default Info;
