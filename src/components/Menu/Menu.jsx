import React from "react";
import style from "./menu.module.scss";
import { Link as Links } from "react-router-dom";
import { Link } from "react-scroll";

const Menu = ({ header, active, setActive, onClickCart }) => {
  const cart = () => {
    onClickCart()
    setActive(false)
  }
  return (
    <div
      className={active ? "menu active" : "menu"}
      onClick={() => setActive(false)}
    >
      <div className={style.blur}>
        <div
          className={style.menu_content}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={style.menu_header}>{header}</div>
          <Links className={style.menu_logo} to="/home">
            <img
              className={style.menu_img}
              src="image/coffee-cup.svg"
              alt="cup"
            />
            <h3 className={style.menu_title}>Coffee</h3>
          </Links>
          <div className={style.menu_navigation}>
            <div>
              <ul className={style.menu_list}>
                <li
                  className={style.menu_item}
                  onClick={() => setActive(false)}
                >
                  <Link
                    className={style.header_link}
                    smooth={true}
                    offset={-120}
                    duration={1000}
                    to="hero"
                    onClick={() => setActive(false)}
                  >
                    <svg
                      className={style.icons_link}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z" />
                    </svg>
                    Home
                  </Link>
                </li>
                <li className={style.menu_item}>
                  <Link
                    to="gallery"
                    className={style.header_link}
                    smooth={true}
                    offset={-120}
                    duration={1000}
                    onClick={() => setActive(false)}
                  >
                    <svg
                      className={style.icons_link}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path d="M352 432c0 8.836-7.164 16-16 16H176c-8.838 0-16-7.164-16-16L160 128H48C21.49 128 .0003 149.5 .0003 176v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48L512 384h-160L352 432zM104 439c0 4.969-4.031 9-9 9h-30c-4.969 0-9-4.031-9-9v-30c0-4.969 4.031-9 9-9h30c4.969 0 9 4.031 9 9V439zM104 335c0 4.969-4.031 9-9 9h-30c-4.969 0-9-4.031-9-9v-30c0-4.969 4.031-9 9-9h30c4.969 0 9 4.031 9 9V335zM104 231c0 4.969-4.031 9-9 9h-30c-4.969 0-9-4.031-9-9v-30C56 196 60.03 192 65 192h30c4.969 0 9 4.031 9 9V231zM408 409c0-4.969 4.031-9 9-9h30c4.969 0 9 4.031 9 9v30c0 4.969-4.031 9-9 9h-30c-4.969 0-9-4.031-9-9V409zM591.1 0H239.1C213.5 0 191.1 21.49 191.1 48v256c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-256C640 21.49 618.5 0 591.1 0zM303.1 64c17.68 0 32 14.33 32 32s-14.32 32-32 32C286.3 128 271.1 113.7 271.1 96S286.3 64 303.1 64zM574.1 279.6C571.3 284.8 565.9 288 560 288H271.1C265.1 288 260.5 284.6 257.7 279.3C255 273.9 255.5 267.4 259.1 262.6l70-96C332.1 162.4 336.9 160 341.1 160c5.11 0 9.914 2.441 12.93 6.574l22.35 30.66l62.74-94.11C442.1 98.67 447.1 96 453.3 96c5.348 0 10.34 2.672 13.31 7.125l106.7 160C576.6 268 576.9 274.3 574.1 279.6z" />
                    </svg>
                    Gallery
                  </Link>
                </li>
                <li className={style.menu_item}>
                  <Link
                    to="contact"
                    className={style.header_link}
                    smooth={true}
                    offset={-140}
                    duration={1000}
                    onClick={() => setActive(false)}
                  >
                    <svg
                      className={style.icons_link}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.65-64-64-64H64C28.65 32 0 60.65 0 96zM105.5 303.6l54.24-23.25c6.391-2.766 13.9-.9062 18.24 4.484l22.02 26.91c34.63-17 62.77-45.14 79.77-79.75l-26.91-22.05c-5.375-4.391-7.211-11.83-4.492-18.22l23.27-54.28c3.047-6.953 10.59-10.77 17.93-9.062l50.38 11.63c7.125 1.625 12.11 7.891 12.11 15.22c0 126.1-102.6 228.8-228.7 228.8c-7.336 0-13.6-4.984-15.24-12.11l-11.62-50.39C94.71 314.2 98.5 306.6 105.5 303.6z" />
                    </svg>
                    Contact
                  </Link>
                </li>
                <li className={style.menu_item}>
                  <Link
                    to="news"
                    className={style.header_link}
                    smooth={true}
                    offset={-140}
                    duration={1000}
                    onClick={() => setActive(false)}
                  >
                    <svg
                      className={style.icons_link}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M384 32H64C28.63 32 0 60.63 0 96v320c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V96C448 60.63 419.4 32 384 32zM384 336c0 17.67-14.33 32-32 32H96c-17.67 0-32-14.33-32-32V225.9l138.5 69.27C209.3 298.5 216.6 300.2 224 300.2s14.75-1.688 21.47-5.047L384 225.9V336zM384 190.1l-152.8 76.42c-4.5 2.25-9.812 2.25-14.31 0L64 190.1V176c0-17.67 14.33-32 32-32h256c17.67 0 32 14.33 32 32V190.1z" />
                    </svg>
                    News
                  </Link>
                </li>
                <li
                  className={style.menu_item}
                  onClick={() => setActive(false)}
                >
                  <Links to="/review" className={style.header_link}>
                    <svg
                      className={style.icons_link}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 31.1c-141.4 0-255.1 93.12-255.1 208c0 49.62 21.35 94.98 56.97 130.7c-12.5 50.37-54.27 95.27-54.77 95.77c-2.25 2.25-2.875 5.734-1.5 8.734c1.249 3 4.021 4.766 7.271 4.766c66.25 0 115.1-31.76 140.6-51.39c32.63 12.25 69.02 19.39 107.4 19.39c141.4 0 255.1-93.13 255.1-207.1S397.4 31.1 256 31.1zM127.1 271.1c-17.75 0-32-14.25-32-31.1s14.25-32 32-32s32 14.25 32 32S145.7 271.1 127.1 271.1zM256 271.1c-17.75 0-31.1-14.25-31.1-31.1s14.25-32 31.1-32s31.1 14.25 31.1 32S273.8 271.1 256 271.1zM383.1 271.1c-17.75 0-32-14.25-32-31.1s14.25-32 32-32s32 14.25 32 32S401.7 271.1 383.1 271.1z" />
                    </svg>
                    Review
                  </Links>
                </li>
              </ul>
              <Link
                to="offers"
                smooth={true}
                offset={-140}
                duration={1000}
                onClick={() => setActive(false)}
              >
                <img
                  className="header-search"
                  src="image/search-button.svg"
                  alt="search"
                />
              </Link>
              <img
                className="header-cart"
                src="image/Cart12.svg"
                width={54}
                height={47}
                alt="cart"
                onClick={cart}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
