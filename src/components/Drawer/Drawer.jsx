import React, { useState } from "react";
import useCard from "../../hooks/useCard";
import Info from "../Info/Info";
import style from "./drawer.module.scss";

const Drawer = ({ onClose, items = [], onDelete, onAddOrder }) => {
  const { setCartItems, totalPrice } = useCard();
  const [isCompleted, setIsCompleted] = useState(false);

  const handleClickOrder = () => {
    if (items.length === 0) {
      return;
    }

    setIsCompleted(true);
    setCartItems([]);
    onAddOrder(items);
  };

  return (
    <div className={style.overlay} onClick={onClose}>
      <div className={style.drawer} onClick={(e) => e.stopPropagation()}>
        <h2>
          Корзина <img src="image/btn-remove.svg" alt="remove" onClick={onClose} />
        </h2>
        {items.length > 0 ? (
          <div>
            {items.map((item, index) => (
              <div className={style.drawer_card} key={`${item.id}-${index}`}>
                <div className={style.cart_item}>
                  <img className={style.cart_coffee} src={item.imgUrl} alt="Brazillian" />
                  <div>
                    <p className={style.coffee_name}>{item.name}</p>
                    <p>В количестве {item.counter}</p>
                    <p className={style.coffee_price}>$ {item.price}</p>
                  </div>
                  <img
                    className={style.remove_btn}
                    src="image/btn-remove.svg"
                    alt="remove"
                    onClick={() => onDelete(index)}
                  />
                </div>
              </div>
            ))}
            <div className={style.cartTotalBlock}>
              <ul>
                <li className={style.total_list}>
                  <span>Итого</span>
                  <div></div>
                  <p className={style.price}>$ {totalPrice}</p>
                </li>
              </ul>
              <button onClick={handleClickOrder}>Оформить заказ</button>
            </div>
          </div>
        ) : (
          <Info
            title={isCompleted ? "Ваш заказ принят" : "Корзина пустая"}
            description={
              isCompleted
                ? "Заказ № уже в обработке"
                : "У вас пока еще нет предметов в корзине"
            }
            cartImg={isCompleted ? "image/completeOrder.jpg" : "image/emty.png"}
            onHandleClose={onClose}
          />
        )}
      </div>
    </div>
  );
};

export default Drawer;
