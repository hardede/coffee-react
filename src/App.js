import { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import AppRouter from "./components/AppRouter";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";
import AppContext from "./context";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [orders, setOrders] = useState(JSON.parse(localStorage.getItem("order")) || []);

  const deleteItems = (product) => {
    setCartItems(cartItems.filter((p) => p !== product));
    let cartStorage = JSON.parse(localStorage.getItem("cart"));
    let products = cartStorage.filter((products) => products.id !== product.id);
    localStorage.setItem("cart", JSON.stringify(products));
  };

  useEffect(
    () => localStorage.setItem("cart", JSON.stringify(cartItems)),
    [cartItems]
  );

  useEffect(
    () => localStorage.setItem("order", JSON.stringify(orders)),
    [orders]
  );

  const onAddToCart = (obj) => {
    setCartItems([...cartItems, obj]);
  };

  console.log(cartItems);

  const onAddToOrders = (obj) => {
    setOrders(...orders, obj);
  };

  console.log(orders);

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
            onAddOrder={(item) => onAddToOrders(item)}
          />
        </CSSTransition>
        <AppRouter />
      </HashRouter>
    </AppContext.Provider>
  );
}

export default App;
