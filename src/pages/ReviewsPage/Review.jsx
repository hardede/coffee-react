import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick/lib/slider";
import { CSSTransition } from "react-transition-group";
import PostRiview from "../../components/PostRivews/PostRiview";
import MyModal from "../../Modal/MyModal";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [modalReview, setModalRiview] = useState(false);
  const [newReviews, setNewReviews] = useState({ name: "", body: "" });
  const [username, setUsername] = useState("");
  const [body, setBody] = useState("");
  const [usernameDirty, setUsernameDirty] = useState(false);
  const [bodyDirty, setBodyDirty] = useState(false);
  const [usernameError, setUsernameError] = useState("Данное поле не может быть пустым");
  const [bodyError, setBodyError] = useState("Данное поле не может быть пустым");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => { axios.get("https://jsonplaceholder.typicode.com/posts/1/comments").then((result) => setReviews(result.data)); }, []);
  useEffect(() => { setFormValid(!(usernameError || bodyError)); }, [usernameError, bodyError]);

  const onAddPost = (newReview) => { setReviews([newReview, ...reviews]); setModalRiview(false); };
  const handleClickReviews = (e) => { e.preventDefault(); onAddPost({ ...newReviews, id: Date.now() }); setNewReviews({ name: "", body: "" }); };
  const usernameHandler = (e) => { setNewReviews({ ...newReviews, name: e.target.value }); setUsername(e.target.value); setUsernameError(""); };
  const bodyHandler = (e) => { setNewReviews({ ...newReviews, body: e.target.value }); setBody(e.target.value); if (e.target.value.length < 10 || e.target.value.length > 255) setBodyError(!e.target.value ? "Данное поле не может быть пустым" : "Текст должен быть длинее 10 и не менее 255 символов"); else setBodyError(""); };
  const blurHandler = (e) => { if (e.target.name === "username") setUsernameDirty(true); if (e.target.name === "body") setBodyDirty(true); };

  const settings = { dots: false, infinite: false, speed: 500, slidesToShow: 3, slidesToScroll: 1, swipeToSlide: true, responsive: [{ breakpoint: 1200, settings: { slidesToShow: 2, arrows: false, dots: true } }, { breakpoint: 760, settings: { slidesToShow: 1, arrows: false, dots: true } }] };

  return (
    <section className="px-4 pb-20 pt-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <h3 className="text-3xl font-bold">Страница отзывов</h3>
          <button className="rounded bg-[#ff4b32] px-4 py-2 text-white" onClick={() => setModalRiview(true)}>Добавить свой отзыв</button>
        </div>
        <CSSTransition classNames="show" in={modalReview} timeout={300} unmountOnExit>
          <MyModal onClose={() => setModalRiview(false)}><PostRiview newReviews={newReviews} clickReview={handleClickReviews} usernameHandler={usernameHandler} bodyHandler={bodyHandler} blurHandler={blurHandler} username={username} body={body} usernameDirty={usernameDirty} usernameError={usernameError} bodyError={bodyError} bodyDirty={bodyDirty} formValid={formValid} /></MyModal>
        </CSSTransition>
        <Slider {...settings}>{reviews.map((review, index) => <div className="px-2" key={index}><article className="rounded-xl border p-4"><img src="image/user-icon.png" width={80} height={80} alt="person" /><p className="mt-3 font-semibold">{review.name}</p><p className="mt-2 text-sm text-gray-600">{review.body}</p></article></div>)}</Slider>
      </div>
    </section>
  );
};

export default Review;
