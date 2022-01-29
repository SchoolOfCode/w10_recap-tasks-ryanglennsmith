import React from "react";

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <h4>{comment.name} says:</h4>
      <p>{comment.text}</p>
    </div>
  );
};

export default Comment;
