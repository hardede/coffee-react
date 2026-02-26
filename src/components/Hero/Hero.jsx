import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[720px] bg-[#1e120d] bg-cover bg-center px-4 pt-36 text-white" style={{ backgroundImage: "url('image/Hero-area.png')" }}>
      <div className="mx-auto max-w-6xl">
        <h1 className="max-w-xl text-4xl font-bold leading-tight md:text-6xl">Keep your dreams aroused with a cup of coffee.</h1>
        <p className="mt-6 max-w-xl text-white/80">The coffee ideas shared by these generators are not cool at all.</p>
        <button className="mt-8 rounded bg-[#ff4b32] px-6 py-3 font-semibold">Buy now</button>
      </div>
    </section>
  );
};

export default Hero;
