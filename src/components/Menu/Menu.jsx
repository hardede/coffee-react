import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Menu = ({ active, setActive, onClickCart }) => {
  const cart = () => {
    onClickCart();
    setActive(false);
  };

  if (!active) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/60" onClick={() => setActive(false)}>
      <div className="ml-auto h-full w-72 bg-[#3a2113] p-6 text-white" onClick={(e) => e.stopPropagation()}>
        <RouterLink className="mb-8 flex items-end gap-2 no-underline" to="/home" onClick={() => setActive(false)}>
          <img src="image/coffee-cup.svg" alt="cup" />
          <h3 className="text-2xl font-bold text-[#ff4b32]">Coffee</h3>
        </RouterLink>
        <div className="flex flex-col gap-4 text-lg">
          <ScrollLink className="cursor-pointer" to="hero" smooth offset={-120} duration={800} onClick={() => setActive(false)}>Home</ScrollLink>
          <ScrollLink className="cursor-pointer" to="gallery" smooth offset={-120} duration={800} onClick={() => setActive(false)}>Gallery</ScrollLink>
          <ScrollLink className="cursor-pointer" to="contact" smooth offset={-120} duration={800} onClick={() => setActive(false)}>Contact</ScrollLink>
          <ScrollLink className="cursor-pointer" to="news" smooth offset={-120} duration={800} onClick={() => setActive(false)}>News</ScrollLink>
          <RouterLink to="/review" onClick={() => setActive(false)}>Review</RouterLink>
          <button className="mt-4 rounded bg-[#ff4b32] px-4 py-2" onClick={cart}>Open cart</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
