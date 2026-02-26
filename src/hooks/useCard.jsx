import { useContext } from "react";
import AppContext from "../context";

const useCard = () => {
  const { cartItems, setCartItems, orders } = useContext(AppContext);

  const roundPrice = (value) => Math.floor(value * 100) / 100;

  const cardPrice = roundPrice(
    cartItems.reduce((sum, item) => sum + item.price * item.counter, 0)
  );

  const ordersPrice = roundPrice(
    orders.reduce((sum, item) => sum + item.price * item.counter, 0)
  );

  const totalPrice = roundPrice(
    cartItems.reduce((sum, item) => sum + item.price * item.counter, 0)
  );

  return { cartItems, setCartItems, totalPrice, cardPrice, ordersPrice };
};

export default useCard;
