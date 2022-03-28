import React, { useEffect, useState } from "react";
import { Link as Links } from "react-router-dom";
import { Link } from "react-scroll";
import useScrollPosition from "../../hooks/useScrollPosition";
import useWindowSize from "../../hooks/useWindowSize";
import Menu from "../Menu/Menu";
import "./header.module.scss";

const Header = ({ onClickCart }) => {
  const [burgerShow, setBurgerShow] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [stickyShow, setStickyShow] = useState(false);
  const size = useWindowSize();
  const scrollY = useScrollPosition();

  useEffect(() => {
    setStickyShow(scrollY >= 600);
  }, [scrollY]);

  useEffect(() => {
    setBurgerShow(size.width <= 860);
  }, [size.width]);

  return (
    <header className={stickyShow ? "header is-sticky" : "header"}>
      <div className="container">
        <Links className="logo" to="/hero">
          <img src="image/coffee-cup.svg" alt="cup" />
          <h3>Coffee</h3>
        </Links>
        <div className="navigation">
          {burgerShow ? (
            <div
              className={menuActive ? "burger cross" : "burger"}
              onClick={() => setMenuActive(!menuActive)}
            >
              <span />
            </div>
          ) : (
            <ul className="list-header">
              <li className="list-link">
                <Link smooth={true} offset={-120} duration={1000} to="hero">
                  Home
                </Link>
              </li>
              <li className="list-link">
                <Link to="gallery" smooth={true} offset={-120} duration={1000}>
                  Gallery
                </Link>
              </li>
              <li className="list-link">
                <Link to="contact" smooth={true} offset={-140} duration={1000}>
                  Contact
                </Link>
              </li>
              <li className="list-link">
                <Link to="news" smooth={true} offset={-140} duration={1000}>
                  News
                </Link>
              </li>
              <li className="list-link">
                <Links to="/review" className="header-link">
                  Review
                </Links>
              </li>
              <li className="links-img">
                <Link to="offers" smooth={true} offset={-140} duration={1000}>
                  <img
                    className="header-search"
                    src="image/search-button.svg"
                    alt="search"
                  />
                </Link>
              </li>
              <li className="links-img">
                <img
                  className="header-cart"
                  src="image/Cart12.svg"
                  width={54}
                  height={47}
                  alt="cart"
                  onClick={onClickCart}
                />
              </li>
            </ul>
          )}
          <Menu
            active={menuActive}
            setActive={setMenuActive}
            onClickCart={onClickCart}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
