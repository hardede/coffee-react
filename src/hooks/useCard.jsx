import { useContext } from "react";
import AppContext from "../context";

const useCard = () => {
  const { cartItems, setCartItems, orders } = useContext(AppContext);
  const cardPrice =
    Math.floor(
      cartItems.reduce((sum, item) => item.price * item.counter, 0) *
        Math.pow(10, 2)
    ) / Math.pow(10, 2);
  const ordersPrice =
    Math.floor(
      orders.reduce((sum, item) => item.price * item.counter, 0) *
        Math.pow(10, 2)
    ) / Math.pow(10, 2);
  const totalPrice =
    Math.floor(
      cartItems.reduce((sum, item) => item.price * item.counter + sum, 0) *
        Math.pow(10, 2)
    ) / Math.pow(10, 2);

  return { cartItems, setCartItems, totalPrice, cardPrice, ordersPrice };
};

export default useCard;