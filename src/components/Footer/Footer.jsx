import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#2b1710] px-4 py-12 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-4">
        <div>
          <div className="mb-4 flex items-end gap-2">
            <img src="image/coffee-cup.svg" alt="cup" />
            <h3 className="text-2xl font-bold text-[#ff4b32]">Coffee</h3>
          </div>
          <p className="mb-4 text-sm text-white/80">Creating a catchy tagline coffee shop business growth.</p>
          <p className="text-sm">+8801742-527137</p>
        </div>
        <div><h3 className="mb-3 font-semibold uppercase">categories</h3><p>Ashley Szekeres Art</p><p>Merchandise</p><p>Gift Certificates</p></div>
        <div><h3 className="mb-3 font-semibold uppercase">information</h3><p>Coffee Beans</p><p>Contact Us</p><p>Blog</p></div>
        <div>
          <h3 className="mb-3 font-semibold uppercase">follow us</h3>
          <div className="flex gap-3">
            <a href="https://twitter.com/Starbucks" target="_blank" rel="noreferrer"><img src="image/twitter.svg" alt="twitter" /></a>
            <a href="https://www.facebook.com/maythecoffeebewithyou" target="_blank" rel="noreferrer"><img src="image/facebook.svg" alt="facebook" /></a>
            <a href="https://www.instagram.com/thegustocoffee/" target="_blank" rel="noreferrer"><img src="image/inst.svg" alt="inst" /></a>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl border-t border-white/20 pt-4 text-center text-xs text-white/70">Copyright © 2021 Coffee, All rights reserved.</p>
    </footer>
  );
};

export default Footer;
