import React from "react";
import style from './newsCard.module.scss'

const NewsCard = ({id, title, subtitle, imgUrl}) => {
  return (
    <div className={style.information_card}>
      <img src={imgUrl} alt="news1" />
      <div className={style.card_info}>
        <h3>{title}</h3>
        <p>
          {subtitle}
        </p>
        <button className={style.btn_reset}>
          Learn More <img src="image/arrow.svg" alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
