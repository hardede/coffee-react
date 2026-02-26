import React, { useState } from "react";
import Slider from "react-slick/lib/slider";
import NewsCard from "./NewsCard/NewsCard";

const News = () => {
  const [newsItems] = useState([
    { id: 0, title: "Coffee beans", subtitle: "These advertising mottos are targeted to the coffee drinking consumers.", imgUrl: "image/news/news1.png" },
    { id: 1, title: "Coffee beans", subtitle: "These advertising mottos are targeted to the coffee drinking consumers.", imgUrl: "image/news/news2.png" },
    { id: 2, title: "Coffee beans", subtitle: "These advertising mottos are targeted to the coffee drinking consumers.", imgUrl: "image/news/news3.png" },
  ]);

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
    <section id="news" className="bg-[#fff6f2] px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Update News</h2>
          <p className="mt-2 text-gray-600">A cup of brewed coffee contributes up to 1.8 grams of fiber.</p>
        </div>
        <Slider {...settings}>{newsItems.map((item) => <NewsCard key={item.id} {...item} />)}</Slider>
      </div>
    </section>
  );
};

export default News;
