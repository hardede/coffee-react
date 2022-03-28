import React from "react";
import { Link } from "react-scroll";
import style from "./hero.module.scss";

const Hero = () => {
  return (
    <div className={style.hero} id="hero">
      <div className={style.container}>
        <div className={style.hero_info}>
          <h1 className={style.hero_title}>
            {"Keep your dreams \naroused with a cup \nof coffee."}
          </h1>
          <p className={style.hero_subtitle}>
            {"The coffee ideas shared by these generators are not \ncool at all, as they are not a human being."}
          </p>
          <Link
            className={style.hero_btn}
            to="offers"
            smooth={true}
            offset={-140}
            duration={1000}
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
