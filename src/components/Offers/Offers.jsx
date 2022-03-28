import React, { useState } from "react";
import Slider from "react-slick/lib/slider";
import Card from "./Card/Card";
import style from "./offers.module.scss";

const Offers = ({ items, onAddToCart }) => {
  const [searchInput, setSearchInput] = useState("");

  const changeInput = (e) => {
    setSearchInput(e.target.value);
  };

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className={style.offers} id="offers">
      <div className={style.container}>
        <div className={style.offers_top}>
          <div className={style.offers_name}>
            <h2 className={style.offers_title}>That is&nbsp;Our Best Offer</h2>
            <p className={style.offers_subtitle}>
              {searchInput
                ? `Поиск по запросу: "${searchInput}"`
                : "A coffee shop will help you to tell the audience what your business."}
            </p>
          </div>
          <div className={style.offers_slide}>
            <input
              className={style.search_input}
              placeholder="Поиск..."
              onChange={changeInput}
              value={searchInput}
            />
          </div>
        </div>

        <Slider {...settings}>
          {items
            .filter((item) =>
              item.name.toLowerCase().includes(searchInput.toLowerCase())
            )
            .map((item) => (
              <Card
                key={item.id}
                id={item.id}
                amount={item.amount}
                name={item.name}
                price={item.price}
                imgUrl={item.imgUrl}
                onPlus={(item) => onAddToCart(item)}
              />
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Offers;
