import React, { useState } from "react";
import Follow from "../components/Follow/Follow";
import Footer from "../components/Footer/Footer";
import Gallery from "../components/Gallery/Gallery";
import Hero from "../components/Hero/Hero";
import News from "../components/News/News";
import Offers from "../components/Offers/Offers";
import AppContext from "../context";

function Home() {
  const [items, setItems] = useState([
    {
      id: 0,
      name: "Brazilian coffe beans",
      price: 5.99,
      imgUrl: "image/coffee/coffee1.png",
    },
    {
      id: 1,
      name: "Vietnam coffe beans",
      price: 4.99,
      imgUrl: "image/coffee/coffee2.png",
    },
    {
      id: 2,
      name: "Indonesian coffe beans",
      price: 3.99,
      imgUrl: "image/coffee/coffee3.png",
    },
    {
      id: 3,
      name: "Indonesian coffe beans",
      price: 3.99,
      imgUrl: "image/coffee/coffee3.png",
    },
    {
      id: 4,
      name: "Indonesian coffe beans",
      price: 3.99,
      imgUrl: "image/coffee/coffee3.png",
    },
  ]);

  const { onAddToCart } = React.useContext(AppContext);

  return (
    <div className="wrapper">
      <Hero />
      <Offers items={items} onAddToCart={onAddToCart} />
      <Gallery />
      <Follow />
      <News />
      <Footer />
    </div>
  );
}

export default Home;
