import React, { useState } from "react";
import LikeButton from "../LikeButton/LikeButton";
import Comment from "../Comment/Comment";
import css from "./post.module.css";
import {
  Collapse,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const Post = ({ title, paragraphs, comments }) => {
  const [likes, setLikes] = useState(0);
  const [listOpen, setListOpen] = useState(false);
  const handleLikesClick = () => {
    setLikes(likes + 1);
  };
  const handleListClick = () => {
    setListOpen(!listOpen);
  };
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

      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <div className={css.postFooter}>
        <LikeButton handleClick={handleLikesClick} />
        {likes === 1 && <p className={css.likes}>{likes} pigeon likes this</p>}
        {likes > 1 && <p className={css.likes}>{likes} pigeons like this</p>}
        <section className={css.commentSection}>
          <List sx={{ width: "100%" }}>
            <ListItemButton onClick={handleListClick}>
              <ListItemText primary="Comments" />
              {listOpen ? <ExpandMore /> : <ExpandLess />}
            </ListItemButton>
            <Collapse in={listOpen}>
              {comments.map((comment, index) => {
                return (
                  <ListItem key={index}>
                    <ListItemAvatar>
                      <Avatar src={comment.avatar}></Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={<Comment comment={comment} />} />
                  </ListItem>
                );
              })}
            </Collapse>
          </List>
        </section>
      </div>
    </article>
  );
};

export default Post;
