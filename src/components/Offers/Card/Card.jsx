import React, { useState } from "react";
import style from "./card.module.scss";

const Card = ({ id, name, price, imgUrl, onPlus }) => {
  const [counter, setCounter] = useState(1);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  if (counter <= 0) {
    setCounter(1);
  } else if (counter >= 10) {
    setCounter(9);
  }

  const handleClickCart = () => {

    onPlus({ id, name, price, imgUrl, counter });
    setCounter(1);
  };

  return (
    <div className={style.card}>
      <img className={style.card_coffee} src={imgUrl} alt="coffee1" />
      <div className={style.card_price}>$ {price}</div>
      <div className={style.card_title}>{name}</div>
      <p className={style.card_subtitle}>
        Coffee that&rsquo;s always you handle your own the way you like.
      </p>
      <div className={style.card_counter}>
        <div className={style.card_num}>
          <p className={style.card_number}>{counter}</p>
          <button className={style.card_increase} onClick={increment}>
            <img src="image/plus.svg" alt="plus" />
          </button>
          <button className={style.card_decrease} onClick={decrement}>
            <img src="image/minus.svg" alt="minus" />
          </button>
        </div>
        <button className={style.card_button} onClick={handleClickCart}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
