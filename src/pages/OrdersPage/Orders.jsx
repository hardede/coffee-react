import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick/lib/slider";
import AppContext from "../../context";
import cl from "./orders.module.scss";

const Orders = () => {
  const { orders = [] } = React.useContext(AppContext);

  const settings = {
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
    <div className={cl.orders}>
      <div className={cl.container}>
        <div>
          {orders.length > 0 ? (
            <Slider {...settings}>
              {orders.map((order, index) => (
                <div className={cl.order} key={index}>
                    <img
                      src={order.imgUrl}
                      width={200}
                      height={200}
                      alt="coffee"
                    />
                    <h5 className={cl.order_title}>{order.name}</h5>
                    <div className={cl.order_total}>
                      <div className={cl.order_price}>
                        <span>Цена:</span>
                        <p>$ {order.price}</p>
                      </div>
                      <div className={cl.order_count}>
                        Количество: {order.counter}
                      </div>
                    </div>
                </div>
              ))}
            </Slider>
          ) : (
            <div className={cl.no_orders}>
              <img src="image/sad_smile.svg" alt="sad" />
              <p>У вас пока еще нет заказов</p>
              <div>Оформите хотя бы один заказ.</div>
              <Link to="/home">
                <button>
                  <img
                    src="image/arrow-left.svg"
                    width={16}
                    height={14}
                    alt="arrrow"
                  />
                  Вернуться назад
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;
