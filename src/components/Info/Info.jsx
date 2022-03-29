import React from "react";
import { Link } from "react-router-dom";
import classes from "../Drawer/drawer.module.scss";

const Info = ({ title, description, cartImg, onHandleClose }) => {
  return (
    <div className={classes.emtyCart}>
      <img src={cartImg} width={120} height={120} alt="emtyCart" />
      <h3>{title}</h3>
      <h5>{description}</h5>
      <Link to="/orders">
        <button className={classes.cartOrder} onClick={onHandleClose}>Страница заказов</button>
      </Link>
      <button onClick={onHandleClose}>
        <img src="image/arrow-left.svg" width={16} height={14} alt="arrrow" />
        Вернуться назад
      </button>
    </div>
  );
};

export default Info;
