import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import useScrollPosition from "../../hooks/useScrollPosition";
import useWindowSize from "../../hooks/useWindowSize";
import Menu from "../Menu/Menu";

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
    <header className={`fixed left-0 top-0 z-50 w-full px-4 py-4 text-white transition-all ${stickyShow ? "bg-[#3a2113] shadow-lg" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <RouterLink className="flex items-end gap-2 no-underline" to="/home">
          <img src="image/coffee-cup.svg" alt="cup" />
          <h3 className="text-2xl font-bold text-[#ff4b32]">Coffee</h3>
        </RouterLink>
        <div className="flex items-center">
          {burgerShow ? (
            <button className="text-3xl" onClick={() => setMenuActive(!menuActive)}>{menuActive ? "✕" : "☰"}</button>
          ) : (
            <ul className="flex items-center gap-6 text-sm md:text-base">
              <li><ScrollLink className="cursor-pointer hover:text-[#ff4b32]" smooth offset={-120} duration={1000} to="hero">Home</ScrollLink></li>
              <li><ScrollLink className="cursor-pointer hover:text-[#ff4b32]" to="gallery" smooth offset={-120} duration={1000}>Gallery</ScrollLink></li>
              <li><ScrollLink className="cursor-pointer hover:text-[#ff4b32]" to="contact" smooth offset={-140} duration={1000}>Contact</ScrollLink></li>
              <li><ScrollLink className="cursor-pointer hover:text-[#ff4b32]" to="news" smooth offset={-140} duration={1000}>News</ScrollLink></li>
              <li><RouterLink to="/review" className="hover:text-[#ff4b32]">Review</RouterLink></li>
              <li><ScrollLink to="offers" smooth offset={-140} duration={1000}><img src="image/search-button.svg" alt="search" /></ScrollLink></li>
              <li><img className="cursor-pointer" src="image/Cart12.svg" width={54} height={47} alt="cart" onClick={onClickCart} /></li>
            </ul>
          )}
          <Menu active={menuActive} setActive={setMenuActive} onClickCart={onClickCart} />
        </div>
      </div>
    </header>
  );
};

export default Header;
