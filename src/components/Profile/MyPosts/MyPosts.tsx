import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={styles.postsBlock}>
      <h2>My Posts</h2>
      
      <div>
        <textarea></textarea>
      </div>

      <div>
        <button>Add Post</button>
      </div>

      <div className={styles.posts}>
        <Post message="Hi how are you?" likesCount="20" />
        <Post message="It is my first post" likesCount="30" />
      </div>
    </div>
  );
};

export default MyPosts;
