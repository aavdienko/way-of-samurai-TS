import React from 'react';
import { ProfilePageType } from '../../../redux/state';
import styles from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props: ProfilePageType) => {

  // вынесли в index.ts
  // let postData = [
  //   {id: 1, message:'Hi how are you?', likesCount: 20},
  //   {id: 2, message:'It is my first post', likesCount: 30}
  // ]

  let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>)


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
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
