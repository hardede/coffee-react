import React, { useState } from "react";

const images = [
  "image/gallery/Gallery1.png",
  "image/gallery/Gallery2.png",
  "image/gallery/Gallery3.png",
  "image/gallery/Gallery4.png",
  "image/gallery/Gallery5.png",
  "image/gallery/Gallery6.png",
];

const Gallery = () => {
  const [more, setMore] = useState(false);
  const shown = more ? images.concat(images.slice(0, 3)) : images;

  return (
    <section id="gallery" className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-3xl font-bold">Our Gallery</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((src, index) => <img key={`${src}-${index}`} className="h-64 w-full rounded-lg object-cover" src={src} alt={`gallery-${index}`} />)}
        </div>
        <div className="mt-8 text-center">
          <button className="rounded bg-[#ff4b32] px-6 py-2 text-white" onClick={() => setMore((prev) => !prev)}>{more ? "show less" : "load more"}</button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
