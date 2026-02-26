import React from "react";

const PostRiview = ({ clickReview, usernameHandler, bodyHandler, blurHandler, usernameDirty, usernameError, bodyDirty, bodyError, formValid, newReviews }) => {
  return (
    <form className="space-y-4" onSubmit={clickReview}>
      <h3 className="text-2xl font-bold">Добавить отзыв</h3>
      <div>
        <input className="w-full rounded border p-3" name="username" value={newReviews.name} onChange={usernameHandler} onBlur={blurHandler} placeholder="Ваше имя" />
        {usernameDirty && usernameError && <p className="mt-1 text-sm text-red-500">{usernameError}</p>}
      </div>
      <div>
        <textarea className="h-32 w-full rounded border p-3" name="body" value={newReviews.body} onChange={bodyHandler} onBlur={blurHandler} placeholder="Ваш отзыв" />
        {bodyDirty && bodyError && <p className="mt-1 text-sm text-red-500">{bodyError}</p>}
      </div>
      <button disabled={!formValid} className="rounded bg-[#ff4b32] px-5 py-2 text-white disabled:opacity-50">Отправить</button>
    </form>
  );
};

export default PostRiview;
