import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick/lib/slider";
import { CSSTransition } from "react-transition-group";
import PostRiview from "../../components/PostRivews/PostRiview";
import MyModal from "../../Modal/MyModal";
import style from "./review.module.scss";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [modalReview, setModalRiview] = useState(false);
  const [newReviews, setNewReviews] = useState({ name: "", body: "" });
  const [username, setUsername] = useState("");
  const [body, setBody] = useState("");
  const [usernameDirty, setUsernameDirty] = useState(false);
  const [bodyDirty, setBodyDirty] = useState(false);
  const [usernameError, setUsernameError] = useState(
    "Данное поле не может быть пустым"
  );
  const [bodyError, setBodyError] = useState(
    "Данное поле не может быть пустым"
  );
  const [formValid, setFormValid] = useState(false);

  const onHandleClickReview = () => {
    setModalRiview(true);
  };

  const onAddPost = (newReview) => {
    setReviews([newReview, ...reviews]);
    setModalRiview(false);
  };

  const handleClickReviews = (e) => {
    e.preventDefault();
    const newReview = {
      ...newReviews,
      id: Date.now(),
    };
    onAddPost(newReview);
    setNewReviews({ name: "", body: "" });
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((result) => {
        setReviews(result.data);
      });
  }, []);

  useEffect(() => {
    if (usernameError || bodyError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [usernameError, bodyError]);

  const usernameHandler = (e) => {
    setNewReviews({ ...newReviews, name: e.target.value });
    setUsername(e.target.value);
    setUsernameError("");
  };

  const bodyHandler = (e) => {
    setNewReviews({ ...newReviews, body: e.target.value });
    setBody(e.target.value);
    if (e.target.value.length < 10 || e.target.value.length > 255) {
      setBodyError("Текст должен быть длинее 10 и не менее 255 символов");
      if (!e.target.value) {
        setBodyError("Данное поле не может быть пустым");
      }
    } else {
      setBodyError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "username":
        setUsernameDirty(true);
        break;
      case "body":
        setBodyDirty(true);
        break;
      default:
        break;
    }
  };
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className={style.reviews}>
      <div className={style.container}>
        <h3 className={style.reviews_title}>Страница отзывов</h3>
        <button className={style.add_reviews} onClick={onHandleClickReview}>
          Добавить свой отзыв
        </button>
        <CSSTransition
          classNames="show"
          in={modalReview}
          timeout={1000}
          unmountOnExit
        >
          <MyModal active={modalReview} onClose={() => setModalRiview(false)}>
            <PostRiview
              newReviews={newReviews}
              setNewReviews={setNewReviews}
              clickReview={handleClickReviews}
              usernameHandler={usernameHandler}
              bodyHandler={bodyHandler}
              blurHandler={blurHandler}
              username={username}
              body={body}
              usernameDirty={usernameDirty}
              usernameError={usernameError}
              bodyError={bodyError}
              bodyDirty={bodyDirty}
              formValid={formValid}
            />
          </MyModal>
        </CSSTransition>
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div className={style.review} key={index}>
              <img
                src="image/user-icon.png"
                width={150}
                height={150}
                alt="person"
              />
              <p className={style.review_name}>{review.name}</p>
              <p className={style.review_comment}>{review.body}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Review;
