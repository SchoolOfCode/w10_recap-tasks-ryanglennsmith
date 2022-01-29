import React from "react";
import LikeButton from "../LikeButton/LikeButton";
import Comment from "../Comment/Comment";
const Post = ({ title, paragraphs, comments }) => {
  return (
    <article className="post">
      <h2>{title}</h2>
      {paragraphs.map((paragraph) => (
        <p>{paragraph}</p>
      ))}
      <LikeButton />
      <section className="comment-section">
        {comments.map((comment, index) => {
          return <Comment comment={comment} key={index} />;
        })}
      </section>
    </article>
  );
};

export default Post;
