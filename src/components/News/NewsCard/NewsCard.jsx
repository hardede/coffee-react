import React from "react";

const NewsCard = ({ title, subtitle, imgUrl }) => (
  <div className="px-2">
    <article className="rounded-xl bg-white p-4 shadow">
      <img className="mb-4 w-full rounded-lg" src={imgUrl} alt={title} />
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-gray-600">{subtitle}</p>
    </article>
  </div>
);

export default NewsCard;
