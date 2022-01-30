import React from "react";
import LikeButton from "../LikeButton/LikeButton";
import Comment from "../Comment/Comment";
import css from "./post.module.css";
const Post = ({ title, paragraphs, comments }) => {
  return (
    <article className={css.post}>
      <div className={css.postHeader}>
        <h2 className={css.postTitle}>{title}</h2>
        <div className={css.avatar}>
          <img
            className={css.avatarImage}
            src="pigeon_avatar.jfif"
            alt="pigeon face"
          />
        </div>
      </div>

      {paragraphs.map((paragraph) => (
        <p>{paragraph}</p>
      ))}
      <div className={css.postFooter}>
        <LikeButton className={css.likeButton} />
        <section className={css.commentSection}>
          {comments.map((comment, index) => {
            return <Comment comment={comment} key={index} />;
          })}
        </section>
      </div>
    </article>
  );
};

export default Post;
