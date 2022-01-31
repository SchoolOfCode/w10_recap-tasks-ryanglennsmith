import React from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import Button from "@mui/material/Button";
const LikeButton = ({ handleClick }) => {
  return (
    <>
      <Button
        onClick={handleClick}
        variant="outlined"
        startIcon={<ThumbUpOutlinedIcon />}
      >
        Like
      </Button>
    </>
  );
};

export default LikeButton;
