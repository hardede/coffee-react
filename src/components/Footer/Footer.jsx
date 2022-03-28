import React from "react";
import style from './footer.module.scss'

const Fotter = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.footer_colums}>
          <div className={style.main_column}>
            <div className={style.footer_logo}>
              <img src="image/coffee-cup.svg" alt="cup" />
              <h3>Coffee</h3>
            </div>
            <p className={style.footer_subtitle}>
              Creating a&nbsp;catchy tagline coffee shop business growth.
            </p>
            <div className={style.follow_contacts}>
              <img src="image/Telephone.svg" alt="phone" />
              <p>+8801742-527137</p>
            </div>
          </div>
          <div className={style.column}>
            <h3 className={style.column_title}>categories</h3>
            <nav>Ashley Szekeres Art</nav>
            <nav>Merchandise</nav>
            <nav>Gift Certificates</nav>
          </div>
          <div className={style.column}>
            <h3 className={style.column_title}>information</h3>
            <nav>Coffee Beans</nav>
            <nav>Contact Us</nav>
            <nav>Blog</nav>
          </div>
          <div className={style.column}>
            <h3 className={style.column_title}>follow us</h3>
            <div className={style.footer_list}>
              <a
                href="https://twitter.com/Starbucks"
                className={style.footer_social}
                target="_blank"
                rel="noreferrer"
              >
                <img src="image/twitter.svg" alt="twitter" />
              </a>
              <a
                href="https://www.facebook.com/maythecoffeebewithyou"
                className={style.footer_social}
                target="_blank"
                rel="noreferrer"
              >
                <img src="image/facebook.svg" alt="facebook" />
              </a>
              <a
                href="https://www.instagram.com/thegustocoffee/"
                className={style.footer_social}
                target="_blank"
                rel="noreferrer"
              >
                <img src="image/inst.svg" alt="inst" />
              </a>
              <a
                href="https://www.linkedin.com/"
                className={style.footer_social}
                target="_blank"
                rel="noreferrer"
              >
                <img src="image/link.svg" alt="link" />
              </a>
            </div>
          </div>
        </div>
        <div className={style.copyright}>
          <p>
            Copyright &copy;&nbsp;2021&nbsp;Coffee, All rights reserved. Present
            by MoxCreative.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Fotter;
