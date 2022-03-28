import React from "react";
import style from "./postRiview.module.scss";

const PostRiview = ({
  newReviews,
  setNewReviews,
  clickReview,
  usernameHandler,
  bodyHandler,
  blurHandler,
  username,
  body,
  usernameDirty,
  usernameError,
  bodyError,
  bodyDirty,
  formValid
}) => {
  return (
    <div>
      <form className={style.review_form}>
        <label className={style.review_userName} htmlFor="name">
          Username
        </label>
        {usernameDirty && usernameError && (
          <div className={style.input_error}>{usernameError}</div>
        )}
        <input
          value={username}
          name="username"
          type="text"
          id="name"
          className={style.userName_input}
          placeholder="Your Username..."
          onChange={(e) => usernameHandler(e)}
          onBlur={(e) => blurHandler(e)}
        />
        <label className={style.review_userName} htmlFor="body">
          Review
        </label>
        {bodyDirty && bodyError && (
          <div className={style.input_error}>{bodyError}</div>
        )}
        <textarea
          value={body}
          name="body"
          rows={12}
          type="text"
          id="body"
          className={style.review_input}
          placeholder="Your Review..."
          onChange={(e) => bodyHandler(e)}
          onBlur={(e) => blurHandler(e)}
        />
      </form>
      <button
        disabled={!formValid}
        className={style.review_button}
        onClick={clickReview}
      >
        Опубликовать отзыв
      </button>
    </div>
  );
};

export default PostRiview;
