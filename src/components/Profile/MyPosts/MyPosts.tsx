import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      <div>My Posts</div>
      <textarea></textarea>
      <button>Add Post</button>
      <div className={styles.posts}>
        <Post message="Hi how are you?" likesCount='20'/>
        <Post message="It is my first post" likesCount='30'/>
      </div>
    </div>
  );
};

export default MyPosts;
