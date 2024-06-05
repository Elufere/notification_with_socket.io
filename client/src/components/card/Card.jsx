import React, { useState } from 'react';
import './card.css';
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { IoShare } from "react-icons/io5"; 
import { IoInformationCircleSharp } from "react-icons/io5";

const Card = ({ post, socket, user }) => {
  const [liked, setLiked] = useState(false);

  const handleNotification = (type) => {
    type === 1 && setLiked(true);
    socket.emit("sendNotification", {
      senderName: user,
      receiverName: post.username,
      type,
    });
  };

  return (
    <div className="card">
      <div className="info">
        <img src={post.userImg} alt="" className="userImg" />
        <span>{post.fullname}</span>
      </div>
      <img src={post.postImg} alt="" className="postImg" />
      <div className="interaction">
        {liked ? (
          <FaHeart className="cardIcon" />
        ) : (
          <FaRegHeart
            className="cardIcon"
            onClick={() => handleNotification(1)}
          />
        )}
        <FaComment
          className="cardIcon"
          onClick={() => handleNotification(2)}
        />
        <IoShare
          className="cardIcon"
          onClick={() => handleNotification(3)}
        />
        <IoInformationCircleSharp className="cardIcon infoIcon" />
      </div>
    </div>
  );
};

export default Card;