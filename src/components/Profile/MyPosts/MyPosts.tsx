import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let postData = [
    {id: 1, message:'Hi how are you?', likesCount: 20},
    {id: 2, message:'It is my first post', likesCount: 30}
  ]


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
        {postData.map((p)=>{
          return <Post message={p.message} likesCount={p.likesCount}/>
        })}
        {/* <Post message="Hi how are you?" likesCount="20" />
        <Post message="It is my first post" likesCount="30" /> */}
      </div>
    </div>
  );
};

export default MyPosts;
