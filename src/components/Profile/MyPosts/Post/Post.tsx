import React from 'react';
import styles from './Post.module.css'


type PostPropsType = {
  message: string
  likesCount: string
}

const Post = (props: PostPropsType) => {
  return (
    <div className={styles.item}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPhD7clYdj1yIC0yM_vJmxwniuUMIeERS9Dg&usqp=CAU'/>
      {props.message}
      <div>
        <span>Like {props.likesCount}</span>
      </div>
    </div>
  )
}

export default Post
