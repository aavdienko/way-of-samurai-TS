import React, { ChangeEvent } from 'react';
import styles from './MyPosts.module.css';
import { MyPostsPropsType } from './MyPostsContainer';
import Post from './Post/Post';


const MyPosts = (props: MyPostsPropsType) => {

  let postsElements = props.posts.map((p, index) => (
    <Post key={index} message={p.message} likesCount={p.likesCount} />
  ));

  // const newPostText = React.createRef<HTMLTextAreaElement>();


  const addPostHandler = () => {
    props.addPost()
  };

  const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.currentTarget.value
    props.updateNewPostText(newText)
  };

  return (
    <div className={styles.postsBlock}>
      <h2>My Posts</h2>
      <div>
        <textarea
          onChange={onPostChangeHandler}
          // ref={newPostText}
          value={props.newPostText}
        ></textarea>
      </div>

      <div>
        <button onClick={addPostHandler}>Add Post</button>
      </div>

      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
