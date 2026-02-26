import React from "react";
import { Link } from "react-router-dom";

const Info = ({ title, description, cartImg, onHandleClose, actionLink, actionText }) => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
      <img src={cartImg} width={120} alt="status" />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      {actionLink && actionText && (
        <Link className="mt-3 rounded border border-[#ff4b32] px-4 py-2 text-[#ff4b32]" to={actionLink} onClick={onHandleClose}>
          {actionText}
        </Link>
      )}
      <button className="mt-3 rounded bg-[#ff4b32] px-4 py-2 text-white" onClick={onHandleClose}>Вернуться назад</button>
    </div>
  );
};

export default Info;
