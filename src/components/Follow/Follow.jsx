import React from "react";
import style from './follow.module.scss'

const Follow = () => {
  return (
    <div className={style.follow} id="contact">
      <div className={style.container}>
        <div className={style.follow_us}>
          <p className={style.upper_title}>Follow US</p>
        </div>
        <h2 className={style.follow_title}>
          {"Have an inquiry? \nText or call and ask Something."}
        </h2>
        <div className={style.follow_contacts}>
          <img src="image/Telephone.svg" alt="phone" />
          <p>+8801742-527137</p>
        </div>
        <div className={style.follow_contacts}>
          <img src="image/gmail.svg" alt="email" />
          <p>mdmaksedur17@gmail.com</p>
        </div>
        <div className={style.follow_list}>
          <a
            href="https://twitter.com/Starbucks"
            className={style.follow_social}
            target="_blank"
            rel="noreferrer"
          >
            <img src="image/twitter.svg" alt="twitter" />
          </a>
          <a
            href="https://www.facebook.com/maythecoffeebewithyou"
            className={style.follow_social}
            target="_blank"
            rel="noreferrer"
          >
            <img src="image/facebook.svg" alt="facebook" />
          </a>
          <a
            href="https://www.instagram.com/thegustocoffee/"
            className={style.follow_social}
            target="_blank"
            rel="noreferrer"
          >
            <img src="image/inst.svg" alt="inst" />
          </a>
          <a
            href="https://www.linkedin.com/"
            className={style.follow_social}
            target="_blank"
            rel="noreferrer"
          >
            <img src="image/link.svg" alt="link" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Follow;
