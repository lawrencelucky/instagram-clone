import React, { useState, useEffect } from 'react';
import './App.css';

import Post from './Post';

import { db } from './firebase';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot =>
      setPosts(
        snapshot.docs.map(doc => ({
          id: doc.id,
          post: doc.data(),
        }))
      )
    );
  }, []);

  return (
    <div className='app'>
      <div className='app__header'>
        <img
          className='app__headerImage'
          src='https://cdn.svgporn.com/logos/instagram.svg'
          alt=''
        />
      </div>

      {posts.map(({ id, post }) => (
        <Post
          username={post.username}
          imageUrl={post.imageUrl}
          caption={post.caption}
          key={id}
        />
      ))}
    </div>
  );
}

export default App;
