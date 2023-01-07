import React from 'react';
import styles from './Post.module.css'



const Post = () => {
  return (
    <div className={styles.item}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPhD7clYdj1yIC0yM_vJmxwniuUMIeERS9Dg&usqp=CAU'/>
      Post 1
      <div>
        <span>Like</span>
      </div>
    </div>
  )
}

export default Post
