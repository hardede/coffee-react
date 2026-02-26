import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick/lib/slider";
import AppContext from "../../context";

const Orders = () => {
  const { orders = [] } = React.useContext(AppContext);

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
    <section className="px-4 pb-20 pt-32">
      <div className="mx-auto max-w-6xl">
        {orders.length > 0 ? (
          <Slider {...settings}>
            {orders.map((order, index) => (
              <div className="px-2" key={index}>
                <article className="rounded-xl border p-4 text-center">
                  <img src={order.imgUrl} width={200} height={200} alt="coffee" className="mx-auto" />
                  <h5 className="mt-3 text-lg font-semibold">{order.name}</h5>
                  <div className="mt-3 space-y-1 text-sm">
                    <p><span className="font-semibold">Цена:</span> $ {order.price}</p>
                    <p>Количество: {order.counter}</p>
                  </div>
                </article>
              </div>
            ))}
          </Slider>
        ) : (
          <div className="mx-auto max-w-md text-center">
            <img src="image/sad_smile.svg" alt="sad" className="mx-auto" />
            <p className="mt-4 text-lg font-semibold">У вас пока еще нет заказов</p>
            <div className="mt-1 text-gray-600">Оформите хотя бы один заказ.</div>
            <Link to="/home"><button className="mt-6 rounded bg-[#ff4b32] px-4 py-2 text-white">Вернуться назад</button></Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Orders;
