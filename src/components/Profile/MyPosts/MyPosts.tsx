import React from 'react';
import styles from './MyPosts.module.css'



const MyPosts = () => {
  return (
  <div>
    <div>My Posts</div>
    <div>New post</div>
    <div className={styles.item}>Post 1</div>
    <div className={styles.item}>Post 2</div>
</div>
)}

export default MyPosts