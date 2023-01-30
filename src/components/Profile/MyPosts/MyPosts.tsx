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

  let postsElements = props.posts.map( p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)


  const newPostElement = React.createRef<HTMLTextAreaElement>();

  const addPost = () => {
    let text = newPostElement.current?.value
    alert(text)
  }

  return (
    <div className={styles.postsBlock}>
      <h2>My Posts</h2>
      <div>
        <textarea ref={newPostElement}></textarea>
      </div>

      <div>
        <button onClick={addPost}>Add Post</button>
      </div>

      <div className={styles.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
