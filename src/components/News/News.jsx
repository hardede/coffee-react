import React, { useState } from "react";
import NewsCard from "./NewsCard/NewsCard";
import style from "./news.module.scss";
import Slider from "react-slick/lib/slider";

const News = () => {
  const [newsItems, setNewsItems] = useState([
    {
      id: 0,
      title: "Coffe beans",
      subtitle:
        "These advertising mottos are targeted to the 56% of coffee drinking consumers.",
      imgUrl: "image/news/news1.png",
    },
    {
      id: 1,
      title: "Coffe beans",
      subtitle:
        "These advertising mottos are targeted to the 56% of coffee drinking consumers.",
      imgUrl: "image/news/news2.png",
    },
    {
      id: 2,
      title: "Coffe beans",
      subtitle:
        "These advertising mottos are targeted to the 56% of coffee drinking consumers.",
      imgUrl: "image/news/news3.png",
    },
  ]);

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
    <div className={style.news} id="news">
      <div className={style.container}>
        <div className={style.news_top}>
          <h2 className={style.news_title}>Update News</h2>
          <p className={style.news_subtitle}>
            {
              "A cup ofbrewed coffee represents acontribution of up to 1.8 grams of \nfiber ofthe recommended."
            }
          </p>
        </div>
        <Slider {...settings}>
          {newsItems.map((item, index) => (
            <NewsCard
              key={index}
              id={item.id}
              title={item.title}
              subtitle={item.subtitle}
              imgUrl={item.imgUrl}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default News;
