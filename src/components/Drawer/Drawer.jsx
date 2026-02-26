import React, { useState } from "react";
import useCard from "../../hooks/useCard";
import Info from "../Info/Info";

const Drawer = ({ onClose, items = [], onDelete, onAddOrder }) => {
  const { setCartItems, totalPrice } = useCard();
  const [isCompleted, setIsCompleted] = useState(false);

  const handleClickOrder = () => {
    if (items.length === 0) return;
    setIsCompleted(true);
    setCartItems([]);
    onAddOrder(items);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40" onClick={onClose}>
      <div className="ml-auto flex h-full w-full max-w-md flex-col bg-white p-6" onClick={(e) => e.stopPropagation()}>
        <h2 className="mb-4 flex items-center justify-between text-2xl font-bold">Корзина <img src="image/btn-remove.svg" alt="remove" onClick={onClose} /></h2>
        {items.length > 0 ? (
          <>
            <div className="flex-1 space-y-3 overflow-y-auto pr-1">
              {items.map((item, index) => (
                <div className="flex items-center gap-3 rounded border p-3" key={`${item.id}-${index}`}>
                  <img className="h-16 w-16 object-cover" src={item.imgUrl} alt={item.name} />
                  <div className="flex-1">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm">В количестве {item.counter}</p>
                    <p className="text-sm font-bold">$ {item.price}</p>
                  </div>
                  <img className="cursor-pointer" src="image/btn-remove.svg" alt="remove" onClick={() => onDelete(index)} />
                </div>
              ))}
            </div>
            <div className="mt-6 border-t pt-4">
              <div className="mb-4 flex items-center justify-between"><span>Итого</span><p className="font-bold">$ {totalPrice}</p></div>
              <button className="w-full rounded bg-[#ff4b32] py-3 text-white" onClick={handleClickOrder}>Оформить заказ</button>
            </div>
          </>
        ) : (
          <Info
            title={isCompleted ? "Ваш заказ принят" : "Корзина пустая"}
            description={isCompleted ? "Заказ уже в обработке" : "У вас пока еще нет предметов в корзине"}
            cartImg={isCompleted ? "image/completeOrder.jpg" : "image/emty.png"}
            onHandleClose={onClose}
            actionLink={isCompleted ? "/orders" : null}
            actionText={isCompleted ? "Посмотреть заказы" : null}
          />
        )}
      </div>
    </div>
  );
};

export default Drawer;
