import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';




const MyPosts = () => {
  return (
  <div>
    <div>My Posts</div>
    <textarea></textarea>
    <button>Add Post</button>
    <div className={styles.posts}>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    </div>

</div>
)}

export default MyPosts
