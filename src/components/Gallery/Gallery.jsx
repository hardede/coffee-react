import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import useWindowSize from "../../hooks/useWindowSize";
import style from "./gallery.module.scss";

const Gallery = () => {
  const [more, setMore] = useState(false);
  const [formGallery, setFormGallery] = useState(false);
  const size = useWindowSize();

  const onCliclLoad = () => {
    setMore(!more);
  };

  useEffect(() => {
    setFormGallery(size.width <= 760);
  }, [size.width]);

  return (
    <div className={style.gallery} id="gallery">
      <div className={style.container}>
        <div className={style.gallery_header}>
          <h2 className={style.gallery_title}>Our Gallery</h2>
          <p className={style.gallery_subtitle}>
            {
              "The coffee shop name generator is a great tool for those that are \ndeliberating what to call their new coffee."
            }
          </p>
        </div>
        <div>
          {formGallery ? (
            <div className={style.gallery_formPhoto}>
              <div>
                <img
                  className={style.img_formPadding}
                  src="image/gallery/Gallery1.png"
                  alt="gallary 1"
                />
                <img
                  className={style.img_formPadding}
                  src="image/gallery/Gallery2.png"
                  alt="gallary 3"
                />
                <img
                  className={style.img_formPadding}
                  src="image/gallery/Gallery3.png"
                  alt="gallary 5"
                />
              </div>
              <div>
                <img
                  className={style.img_formPaddingRight}
                  src="image/gallery/Gallery4.png"
                  alt="gallary 2"
                />
                <img
                  className={style.img_formPaddingRight}
                  src="image/gallery/Gallery5.png"
                  alt="gallary 4"
                />
                <img
                  className={style.img_formPaddingRight}
                  src="image/gallery/Gallery6.png"
                  alt="gallary 6"
                />
              </div>
            </div>
          ) : (
            <div className={style.gallery_photo}>
              <div>
                <img
                  className={style.img_padding}
                  src="image/gallery/Gallery1.png"
                  alt="gallary 1"
                />
                <img src="image/gallery/Gallery4.png" alt="gallary 2" />
              </div>
              <div>
                <img
                  className={style.img_padding}
                  src="image/gallery/Gallery2.png"
                  alt="gallary 3"
                />
                <img src="image/gallery/Gallery5.png" alt="gallary 4" />
              </div>
              <div>
                <img
                  className={style.img_padding}
                  src="image/gallery/Gallery3.png"
                  alt="gallary 5"
                />
                <img src="image/gallery/Gallery6.png" alt="gallary 6" />
              </div>
            </div>
          )}
        </div>
        <CSSTransition classNames="show" in={more} timeout={300} unmountOnExit>
          <div>
            {formGallery ? (
              <div className={style.gallery_formPhoto}>
                <div>
                  <img
                    className={style.img_formPaddingRight}
                    src="image/gallery/Gallery4.png"
                    alt="gallary 2"
                  />
                  <img
                    className={style.img_formPaddingRight}
                    src="image/gallery/Gallery5.png"
                    alt="gallary 4"
                  />
                  <img
                    className={style.img_formPaddingRight}
                    src="image/gallery/Gallery6.png"
                    alt="gallary 6"
                  />
                </div>
                <div>
                  <img
                    className={style.img_formPadding}
                    src="image/gallery/Gallery1.png"
                    alt="gallary 1"
                  />
                  <img
                    className={style.img_formPadding}
                    src="image/gallery/Gallery2.png"
                    alt="gallary 3"
                  />
                  <img
                    className={style.img_formPadding}
                    src="image/gallery/Gallery3.png"
                    alt="gallary 5"
                  />
                </div>
              </div>
            ) : (
              <div className={style.gallery_photo}>
                <div>
                  <img
                    className={style.img_padding}
                    src="image/gallery/Gallery1.png"
                    alt="gallary 1"
                  />
                  <img src="image/gallery/Gallery4.png" alt="gallary 2" />
                </div>
                <div>
                  <img
                    className={style.img_padding}
                    src="image/gallery/Gallery2.png"
                    alt="gallary 3"
                  />
                  <img src="image/gallery/Gallery5.png" alt="gallary 4" />
                </div>
                <div>
                  <img
                    className={style.img_padding}
                    src="image/gallery/Gallery3.png"
                    alt="gallary 5"
                  />
                  <img src="image/gallery/Gallery6.png" alt="gallary 6" />
                </div>
              </div>
            )}
          </div>
        </CSSTransition>
        <div className={style.gallery_more} onClick={onCliclLoad}>
          <button className={style.btn_more}>load more</button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
