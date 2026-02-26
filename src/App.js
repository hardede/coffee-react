import { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import AppRouter from "./components/AppRouter";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";
import AppContext from "./context";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

const parseStorageItems = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch (error) {
    return [];
  }
};

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState(() => parseStorageItems("cart"));
  const [orders, setOrders] = useState(() => parseStorageItems("order"));

  const deleteItems = (itemIndex) => {
    setCartItems((prevItems) => prevItems.filter((_, index) => index !== itemIndex));
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("order", JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    document.body.style.overflow = cartOpened ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [cartOpened]);

  const onAddToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((cartItem) => cartItem.id === item.id);

      if (existingItemIndex === -1) {
        return [...prevItems, item];
      }

      return prevItems.map((cartItem, index) =>
        index === existingItemIndex
          ? { ...cartItem, counter: Math.min(cartItem.counter + item.counter, 99) }
          : cartItem
      );
    });
  };

  const onAddToOrders = (items) => {
    setOrders((prevOrders) => [...prevOrders, ...items]);
  };

  return (
    <AppContext.Provider
      value={{ cartItems, setCartItems, onAddToCart, onAddToOrders, orders }}
    >
      <HashRouter>
        <Header onClickCart={() => setCartOpened(true)} />
        <CSSTransition
          classNames="show"
          in={cartOpened}
          timeout={300}
          unmountOnExit
        >
          <Drawer
            items={cartItems}
            onClose={() => setCartOpened(false)}
            active={cartOpened}
            onDelete={deleteItems}
            onAddOrder={onAddToOrders}
          />
        </CSSTransition>
        <AppRouter />
      </HashRouter>
    </AppContext.Provider>
  );
}

export default App;
