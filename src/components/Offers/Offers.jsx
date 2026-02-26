import React, { useState } from "react";
import Slider from "react-slick/lib/slider";
import Card from "./Card/Card";

const Offers = ({ items, onAddToCart }) => {
  const [searchInput, setSearchInput] = useState("");

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2, arrows: false, dots: true } },
      { breakpoint: 760, settings: { slidesToShow: 1, arrows: false, dots: true } },
    ],
  };

  return (
    <section id="offers" className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold">That is Our Best Offer</h2>
            <p className="mt-2 text-gray-600">{searchInput ? `Поиск по запросу: "${searchInput}"` : "A coffee shop will help you to tell the audience what your business."}</p>
          </div>
          <input className="w-full rounded border p-3 md:w-72" placeholder="Поиск..." onChange={(e) => setSearchInput(e.target.value)} value={searchInput} />
        </div>
        <Slider {...settings}>
          {items.filter((item) => item.name.toLowerCase().includes(searchInput.toLowerCase())).map((item) => (
            <Card key={item.id} id={item.id} name={item.name} price={item.price} imgUrl={item.imgUrl} onPlus={onAddToCart} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Offers;
