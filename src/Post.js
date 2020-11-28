import React from 'react';
import { Avatar } from '@material-ui/core';

import './Post.css';

const Post = ({ imageUrl, username, caption }) => {
  return (
    <div className='post'>
      <div className='post__header'>
        <Avatar
          className='post__avatar'
          src='/static/images/avatar/1.jpg'
          alt={username}
        />
        <h3>{username?.toLowerCase()}</h3>
      </div>
      <img className='post__image' src={imageUrl} alt='' />
      <h4 className='post__text'>
        <strong>{username?.toLowerCase()}</strong>: {caption}
      </h4>
    </div>
  );
};

export default Post;
